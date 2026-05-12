import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useProfile } from "../context/ProfileContext";
import { getTemplate } from "../core/templateRegistry";

// A robust Frame component to sync Tailwind styles and provide a real viewport
const PreviewFrame = ({ children, className, style }) => {
  const [mountNode, setMountNode] = useState(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const doc = frameRef.current?.contentWindow?.document;
    if (!doc) return;

    // Head sync: Copy all styles and fonts from main document
    const head = doc.head;
    
    // Modern way to sync styles for Tailwind/Vite
    const syncStyles = () => {
        head.innerHTML = "";
        document.querySelectorAll('style, link[rel="stylesheet"]').forEach(el => {
            head.appendChild(el.cloneNode(true));
        });
        
        // Add a base style to remove scrollbars or handle overflows
        const style = doc.createElement('style');
        style.textContent = `
            body { margin: 0; padding: 0; background: transparent; }
            ::-webkit-scrollbar { width: 0px; background: transparent; }
        `;
        head.appendChild(style);
    };

    syncStyles();
    
    // Observer for dynamic styles (like Vite HMR)
    const observer = new MutationObserver(syncStyles);
    observer.observe(document.head, { childList: true, subtree: true });

    setMountNode(doc.body);
    return () => observer.disconnect();
  }, []);

  return (
    <iframe ref={frameRef} className={className} style={style}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

function Preview({ zoom = 1, mobile = false }) {
  const { profile } = useProfile();

  const selectedTemplate = getTemplate(profile.mode, profile.selectedTemplate);
  const TemplateComponent = selectedTemplate?.component;

  const isWebMode = profile.mode === "portfolio";
  // Re-evaluate simulation modes
  const isMobileSimulation = isWebMode && mobile;
  const isDesktopSimulation = isWebMode && !mobile;

  // Browser-like window header for desktop simulation
  const BrowserHeader = () => (
    <div className="h-10 bg-gray-100 border-b flex items-center px-4 gap-4 rounded-t-xl overflow-hidden">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
        <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm" />
      </div>
      <div className="flex-1 max-w-sm h-6 bg-white rounded-md border border-gray-200 flex items-center px-3">
        <div className="w-2 h-2 rounded-full bg-gray-200 mr-2" />
        <span className="text-[10px] text-gray-400 truncate">foliox.app/your-portfolio</span>
      </div>
    </div>
  );

  return (
    <div className={`flex justify-center items-start w-full ${isWebMode ? 'p-4 lg:p-8' : 'p-0'}`} style={{ minHeight: '100%' }}>
      <div
        className={`transition-all duration-500 ease-in-out shadow-2xl relative bg-white overflow-hidden w-full ${isWebMode ? 'rounded-xl' : ''}`}
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "top center",
          width: isMobileSimulation ? "375px" : "100%",
          maxWidth: isMobileSimulation ? "375px" : "none",
          height: isMobileSimulation ? "850px" : "auto",
          minHeight: isMobileSimulation ? "850px" : "100vh",
          border: isMobileSimulation ? "14px solid #1a1a1a" : isDesktopSimulation ? "1px solid #e5e7eb" : "none",
          borderRadius: isMobileSimulation ? "50px" : isDesktopSimulation ? "12px" : "0px",
        }}
      >
        {isDesktopSimulation && <BrowserHeader />}
        
        {TemplateComponent ? (
          <PreviewFrame 
            className="w-full h-full border-none"
            style={{ 
              minHeight: isMobileSimulation ? "850px" : "100vh",
              height: isMobileSimulation ? "850px" : "auto" 
            }}
          >
            <TemplateComponent profileData={profile} />
          </PreviewFrame>
        ) : (
          <div className="flex items-center justify-center h-48 text-gray-400 font-bold uppercase tracking-widest">
            Template Not Found
          </div>
        )}
      </div>
    </div>
  );
}

export default Preview;
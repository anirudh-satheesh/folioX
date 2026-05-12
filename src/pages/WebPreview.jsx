import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useProfile } from "../context/ProfileContext";
import { getTemplate } from "../core/templateRegistry";

// Iframe wrapper for isolated CSS and real viewport simulation
const Frame = ({ children, className }) => {
  const [mountNode, setMountNode] = useState(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const doc = frameRef.current?.contentWindow?.document;
    if (!doc) return;

    const head = doc.head;
    const syncStyles = () => {
        head.innerHTML = "";
        document.querySelectorAll('style, link[rel="stylesheet"]').forEach(el => {
            head.appendChild(el.cloneNode(true));
        });
        const customStyle = doc.createElement('style');
        customStyle.textContent = `
            body { margin: 0; padding: 0; background: transparent; overflow-x: hidden; }
            ::-webkit-scrollbar { width: 6px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
            ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
        `;
        head.appendChild(customStyle);
    };

    syncStyles();
    const observer = new MutationObserver(syncStyles);
    observer.observe(document.head, { childList: true, subtree: true });
    setMountNode(doc.body);
    return () => observer.disconnect();
  }, []);

  return (
    <iframe ref={frameRef} className={className} style={{ width: '100%', height: '100%', border: 'none' }}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export const WebPreview = ({ zoom, mobile }) => {
  const { profile } = useProfile();
  const template = getTemplate("portfolio", profile.selectedTemplate);
  const TemplateComponent = template?.component;

  return (
    <div className="w-full h-full p-4 lg:p-8 flex justify-center items-start overflow-hidden bg-[#E9ECF1]">
      <div 
        className="transition-all duration-500 ease-in-out shadow-2xl bg-white flex flex-col relative"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "top center",
          width: mobile ? "375px" : "100%",
          height: mobile ? "850px" : "100%",
          borderRadius: mobile ? "48px" : "16px",
          border: mobile ? "12px solid #1a1a1a" : "1px solid #e5e7eb",
          overflow: "hidden"
        }}
      >
        {/* Browser Header (Only on Desktop) */}
        {!mobile && (
          <div className="h-12 bg-[#F7F8FA] border-b border-gray-200 flex items-center px-5 gap-2 flex-shrink-0">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/60 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-green-400/60 shadow-sm" />
            </div>
            <div className="ml-4 flex-1 max-w-sm h-8 bg-white rounded-xl border border-gray-200 flex items-center px-4">
                <span className="text-[11px] font-medium text-gray-400 truncate">https://foliox.dev/preview</span>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-hidden relative">
          {TemplateComponent ? (
            <Frame className="w-full h-full">
              <TemplateComponent profileData={profile} />
            </Frame>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 font-black uppercase tracking-widest text-xs">
              Portfolio Template Not Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

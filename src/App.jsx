import { useState } from "react";
import Builder from "./pages/Builder";
import Preview from "./pages/Preview";
import { useProfile } from "./context/ProfileContext";

function App() {
  const { profile } = useProfile();
  const [showPreviewMobile, setShowPreviewMobile] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [mobileView, setMobileView] = useState(false);
  const isWebMode = profile.mode === "portfolio";
  const increaseZoom = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const decreaseZoom = () => setZoom(prev => Math.max(prev - 0.2, 0.4));

  return (
    <div className="h-screen flex flex-col lg:flex-row bg-[#F2F4F7] overflow-hidden font-inter selection:bg-black selection:text-white">

      {/* LEFT SIDE - Sidebar Editor */}
      <aside className={`
        ${showPreviewMobile ? 'hidden' : 'flex'} 
        lg:flex w-full lg:w-[480px] h-full bg-white border-r border-gray-200 flex-col shadow-2xl z-20 transition-all duration-500 ease-in-out
      `}>
        <header className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-white/80 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
              <span className="text-white font-black text-2xl italic leading-none select-none">f</span>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-[-0.03em] text-black">folioX</h1>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-0.5">Design System v1.0</p>
            </div>
          </div>
          <button 
            onClick={() => setShowPreviewMobile(true)}
            className="lg:hidden bg-gray-50 border border-gray-100 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-sm"
          >
            Preview
          </button>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-8 py-10 space-y-2">
          <Builder />
        </div>

        <footer className="p-6 border-t border-gray-100 bg-gray-50/30 backdrop-blur-sm flex gap-3">
          <button className="flex-1 bg-black text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] shadow-premium hover:shadow-black/20 hover:scale-[1.02] active:scale-95 transition-all">
            Publish Portfolio
          </button>
        </footer>
      </aside>

      {/* RIGHT SIDE - Canvas Preview */}
      <main className={`
        ${showPreviewMobile ? 'flex' : 'hidden'} 
        lg:flex flex-1 h-full bg-[#E9ECF1] relative overflow-hidden flex-col transition-all duration-500
      `}>
        {/* Canvas Toolbar */}
        <div className="h-16 shrink-0 bg-white/40 backdrop-blur-md border-b border-gray-200 flex items-center justify-between lg:justify-center gap-12 px-8 z-30">
          <button 
            onClick={() => setShowPreviewMobile(false)}
            className="lg:hidden bg-white px-4 py-2 rounded-xl border border-gray-100 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm"
          >
            ← Back
          </button>

          <div className="flex items-center gap-5 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-2xl shadow-premium border border-gray-100 text-sm scale-90 lg:scale-100 transition-all hover:shadow-xl">
            <span className="font-black text-black uppercase tracking-widest text-[11px] truncate max-w-[150px] lg:max-w-none">
              {isWebMode ? `Website / ${profile.selectedTemplate}` : `Resume / ${profile.selectedTemplate}`}
            </span>
            <span className="w-[1px] h-4 bg-gray-200"></span>
            <div className="flex items-center gap-3">
               <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.31.17-.69.17-1 0L3.53 17.38a1 1 0 01-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.31-.17.69-.17 1 0l7.97 4.43c.32.17.53.5.53.88v9z" /></svg>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-1.5 bg-white/60 rounded-2xl border border-white/50 shadow-sm">
            <button onClick={decreaseZoom} className="w-8 h-8 flex items-center justify-center bg-white rounded-xl border border-gray-100 text-xs font-black shadow-sm hover:border-black transition-all">-</button>
            <div className="px-3 min-w-[60px] text-center">
                <span className="text-[11px] font-black text-black uppercase tracking-widest">{Math.round(zoom * 100)}%</span>
            </div>
            <button onClick={increaseZoom} className="w-8 h-8 flex items-center justify-center bg-white rounded-xl border border-gray-100 text-xs font-black shadow-sm hover:border-black transition-all">+</button>
            <span className="w-[1px] h-4 bg-gray-300 ml-2 mr-2"></span>
            {isWebMode && (
              <button
                onClick={() => setMobileView(prev => !prev)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mobileView ? 'bg-black text-white' : 'bg-white text-gray-500 hover:text-black border border-gray-100'}`}
              >
                {mobileView ? "Mobile" : "Desktop"}
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Canvas Area */}
        <div className={`flex-1 h-full flex justify-center items-start overflow-hidden`}>
          <Preview zoom={zoom} mobile={mobileView} />
        </div>
      </main>

    </div>
  );
}

export default App;
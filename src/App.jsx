import { useState } from "react";
import Builder from "./pages/Builder";
import Preview from "./pages/Preview";
import { useProfile } from "./context/ProfileContext";

function App() {
  const { profile } = useProfile();
  const [showPreviewMobile, setShowPreviewMobile] = useState(false);
  const isWebMode = profile.mode === "portfolio";

  return (
    <div className="h-screen flex flex-col lg:flex-row bg-[#F8F9FB] overflow-hidden font-inter">

      {/* LEFT SIDE - Sidebar Editor */}
      <aside className={`
        ${showPreviewMobile ? 'hidden' : 'flex'} 
        lg:flex w-full lg:w-[450px] h-full bg-white border-r border-gray-200 flex-col shadow-xl z-20 transition-all duration-300
      `}>
        <header className="px-6 py-4 border-b flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl italic leading-none">f</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">folioX</h1>
          </div>
          <button 
            onClick={() => setShowPreviewMobile(true)}
            className="lg:hidden bg-gray-100 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest"
          >
            Preview
          </button>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-8">
          <Builder />
        </div>

        <footer className="p-4 border-t bg-gray-50 flex gap-2">
          <button className="flex-1 bg-black text-white py-2.5 rounded-xl font-bold hover:bg-gray-800 transition-all text-sm">
            Publish Portfolio
          </button>
        </footer>
      </aside>

      {/* RIGHT SIDE - Canvas Preview */}
      <main className={`
        ${showPreviewMobile ? 'flex' : 'hidden'} 
        lg:flex flex-1 h-full bg-[#EDF0F5] relative overflow-hidden flex-col
      `}>
        {/* Canvas Toolbar */}
        <div className="h-14 bg-white/50 backdrop-blur-sm border-b flex items-center justify-between lg:justify-center gap-8 px-6">
          <button 
            onClick={() => setShowPreviewMobile(false)}
            className="lg:hidden bg-white px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest"
          >
            ← Back to Edit
          </button>

          <div className="flex items-center gap-4 bg-white px-4 py-1.5 rounded-full shadow-sm border text-sm scale-90 lg:scale-100">
            <span className="font-bold text-black capitalize truncate max-w-[100px] lg:max-w-none">
              {isWebMode ? `Web Template ${profile.selectedTemplate}` : `Template ${profile.selectedTemplate}`}
            </span>
            <span className="w-[1px] h-4 bg-gray-200"></span>
            <div className="flex items-center gap-2 text-gray-400">
               <svg className="w-4 h-4 text-black hidden lg:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">100%</span>
          </div>
        </div>

        {/* Scrollable Canvas Area */}
        <div className={`flex-1 overflow-y-auto custom-scrollbar flex justify-center ${isWebMode ? 'p-0' : 'p-4 lg:p-12'}`}>
          <div className={`${isWebMode ? 'w-full' : 'w-full max-w-[900px] h-fit'} bg-transparent`}>
             <Preview />
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
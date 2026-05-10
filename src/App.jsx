import Builder from "./pages/Builder";
import Preview from "./pages/Preview";

function App() {
  return (
    <div className="h-screen flex bg-[#F8F9FB] overflow-hidden font-inter">

      {/* LEFT SIDE - Sidebar Editor */}
      <aside className="w-[450px] h-full bg-white border-r border-gray-200 flex flex-col shadow-xl z-20">
        <header className="px-6 py-4 border-b flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl italic leading-none">f</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">folioX</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Live Editor</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-8">
          <Builder />
        </div>

        <footer className="p-4 border-t bg-gray-50 flex gap-2">
          <button className="flex-1 bg-black text-white py-2.5 rounded-xl font-bold hover:bg-gray-800 transition-all text-sm">
            Publish Portfolio
          </button>
          <button className="px-4 py-2.5 border border-gray-200 rounded-xl font-bold hover:bg-white transition-all text-sm">
            Export JSON
          </button>
        </footer>
      </aside>

      {/* RIGHT SIDE - Canvas Preview */}
      <main className="flex-1 h-full bg-[#EDF0F5] relative overflow-hidden flex flex-col">
        {/* Canvas Toolbar */}
        <div className="h-14 bg-white/50 backdrop-blur-sm border-b flex items-center justify-center gap-8 px-6">
          <div className="flex items-center gap-4 bg-white px-4 py-1.5 rounded-full shadow-sm border text-sm">
            <button className="text-gray-400 hover:text-black">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
            <span className="w-[1px] h-4 bg-gray-200"></span>
            <span className="font-medium">Template One</span>
            <span className="w-[1px] h-4 bg-gray-200"></span>
            <div className="flex items-center gap-2 text-gray-400">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
               <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </button>
            <span className="text-sm font-bold">100%</span>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>

        {/* Scrollable Canvas Area */}
        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar flex justify-center">
          <div className="w-full max-w-[900px] h-fit bg-transparent">
             <Preview />
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
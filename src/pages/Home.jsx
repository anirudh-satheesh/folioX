import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-inter selection:bg-black selection:text-white text-black overflow-x-hidden relative">
      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.4]"
           style={{ backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100 px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center shadow-lg transform -rotate-3">
            <span className="text-white font-black text-xl italic leading-none select-none">f</span>
          </div>
          <span className="text-xl font-black tracking-tight">folioX</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-500">
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#templates" className="hover:text-black transition-colors">Templates</a>
          <a href="#deploy" className="hover:text-black transition-colors">Deploy</a>
        </div>

        <Link 
          to="/builder"
          className="bg-black text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/10"
        >
          Start Building
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 lg:pt-48 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              Build your portfolio <br/>
              <span className="text-gray-400">website and resume </span>
              in one place.
            </h1>
            <p className="text-lg text-gray-500 max-w-lg mb-10 leading-relaxed font-medium">
              folioX helps developers create customizable portfolio websites and professional resumes with live editing, themes, and modular templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/builder"
                className="bg-black text-white px-10 py-5 rounded-2xl text-[13px] font-black uppercase tracking-widest flex items-center justify-center hover:shadow-2xl hover:shadow-black/20 transition-all group"
              >
                Start Building
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a 
                href="#templates"
                className="bg-gray-50 border border-gray-100 text-black px-10 py-5 rounded-2xl text-[13px] font-black uppercase tracking-widest flex items-center justify-center hover:bg-white hover:shadow-xl transition-all"
              >
                Explore Templates
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* PRODUCT MOCKUP REPRESENTATION */}
            <div className="relative bg-gray-100 rounded-[32px] p-4 lg:p-6 shadow-2xl border border-gray-200 overflow-hidden group">
              {/* Fake UI Header */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="w-32 h-2 bg-gray-100 rounded-full" />
                <div className="w-10 h-10 bg-black rounded-lg" />
              </div>

              {/* Fake Workspace */}
              <div className="flex gap-4 aspect-[4/3]">
                {/* Editor Sidebar */}
                <div className="w-1/3 bg-white rounded-2xl border border-gray-100 p-4 space-y-4">
                  <div className="h-4 w-full bg-gray-100 rounded-lg" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-10 w-full bg-gray-50 rounded-xl border border-gray-100" />
                    ))}
                  </div>
                </div>
                {/* Preview Area */}
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white flex flex-col p-8">
                     <div className="w-3/4 h-8 bg-gray-900 rounded-lg mb-4" />
                     <div className="w-1/2 h-4 bg-gray-200 rounded-lg mb-8" />
                     <div className="grid grid-cols-2 gap-4">
                       <div className="aspect-square bg-gray-100 rounded-2xl" />
                       <div className="aspect-square bg-gray-100 rounded-2xl" />
                     </div>
                   </div>
                </div>
              </div>

              {/* Resume Preview Overlay */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -bottom-8 w-48 h-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 transform rotate-6 z-10"
              >
                <div className="w-full h-full border border-gray-50 rounded-lg p-3">
                  <div className="w-1/2 h-2 bg-black rounded-full mb-2" />
                  <div className="w-full h-1 bg-gray-100 rounded-full mb-1" />
                  <div className="w-full h-1 bg-gray-100 rounded-full mb-1" />
                  <div className="w-3/4 h-1 bg-gray-100 rounded-full mb-6" />
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="space-y-1">
                        <div className="w-1/3 h-1.5 bg-gray-300 rounded-full" />
                        <div className="w-full h-1 bg-gray-50 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Decorative Background Glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-black/5 to-transparent blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE FEATURES SECTION */}
      <section id="features" className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              index={0}
              title="Live Editing"
              description="See changes instantly while building your portfolio."
              icon="⚡"
            />
            <FeatureCard 
              index={1}
              title="Resume + Website"
              description="Generate both resumes and portfolio websites from one profile."
              icon="📄"
            />
            <FeatureCard 
              index={2}
              title="Dynamic Themes"
              description="Customize colors, layouts, and appearance in real time."
              icon="🎨"
            />
            <FeatureCard 
              index={3}
              title="Deploy Anywhere"
              description="Export your portfolio and deploy it using platforms like Vercel or Netlify."
              icon="🚀"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black tracking-tight mb-6">Edit Once. Publish Everywhere.</h2>
          <p className="text-gray-500 mb-20 font-medium">Our unified profile architecture ensures your data is synced across all outputs.</p>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Flow Steps */}
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 bg-white shadow-xl border border-gray-100 rounded-3xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📝</div>
              <span className="text-[11px] font-black uppercase tracking-widest">Profile Data</span>
            </div>

            <div className="hidden md:block w-32 h-px bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100" />
            <div className="md:hidden w-px h-12 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100" />

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 bg-black shadow-2xl rounded-[32px] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">⚙️</div>
              <span className="text-[11px] font-black uppercase tracking-widest">folioX Engine</span>
            </div>

            <div className="hidden md:block w-32 h-px bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100" />
            <div className="md:hidden w-px h-12 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100" />

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 bg-white shadow-xl border border-gray-100 rounded-3xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🌐</div>
              <span className="text-[11px] font-black uppercase tracking-widest text-center">Resume + Portfolio</span>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPLATE SHOWCASE SECTION */}
      <section id="templates" className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-4">Crafted Templates</h2>
              <p className="text-gray-500 font-medium">Beautifully designed layouts for every developer's personality.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TemplateCard 
              title="Modern Minimal"
              type="Website"
              description="A clean, typography-focused layout for modern developers."
              color="bg-slate-900"
            />
            <TemplateCard 
              title="Classic Executive"
              type="Resume"
              description="Professional resume format optimized for ATS and recruiters."
              color="bg-white border border-gray-200"
            />
            <TemplateCard 
              title="Dynamic Grid"
              type="Website"
              description="Showcase your projects in an interactive, modular grid."
              color="bg-blue-600"
            />
          </div>
        </div>
      </section>

      {/* DEPLOYMENT SECTION */}
      <section id="deploy" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-6">Export and Deploy <br/>Your Portfolio</h2>
              <p className="text-gray-500 mb-10 text-lg leading-relaxed font-medium">
                Download your portfolio as deployable files and host it anywhere. We generate production-ready code that works out of the box with your favorite providers.
              </p>
              <div className="flex flex-wrap gap-8 opacity-40">
                <div className="flex items-center gap-2 grayscale brightness-0">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-[10px]">▲</div>
                  <span className="font-black text-sm">Vercel</span>
                </div>
                <div className="flex items-center gap-2 grayscale brightness-0">
                  <div className="w-8 h-8 rounded-md bg-black" />
                  <span className="font-black text-sm">Netlify</span>
                </div>
                <div className="flex items-center gap-2 grayscale brightness-0">
                   <div className="w-8 h-8 rounded-full bg-black" />
                  <span className="font-black text-sm">GitHub Pages</span>
                </div>
              </div>
            </div>
            <div className="bg-black rounded-[40px] p-12 text-white relative overflow-hidden group">
               <div className="relative z-10">
                 <div className="mb-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                    <pre className="text-blue-300 text-sm font-mono leading-relaxed">
                      <code>{`npm run build
# Generating assets...
# Portfolio ready at ./dist
# Deploying to production...`}</code>
                    </pre>
                 </div>
                 <h3 className="text-2xl font-black mb-4">Production Ready</h3>
                 <p className="text-gray-400 font-medium">Optimized, high-performance static websites that score 100 on Lighthouse.</p>
               </div>
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-black rounded-[48px] p-12 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 leading-tight">
              Start building your professional <br className="hidden lg:block" /> presence today.
            </h2>
            <Link 
              to="/builder"
              className="inline-block bg-white text-black px-12 py-6 rounded-[24px] text-[15px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10"
            >
              Launch folioX
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-black pointer-events-none" />
           {/* Animated glow */}
           <motion.div 
             animate={{ 
               scale: [1, 1.2, 1],
               opacity: [0.3, 0.5, 0.3]
             }}
             transition={{ duration: 10, repeat: Infinity }}
             className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 blur-[120px] rounded-full"
           />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl italic leading-none">f</span>
            </div>
            <span className="text-xl font-black tracking-tight">folioX</span>
          </div>
          
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
            © 2026 folioX Labs. All rights reserved.
          </div>

          <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-black transition-colors">GitHub</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
            <a href="#" className="hover:text-black transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description, icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group p-10 bg-white rounded-[32px] border border-gray-100 hover:shadow-2xl hover:shadow-black/[0.03] hover:-translate-y-2 transition-all duration-500"
  >
    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform mb-8">
      {icon}
    </div>
    <h3 className="text-lg font-black mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed font-medium">{description}</p>
  </motion.div>
);

const TemplateCard = ({ title, type, description, color }) => (
  <div className="group cursor-pointer">
    <div className={`aspect-[4/5] rounded-[40px] mb-6 relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/10 ${color}`}>
       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
       {/* Fake mockup content in template preview */}
       <div className="absolute inset-x-8 top-12 bottom-0 bg-white/90 backdrop-blur-sm rounded-t-3xl border-t border-x border-gray-100 p-6 space-y-4 transform translate-y-12 group-hover:translate-y-4 transition-transform duration-700">
          <div className="w-12 h-12 bg-black rounded-xl" />
          <div className="space-y-2">
            <div className="h-4 w-3/4 bg-gray-900 rounded-lg" />
            <div className="h-2 w-1/2 bg-gray-200 rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4">
            <div className="aspect-[4/3] bg-gray-100 rounded-xl" />
            <div className="aspect-[4/3] bg-gray-100 rounded-xl" />
          </div>
       </div>
    </div>
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-black text-white rounded-md">{type}</span>
    </div>
    <h3 className="text-xl font-black tracking-tight mb-2">{title}</h3>
    <p className="text-gray-500 text-xs leading-relaxed font-medium">{description}</p>
  </div>
);

export default Home;

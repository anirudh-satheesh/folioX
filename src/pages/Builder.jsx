import { useProfile } from "../context/ProfileContext";
import { Reorder } from "framer-motion";
import { sectionRegistry } from "../core/sectionRegistry";
import { Section } from "../components/EditorUI";

function Builder() {
  const { profile, setProfile } = useProfile();
  
  return (
    <div className="pb-24">
      {/* MODE SELECTOR */}
      <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8">
        <button 
          onClick={() => setProfile({ ...profile, mode: 'portfolio' })}
          className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${profile.mode === 'portfolio' ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}
        >
          Website
        </button>
        <button 
          onClick={() => setProfile({ ...profile, mode: 'resume' })}
          className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${profile.mode === 'resume' ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}
        >
          Resume
        </button>
      </div>

      {/* TEMPLATE PICKER */}
      <Section title="Templates" badge="New">
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setProfile({ ...profile, selectedTemplate: 'one' })}
            className={`p-1 rounded-2xl border-2 transition-all ${profile.selectedTemplate === 'one' ? 'border-black' : 'border-transparent'}`}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl flex items-center justify-center">
              <span className="text-white text-[10px] font-black uppercase">Template One</span>
            </div>
          </button>
          <button 
            onClick={() => setProfile({ ...profile, selectedTemplate: 'two' })}
            className={`p-1 rounded-2xl border-2 transition-all ${profile.selectedTemplate === 'two' ? 'border-black' : 'border-transparent'}`}
          >
            <div className="aspect-[4/3] bg-[#0a0a0a] border border-gray-800 rounded-xl flex items-center justify-center overflow-hidden relative">
               <div className="w-1/3 h-full border-r border-gray-800 bg-black flex items-center justify-center relative z-10">
                 <div className="w-4 h-1 bg-gray-700 rounded-full" />
               </div>
               <div className="flex-1 p-2 space-y-1 relative z-10">
                 <div className="w-full h-1 bg-gray-800 rounded-full" />
                 <div className="w-2/3 h-1 bg-gray-800 rounded-full" />
               </div>
               <span className="absolute bottom-2 right-2 text-white/50 text-[8px] font-black uppercase z-20">Template Two</span>
            </div>
          </button>
        </div>
      </Section>

      {/* SECTION ORDERING */}
      <Section title="Structure" badge="Drag">
        <Reorder.Group 
          axis="y" 
          values={profile.sectionOrder} 
          onReorder={(newOrder) => setProfile({ ...profile, sectionOrder: newOrder })}
          className="space-y-2"
        >
          {profile.sectionOrder.map((sectionId) => (
            <Reorder.Item 
              key={sectionId} 
              value={sectionId}
              className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center justify-between cursor-grab active:cursor-grabbing hover:border-black/10 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-black transition-colors" />
                <span className="capitalize text-xs font-bold text-gray-600 group-hover:text-black">
                    {sectionRegistry[sectionId]?.title || sectionId}
                </span>
              </div>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8h16M4 16h16" />
              </svg>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Section>

      {/* THEME & APPEARANCE */}
      <Section title="Appearance">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase">Primary</label>
            <div className="flex gap-2 items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
              <input
                type="color"
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent"
                value={profile.theme.primary}
                onChange={(e) => setProfile({ ...profile, theme: { ...profile.theme, primary: e.target.value } })}
              />
              <span className="text-[11px] font-mono font-medium">{profile.theme.primary}</span>
            </div>
          </div>
          <div className="space-y-1">
             <label className="text-[10px] font-bold text-gray-400 uppercase">Secondary</label>
             <div className="flex gap-2 items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
              <input
                type="color"
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent"
                value={profile.theme.secondary}
                onChange={(e) => setProfile({ ...profile, theme: { ...profile.theme, secondary: e.target.value } })}
              />
              <span className="text-[11px] font-mono font-medium">{profile.theme.secondary}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* STATIC CONTENT SECTIONS */}
      <sectionRegistry.hero.Editor />
      <sectionRegistry.basics.Editor />

      {/* DYNAMIC CONTENT SECTIONS (REORDERABLE) */}
      <div className="space-y-0">
        {profile.sectionOrder.map(id => {
            const SectionEditor = sectionRegistry[id]?.Editor;
            return SectionEditor ? <SectionEditor key={id} /> : null;
        })}
      </div>

      {/* SOCIAL SECTION (STATIC FOR NOW) */}
      <sectionRegistry.social.Editor />

    </div>
  );
}

export default Builder;
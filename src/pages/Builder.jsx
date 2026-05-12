
import { useProfile } from "../context/ProfileContext";
import { Reorder } from "framer-motion";
import { sectionRegistry } from "../core/sectionRegistry";
import { templateRegistry } from "../core/templateRegistry";
import { SectionCard } from "../components/ui/fields";


function Builder() {
  const { profile, setProfile } = useProfile();

  
  // Filter templates based on current mode (Resume vs Website)
  const availableTemplates = templateRegistry.filter(t => t.mode === profile.mode);


  
  return (
    <div className="pb-24">
      {/* MODE SELECTOR */}
      <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8">
        <button 
          onClick={() => setProfile({ ...profile, mode: 'portfolio', selectedTemplate: 'one' })}
          className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${profile.mode === 'portfolio' ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}
        >
          Website
        </button>
        <button 
          onClick={() => setProfile({ ...profile, mode: 'resume', selectedTemplate: 'one' })}
          className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${profile.mode === 'resume' ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}
        >
          Resume
        </button>
      </div>

      {/* TEMPLATE PICKER */}
      <SectionCard title="Templates" badge={availableTemplates.length.toString()}>
        <div className="grid grid-cols-2 gap-3">
          {availableTemplates.map((template) => (
            <button 
              key={template.id}
              onClick={() => setProfile({ ...profile, selectedTemplate: template.id })}
              className={`p-1 rounded-2xl border-2 transition-all text-left ${profile.selectedTemplate === template.id ? 'border-black' : 'border-transparent'}`}
            >
              <div className={`aspect-[4/3] rounded-xl flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gray-50 border border-gray-100 group`}>
                <div className="w-full h-full absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br from-black to-gray-500" />
                <span className="text-[10px] font-black uppercase tracking-wider text-center relative z-10">{template.name}</span>
                <div className="mt-2 w-8 h-1 bg-black/10 rounded-full relative z-10" />
              </div>
            </button>
          ))}
        </div>
      </SectionCard>

      {/* SECTION ORDERING */}
      <SectionCard title="Structure" badge="Drag">
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
      </SectionCard>

      {/* THEME & APPEARANCE */}
      <SectionCard title="Appearance">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Primary</label>
            <div className="flex gap-2 items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
              <input
                type="color"
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-none"
                value={profile.theme.primary}
                onChange={(e) => setProfile({ ...profile, theme: { ...profile.theme, primary: e.target.value } })}
              />
              <span className="text-[11px] font-mono font-medium">{profile.theme.primary}</span>
            </div>
          </div>
          <div className="space-y-1">
             <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Secondary</label>
             <div className="flex gap-2 items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
              <input
                type="color"
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-none"
                value={profile.theme.secondary}
                onChange={(e) => setProfile({ ...profile, theme: { ...profile.theme, secondary: e.target.value } })}
              />
              <span className="text-[11px] font-mono font-medium">{profile.theme.secondary}</span>
            </div>
          </div>
        </div>
      </SectionCard>

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
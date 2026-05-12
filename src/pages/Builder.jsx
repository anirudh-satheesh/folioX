
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
    <div className="pb-32">
      {/* MODE SELECTOR */}
      <div className="flex bg-[#F2F4F7] p-1.5 rounded-2xl mb-10 shadow-inner">
        <button
          onClick={() => setProfile(prev => ({ ...prev, mode: 'portfolio', selectedTemplate: 'one' }))}
          className={`flex-1 py-3.5 text-[11px] font-black uppercase tracking-[0.15em] rounded-xl transition-all duration-300 ${profile.mode === 'portfolio' ? 'bg-white shadow-md text-black ring-1 ring-black/5' : 'text-gray-400 hover:text-black'}`}
        >
          Website
        </button>
        <button
          onClick={() => setProfile(prev => ({ ...prev, mode: 'resume', selectedTemplate: 'one' }))}
          className={`flex-1 py-3.5 text-[11px] font-black uppercase tracking-[0.15em] rounded-xl transition-all duration-300 ${profile.mode === 'resume' ? 'bg-white shadow-md text-black ring-1 ring-black/5' : 'text-gray-400 hover:text-black'}`}
        >
          Resume
        </button>
      </div>

      {/* TEMPLATE PICKER */}
      <SectionCard title="Themes & Layouts" badge={availableTemplates.length.toString()}>
        <div className="grid grid-cols-2 gap-4">
          {availableTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => setProfile(prev => ({ ...prev, selectedTemplate: template.id }))}
              className={`group p-1.5 rounded-[22px] border-2 transition-all duration-500 transform hover:scale-[1.03] ${profile.selectedTemplate === template.id ? 'border-black bg-black/[0.02]' : 'border-transparent'}`}
            >
              <div className="aspect-[4/3] rounded-[15px] flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                <div className="w-full h-full absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br from-black to-gray-500" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-center relative z-10 leading-none">{template.name}</span>
                <div className={`mt-2.5 w-6 h-1 rounded-full relative z-10 transition-all duration-500 ${profile.selectedTemplate === template.id ? 'bg-black w-10' : 'bg-black/10'}`} />
              </div>
            </button>
          ))}
        </div>
      </SectionCard>

      {/* SECTION ORDERING */}
      <SectionCard title="Draft Structure" badge="Reorder">
        <Reorder.Group
          axis="y"
          values={profile.sectionOrder}
          onReorder={(newOrder) => setProfile(prev => ({ ...prev, sectionOrder: newOrder }))}
          className="space-y-2.5"
        >
          {profile.sectionOrder.map((sectionId) => (
            <Reorder.Item 
              key={sectionId} 
              value={sectionId}
              className="bg-[#F8F9FA] border border-transparent rounded-2xl p-4 flex items-center justify-between cursor-grab active:cursor-grabbing hover:bg-white hover:border-gray-100 hover:shadow-xl hover:shadow-black/[0.02] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-gray-200 rounded-full group-hover:bg-black transition-colors" />
                <span className="capitalize text-[11px] font-black text-gray-400 group-hover:text-black uppercase tracking-widest transition-colors">
                    {sectionRegistry[sectionId]?.title || sectionId}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 opacity-30 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-0.5 bg-black rounded-full" />
                <div className="w-4 h-0.5 bg-black rounded-full" />
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </SectionCard>

      {/* THEME & APPEARANCE */}
      <SectionCard title="Identity Colors">
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-2xl border border-transparent hover:border-gray-50 transition-all">
             <div>
                <label htmlFor="primary-color" className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Primary Branding</label>
                <span className="text-[12px] font-mono font-black text-black">{profile.theme.primary}</span>
             </div>
             <input
                id="primary-color"
                type="color"
                className="w-10 h-10 rounded-full cursor-pointer bg-transparent border-none appearance-none [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-2 [&::-webkit-color-swatch]:border-white [&::-webkit-color-swatch]:shadow-sm"
                value={profile.theme.primary}
                onChange={(e) => setProfile(prev => ({ ...prev, theme: { ...prev.theme, primary: e.target.value } }))}
              />
          </div>
          <div className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-2xl border border-transparent hover:border-gray-50 transition-all">
             <div>
                <label htmlFor="secondary-color" className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Accent Layer</label>
                <span className="text-[12px] font-mono font-black text-black">{profile.theme.secondary}</span>
             </div>
             <input
                id="secondary-color"
                type="color"
                className="w-10 h-10 rounded-full cursor-pointer bg-transparent border-none appearance-none [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-2 [&::-webkit-color-swatch]:border-white [&::-webkit-color-swatch]:shadow-sm"
                value={profile.theme.secondary}
                onChange={(e) => setProfile(prev => ({ ...prev, theme: { ...prev.theme, secondary: e.target.value } }))}
              />
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
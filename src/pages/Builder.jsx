
import { useProfile } from "../context/ProfileContext";
import { Reorder } from "framer-motion";
import { sectionRegistry } from "../core/sectionRegistry";
import { templateRegistry } from "../core/templateRegistry";
import { SectionCard } from "../components/ui/fields";
import { useThemeManager } from "../core/theme/ThemeProvider";
import AppearancePanel from "../components/builder/AppearancePanel";


function Builder() {
  const { profile, setProfile } = useProfile();
  const { setTheme, presets, currentTheme } = useThemeManager();
  
  // Filter templates based on current mode (Resume vs Website)
  const availableTemplates = templateRegistry.filter(t => t.mode === profile.mode);
  const activeTemplate = templateRegistry.find(t => t.id === profile.selectedTemplate) || availableTemplates[0];
  const supportedSections = activeTemplate?.supports?.sections || [];

  return (
    <div className="pb-32">
      {/* MODE SELECTOR */}
      <div className="flex bg-[#F2F4F7] p-1.5 rounded-2xl mb-10 shadow-inner">
        <button
          onClick={() => setProfile(prev => ({ ...prev, mode: 'portfolio', selectedTemplate: 'web-one' }))}
          className={`flex-1 py-3.5 text-[11px] font-black uppercase tracking-[0.15em] rounded-xl transition-all duration-300 ${profile.mode === 'portfolio' ? 'bg-white shadow-md text-black ring-1 ring-black/5' : 'text-gray-400 hover:text-black'}`}
        >
          Website
        </button>
        <button
          onClick={() => setProfile(prev => ({ ...prev, mode: 'resume', selectedTemplate: 'resume-one' }))}
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

       <SectionCard title="Draft Structure" badge="Reorder">
        <p className="text-[10px] text-gray-400 mb-4 px-1 italic">Showing only sections supported by <b>{activeTemplate?.name}</b></p>
        <Reorder.Group
          axis="y"
          values={profile.sectionOrder}
          onReorder={(newOrder) => setProfile(prev => ({ ...prev, sectionOrder: newOrder }))}
          className="space-y-2.5"
        >
          {profile.sectionOrder.filter(id => supportedSections.includes(id)).map((sectionId) => (
             <Reorder.Item 
              key={sectionId} 
              value={sectionId}
              className={`bg-[#F8F9FA] border border-transparent rounded-2xl p-4 flex items-center justify-between cursor-grab active:cursor-grabbing hover:bg-white hover:border-gray-100 hover:shadow-xl hover:shadow-black/[0.02] transition-all duration-300 group ${!profile.visibleSections?.[sectionId] ? 'opacity-50 grayscale' : ''}`}
            >
              <div className="flex items-center gap-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setProfile(prev => ({
                      ...prev,
                      visibleSections: {
                        ...prev.visibleSections,
                        [sectionId]: !prev.visibleSections?.[sectionId]
                      }
                    }));
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${profile.visibleSections?.[sectionId] ? 'bg-black text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                >
                  <span className="text-[10px]">{profile.visibleSections?.[sectionId] ? '👁' : '✕'}</span>
                </button>
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

      {/* GLOBAL THEME ENGINE */}
      {activeTemplate?.supports?.darkMode && (
        <SectionCard title="Global Aesthetic" badge="Premium">
          <div className="grid grid-cols-3 gap-3">
            {Object.values(presets).map((p) => (
              <button
                key={p.id}
                onClick={() => setTheme(p.id)}
                className={`group p-3 rounded-2xl border-2 transition-all duration-300 ${currentTheme.id === p.id ? 'border-black bg-black text-white shadow-xl shadow-black/20 scale-105' : 'border-gray-100 bg-white text-gray-400 hover:border-black/10'}`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.colors.primary }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.colors.background }} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest">{p.name}</span>
                </div>
              </button>
            ))}
          </div>
        </SectionCard>
      )}

      {/* APPEARANCE CUSTOMIZER */}
      <AppearancePanel />


      {/* DYNAMIC CONTENT SECTIONS (REORDERABLE) */}
      <div className="space-y-0">
        {profile.sectionOrder
            .filter(id => supportedSections.includes(id))
            .map(id => {
                const SectionEditor = sectionRegistry[id]?.Editor;
                return SectionEditor ? <SectionEditor key={id} /> : null;
            })}
      </div>

    </div>
  );
}

export default Builder;
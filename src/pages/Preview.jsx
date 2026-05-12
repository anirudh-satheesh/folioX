import { useProfile } from "../context/ProfileContext";
import { getTemplate } from "../core/templateRegistry";

function Preview() {
  const { profile } = useProfile();

  const selectedTemplate = getTemplate(profile.mode, profile.selectedTemplate);
  const TemplateComponent = selectedTemplate?.component;

  const isWebMode = profile.mode === "portfolio";

  return (
    <div className={`min-h-screen transition-all duration-500 bg-white ${isWebMode ? 'p-0 w-full' : 'p-10'}`}>
      {TemplateComponent ? (
        <TemplateComponent profileData={profile} />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400 font-bold uppercase tracking-widest">
          Template Not Found
        </div>
      )}
    </div>
  );
}

export default Preview;
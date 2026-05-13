import { useProfile } from "../../context/ProfileContext";
import { getTemplate } from "../../core/templateRegistry";

export const ResumePreview = ({ zoom }) => {
  const { profile } = useProfile();
  const template = getTemplate("resume", profile.selectedTemplate);
  const TemplateComponent = template?.component;

  return (
    <div className="w-full h-full overflow-auto bg-[#E9ECF1] custom-scrollbar">
      <div 
        className="mx-auto transition-all duration-300 py-12 px-4 lg:px-12"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "top center",
          width: "100%",
        }}
      >
        <div className="bg-white shadow-2xl min-h-[1100px] w-full">
          {TemplateComponent ? (
            <TemplateComponent profileData={profile} />
          ) : (
            <div className="flex items-center justify-center p-20 text-gray-400 font-black uppercase tracking-widest text-xs">
              Resume Template Not Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

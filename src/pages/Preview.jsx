import { useProfile } from "../context/ProfileContext";
import TemplateOne from "../templates/portfolio/TemplateOne";
import TemplateTwo from "../templates/portfolio/TemplateTwo";
import WebTemplateOne from "../templates/website/WebTemplateOne";

function Preview() {
  const { profile } = useProfile();

  const renderTemplate = () => {
    // If in portfolio mode, use web templates
    if (profile.mode === "portfolio") {
       return <WebTemplateOne profileData={profile} />;
    }

    // Standard Resume Mode
    switch (profile.selectedTemplate) {
      case "one":
        return <TemplateOne profileData={profile} />;
      case "two":
        return <TemplateTwo profileData={profile} />;
      default:
        return <TemplateOne profileData={profile} />;
    }
  };

  const isWebMode = profile.mode === "portfolio";

  return (
    <div className={`min-h-screen transition-all duration-500 bg-white ${isWebMode ? 'p-0 w-full' : 'p-10'}`}>
      {renderTemplate()}
    </div>
  );
}

export default Preview;
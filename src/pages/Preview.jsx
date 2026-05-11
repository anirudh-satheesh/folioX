import { useProfile } from "../context/ProfileContext";
import TemplateOne from "../templates/resume/TemplateOne";
import TemplateTwo from "../templates/resume/TemplateTwo";
import WebTemplateOne from "../templates/website/WebTemplateOne";
import WebTemplateTwo from "../templates/website/WebTemplateTwo";

function Preview() {
  const { profile } = useProfile();

  const renderTemplate = () => {
    if (profile.mode === "portfolio") {
      switch (profile.selectedTemplate) {
        case "one":
          return <WebTemplateOne profileData={profile} />;
        case "two":
          return <WebTemplateTwo profileData={profile} />;
        default:
          return <WebTemplateOne profileData={profile} />;
      }
    }

    // Resume Mode
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
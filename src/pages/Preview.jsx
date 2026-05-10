import { useProfile } from "../context/ProfileContext";
import TemplateOne from "../templates/portfolio/TemplateOne";

function Preview() {
  const { profile } = useProfile();

  return (
    <div className="min-h-screen p-10">
      <TemplateOne profileData={profile} />
    </div>
  );
}

export default Preview;
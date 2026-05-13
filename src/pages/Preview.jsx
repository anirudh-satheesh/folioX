import { useProfile } from "../context/ProfileContext";
import { WebPreview } from "../components/preview/WebPreview";
import { ResumePreview } from "../components/preview/ResumePreview";

/**
 * Preview Dispatcher
 * Separates Desktop/Mobile Portfolio simulation from Document-style Resume rendering.
 */
function Preview({ zoom = 1, mobile = false }) {
  const { profile } = useProfile();
  const isWebMode = profile.mode === "portfolio";

  if (isWebMode) {
    return <WebPreview zoom={zoom} mobile={mobile} />;
  }

  return <ResumePreview zoom={zoom} />;
}

export default Preview;
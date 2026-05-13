import React from 'react';
import { sectionComponentRegistry } from './sectionComponentRegistry';
import { useProfile } from '../../context/ProfileContext';

/**
 * Dynamic Section Renderer
 * Responsibility: Resolve and render the correct section component based on the active template and data.
 */
const SectionRenderer = ({ section, profileData, templateId: manualTemplateId }) => {
  if (typeof section !== 'string' || !section) {
    console.warn(`Invalid section prop passed to SectionRenderer: ${section}`);
    return null;
  }

  const { profile } = useProfile();
  
  // Use manual override if provided, otherwise fallback to current profile template
  const activeTemplateId = manualTemplateId || profile?.selectedTemplate;
  
  // Check visibility
  const isVisible = profile?.visibleSections?.[section] ?? true;
  if (!isVisible) return null;

  // Resolve component from registry
  const TemplateSpecificComponent = sectionComponentRegistry[section]?.[activeTemplateId];
  
  // If no template-specific component is found, we might want a fallback or just return null
  if (!TemplateSpecificComponent) {
    console.warn(`No component registered for section "${section}" in template "${activeTemplateId}"`);
    return null;
  }

  return <TemplateSpecificComponent profileData={profileData || profile} />;
};

export default SectionRenderer;
export { SectionRenderer };

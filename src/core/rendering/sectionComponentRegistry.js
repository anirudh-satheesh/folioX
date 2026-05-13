/**
 * Central registry for section display components.
 * This maps [SectionID] -> { [TemplateID]: Component }
 */
export const sectionComponentRegistry = {
  hero: {},
  basics: {},
  skills: {},
  projects: {},
  experience: {},
  education: {},
  certifications: {},
  achievements: {},
  social: {},
};

/**
 * Helper to register a section component for a specific template
 */
export const registerSection = (sectionId, templateId, component) => {
  if (!sectionComponentRegistry[sectionId]) {
    sectionComponentRegistry[sectionId] = {};
  }
  sectionComponentRegistry[sectionId][templateId] = component;
};

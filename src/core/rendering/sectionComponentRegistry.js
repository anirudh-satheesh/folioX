/**
 * Central registry for section display components.
 * This maps [SectionID] -> { [TemplateID]: Component }
 */
export const sectionComponentRegistry = {};

/**
 * Helper to register a section component for a specific template
 */
export const registerSection = (sectionId, templateId, component) => {
  if (typeof component !== 'function' && (!component || typeof component.render !== 'function')) {
    console.error(`Invalid component registered for section "${sectionId}":`, component);
    return;
  }

  if (!sectionComponentRegistry[sectionId]) {
    sectionComponentRegistry[sectionId] = {};
  }
  sectionComponentRegistry[sectionId][templateId] = component;
};

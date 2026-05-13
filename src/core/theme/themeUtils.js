/**
 * converts a theme object into a flat object of CSS variables
 * @param {Object} theme 
 * @returns {Object} 
 */
export const themeToCssVars = (theme) => {
  const vars = {};
  
  // Colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    vars[`--color-${key}`] = value;
  });
  
  // Typography
  vars[`--font-heading`] = theme.typography.heading;
  vars[`--font-body`] = theme.typography.body;
  vars[`--type-scale`] = theme.typography.scale;
  
  // Radius
  Object.entries(theme.radius).forEach(([key, value]) => {
    vars[`--radius-${key}`] = value;
  });
  
  // Shadow
  Object.entries(theme.shadow).forEach(([key, value]) => {
    vars[`--shadow-${key}`] = value;
  });

  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    vars[`--spacing-${key}`] = value;
  });

  // Density
  vars[`--density`] = theme.density;
  
  return vars;
};

/**
 * Applies theme variables to an element (usually document.documentElement)
 * @param {Object} theme 
 * @param {HTMLElement} element 
 */
export const applyTheme = (theme, element = document.documentElement) => {
  const vars = themeToCssVars(theme);
  Object.entries(vars).forEach(([key, value]) => {
    element.style.setProperty(key, value);
  });
};

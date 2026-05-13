/**
 * converts a theme object into a flat object of CSS variables
 * @param {Object} theme 
 * @returns {Object} 
 */
export const themeToCssVars = (theme) => {
  const vars = {};
  if (!theme) return vars;
  
  // Colors
  Object.entries(theme.colors || {}).forEach(([key, value]) => {
    vars[`--color-${key}`] = value;
  });
  
  // Typography
  vars[`--font-heading`] = theme.typography?.heading || 'Inter, sans-serif';
  vars[`--font-body`] = theme.typography?.body || 'Inter, sans-serif';
  vars[`--type-scale`] = theme.typography?.scale || 1;
  
  // Radius
  Object.entries(theme.radius || {}).forEach(([key, value]) => {
    vars[`--radius-${key}`] = value;
  });
  
  // Shadow
  Object.entries(theme.shadow || {}).forEach(([key, value]) => {
    vars[`--shadow-${key}`] = value;
  });

  // Spacing
  Object.entries(theme.spacing || {}).forEach(([key, value]) => {
    vars[`--spacing-${key}`] = value;
  });

  // Density
  vars[`--density`] = theme.density || 1;
  
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

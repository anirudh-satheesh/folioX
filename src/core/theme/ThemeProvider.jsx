import React, { createContext, useContext, useState, useEffect } from 'react';
import { themePresets } from './themePresets';
import { applyTheme } from './themeUtils';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children, initialThemeId = 'midnight' }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('foliox_theme');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return themePresets[initialThemeId] || themePresets.midnight;
  });

  useEffect(() => {
    // Apply themes as CSS variables for global access
    applyTheme(currentTheme);
    // Persist
    localStorage.setItem('foliox_theme', JSON.stringify(currentTheme));
  }, [currentTheme]);

  const setTheme = (themeId) => {
    if (themePresets[themeId]) {
      setCurrentTheme(themePresets[themeId]);
    }
  };

  const updateTheme = (updates) => {
    setCurrentTheme(prev => ({
      ...prev,
      ...updates,
      colors: { ...prev.colors, ...(updates.colors || {}) },
      typography: { ...prev.typography, ...(updates.typography || {}) },
      radius: { ...prev.radius, ...(updates.radius || {}) },
      shadow: { ...prev.shadow, ...(updates.shadow || {}) },
    }));
  };

  const value = {
    theme: currentTheme,
    setTheme,
    updateTheme,
    presets: themePresets,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.theme;
};

// Also export a specialized hook for management if needed
export const useThemeManager = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeManager must be used within a ThemeProvider');
  }
  return {
    setTheme: context.setTheme,
    updateTheme: context.updateTheme,
    presets: context.presets,
    currentTheme: context.theme
  };
};

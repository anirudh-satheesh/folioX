import React from 'react';
import { useThemeManager } from '../../core/theme/ThemeProvider';
import { SectionCard } from '../ui/fields';

const fonts = [
  { name: 'Inter', value: 'Inter, sans-serif' },
  { name: 'Outfit', value: 'Outfit, sans-serif' },
  { name: 'Playfair', value: 'Playfair Display, serif' },
  { name: 'JetBrains', value: 'JetBrains Mono, monospace' },
];

const AppearancePanel = () => {
  const { currentTheme, updateTheme } = useThemeManager();

  const handleColorChange = (e) => {
    updateTheme({ colors: { primary: e.target.value } });
  };

  const handleFontChange = (e) => {
    updateTheme({ typography: { heading: e.target.value, body: e.target.value } });
  };

  const handleRadiusChange = (e) => {
    const val = e.target.value + 'px';
    updateTheme({ radius: { card: val, button: (e.target.value * 0.75) + 'px' } });
  };

  const handleShadowChange = (e) => {
    const val = e.target.value;
    const shadow = `0 ${val}px ${val * 4}px rgba(0,0,0,${val * 0.02})`;
    updateTheme({ shadow: { card: shadow } });
  };

  const toggleDarkMode = () => {
    const isDark = currentTheme.colors.background === '#0f0f0f' || currentTheme.colors.background === '#000000';
    if (isDark) {
      updateTheme({ 
        colors: { 
          background: '#ffffff', 
          surface: '#f8f9fa', 
          text: '#000000', 
          muted: '#64748b' 
        } 
      });
    } else {
      updateTheme({ 
        colors: { 
          background: '#0f0f0f', 
          surface: '#181818', 
          text: '#ffffff', 
          muted: '#a1a1aa' 
        } 
      });
    }
  };

  return (
    <div className="space-y-6">
      <SectionCard title="Fine Tuning" badge="Visuals">
        <div className="space-y-6">
          
          {/* ACCENT COLOR */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Accent Branding</span>
            <input 
              type="color" 
              value={currentTheme.colors.primary}
              onChange={handleColorChange}
              className="w-10 h-10 rounded-full cursor-pointer bg-transparent border-none appearance-none [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-2 [&::-webkit-color-swatch]:border-white"
            />
          </div>

          {/* FONT SELECTOR */}
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">Typography Style</span>
            <select 
              className="w-full bg-[#F8F9FA] border-none rounded-xl p-3 text-xs font-bold focus:ring-2 focus:ring-black transition-all"
              value={currentTheme.typography.heading}
              onChange={handleFontChange}
            >
              {fonts.map(f => (
                <option key={f.name} value={f.value}>{f.name}</option>
              ))}
            </select>
          </div>

          {/* RADIUS SLIDER */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Corner Radius</span>
              <span className="text-[10px] font-mono font-bold">{currentTheme.radius.card}</span>
            </div>
            <input 
              type="range" min="0" max="48" 
              value={parseInt(currentTheme.radius.card) || 12}
              onChange={handleRadiusChange}
              className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* SHADOW INTENSITY */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Shadow Depth</span>
              <span className="text-[10px] font-mono font-bold">Level {Math.round((parseInt(currentTheme.shadow.card?.split(' ')[1]) || 0) / 4)}</span>
            </div>
            <input 
              type="range" min="0" max="20" 
              defaultValue="5"
              onChange={handleShadowChange}
              className="w-full accent-black h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* DARK MODE TOGGLE */}
          <div className="pt-4 border-t border-gray-50">
            <button 
              onClick={toggleDarkMode}
              className="w-full py-4 rounded-2xl bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/20"
            >
              <div className="w-4 h-4 rounded-full border-2 border-white/30 flex items-center justify-center relative">
                <div className={`w-2 h-2 rounded-full bg-white transition-all ${currentTheme.colors.background === '#000000' || currentTheme.colors.background === '#0f0f0f' ? 'translate-x-1' : '-translate-x-1'}`} />
              </div>
              Toggle Cinema Mode
            </button>
          </div>

        </div>
      </SectionCard>
    </div>
  );
};

export default AppearancePanel;

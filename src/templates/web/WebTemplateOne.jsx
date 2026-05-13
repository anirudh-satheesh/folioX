import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../core/theme/ThemeProvider';
import { SectionRenderer } from '../../core/rendering/SectionRenderer';
import { registerSection } from '../../core/rendering/sectionComponentRegistry';
import { 
    WebOneProjects, 
    WebOneExperience, 
    WebOneSkills,
    WebOneHero,
    WebOneSocial,
    WebOneBasics
} from './WebTemplateOne/WebOneSections';

// Register sections for this template
registerSection('projects', 'web-one', WebOneProjects);
registerSection('experience', 'web-one', WebOneExperience);
registerSection('skills', 'web-one', WebOneSkills);
registerSection('hero', 'web-one', WebOneHero);
registerSection('social', 'web-one', WebOneSocial);
registerSection('basics', 'web-one', WebOneBasics);

function WebTemplateOne({ profileData }) {
    const globalTheme = useTheme();
    const {
        name,
        bio,
        theme: localTheme,
        hero,
        skills,
        projects,
        experience,
        socialLinks,
        sectionOrder
    } = profileData;

    // Use global theme values, fallback to local theme or defaults
    const primary = globalTheme.colors.primary || localTheme?.primary || "#3b82f6";
    const secondary = globalTheme.colors.secondary || localTheme?.secondary || "#10b981";
    const backgroundColor = globalTheme.colors.background || "#fcfcfc";
    const textColor = globalTheme.colors.text || "#000000";
    const surfaceColor = globalTheme.colors.surface || "#ffffff";
    const mutedColor = globalTheme.colors.muted || "#a1a1aa";
    
    const cardRadius = globalTheme.radius.card || "24px";
    const buttonRadius = globalTheme.radius.button || "18px";
    const cardShadow = globalTheme.shadow.card || "0 10px 40px rgba(0,0,0,0.2)";

    return (
        <div className="w-full min-h-full relative overflow-hidden" style={{ backgroundColor, color: textColor }}>
            {/* Nav remains static as it's part of the frame usually */}
            <nav className="absolute top-0 left-0 w-full z-50 p-6 lg:p-10 flex justify-between items-center mix-blend-difference text-white">
                <span className="font-black text-2xl lowercase tracking-tighter">{name?.split(" ")[0] || "folio"}./</span>
                <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
                    <a href="#work" className="hover:opacity-50">Work</a>
                    <a href="#about" className="hover:opacity-50">About</a>
                    <a href="#contact" className="hover:opacity-50">Contact</a>
                </div>
            </nav>

            {/* DYNAMIC SECTIONS */}
            {Array.isArray(sectionOrder) && sectionOrder.map(id => (
                <SectionRenderer key={id} section={id} profileData={profileData} templateId="web-one" />
            ))}

            {/* DARK FOOTER */}
            <footer id="contact" className="py-24 lg:py-40 px-10 text-center" style={{ backgroundColor: textColor, color: backgroundColor }}>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-8">Got a project in mind?</p>
                <h2 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter mb-20 hover:text-white/80 cursor-pointer transition-all">Let's <span style={{ color: primary }}>Talk.</span></h2>
                <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    <span>© {new Date().getFullYear()} FOLIOX PREMIUM</span>
                    <span>BASED IN EARTH</span>
                    <span>DESIGNED BY YOU</span>
                </div>
            </footer>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: 200%;
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default WebTemplateOne;

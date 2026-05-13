import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../core/theme/ThemeProvider';

export const WebOneProjects = ({ profileData }) => {
    const globalTheme = useTheme();
    const { projects, theme: localTheme } = profileData;
    
    const primary = globalTheme.colors.primary || localTheme?.primary || "#3b82f6";
    const surfaceColor = globalTheme.colors.surface || "#ffffff";
    const mutedColor = globalTheme.colors.muted || "#a1a1aa";
    const cardRadius = globalTheme.radius.card || "24px";
    const buttonRadius = globalTheme.radius.button || "18px";
    const cardShadow = globalTheme.shadow.card || "0 10px 40px rgba(0,0,0,0.2)";

    return (
        <section id="work" className="py-32 px-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-5xl font-black italic uppercase tracking-tighter">Selected <br /> <span style={{ color: primary }}>Works</span></h2>
                <p className="text-gray-500 max-w-xs text-sm">A collection of products I've built with focus on user experience and scale.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects?.map(p => (
                    <motion.div
                        whileHover={{ y: -10 }}
                        key={p.id}
                        className="group relative"
                    >
                        <div className="aspect-[16/10] overflow-hidden mb-6" style={{ borderRadius: cardRadius, backgroundColor: surfaceColor, boxShadow: cardShadow }}>
                            {p.image ? (
                                <img src={p.image} alt={p.title || p.description || 'project image'} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300 font-black text-4xl">PROJECT</div>
                            )}
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                                <div className="flex gap-2 mb-4">
                                    {p.techStack?.map((t, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                {p.liveDemo && <a href={p.liveDemo} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border transition-all" style={{ borderRadius: buttonRadius, borderColor: mutedColor, hoverBackgroundColor: primary }}>↗</a>}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export const WebOneExperience = ({ profileData }) => {
    const globalTheme = useTheme();
    const { experience, theme: localTheme } = profileData;
    
    const primary = globalTheme.colors.primary || localTheme?.primary || "#3b82f6";
    const backgroundColor = globalTheme.colors.background || "#fcfcfc";
    const textColor = globalTheme.colors.text || "#000000";

    return (
        <section className="py-20 lg:py-32 px-6 lg:px-10" style={{ backgroundColor: textColor, color: backgroundColor }}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-black uppercase mb-12 lg:mb-20 italic">Career Path</h2>
                <div className="space-y-0">
                    {experience?.map((e, index) => (
                        <div key={e.id} className="group border-t border-white/10 py-8 lg:py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/5 transition-all px-4 lg:px-6 -mx-4 lg:-mx-6">
                            <div className="flex items-center gap-6 lg:gap-10">
                                <span className="text-white/20 font-black text-2xl lg:text-4xl">0{index + 1}</span>
                                <div>
                                    <h3 className="text-xl lg:text-3xl font-bold">{e.company}</h3>
                                    <p className="text-gray-400 text-sm lg:text-base">{e.role}</p>
                                </div>
                            </div>
                            <div className="text-left md:text-right mt-4 md:mt-0">
                                <span className="text-lg lg:text-xl font-bold italic" style={{ color: primary }}>{e.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const WebOneSkills = ({ profileData }) => {
    const { skills } = profileData;

    return (
        <section className="py-32 px-10 overflow-hidden">
            <div className="flex whitespace-nowrap gap-20 animate-marquee items-center mb-20">
                {Array(10).fill(0).map((_, i) => (
                    <h2 key={i} className="text-8xl font-black uppercase tracking-tighter opacity-10">
                        {skills?.join(" • ") || "SKILLS • TOOLS • STACK"}
                    </h2>
                ))}
            </div>
        </section>
    );
};
export const WebOneHero = ({ profileData }) => {
    const { name, hero, socialLinks } = profileData;
    const globalTheme = useTheme();
    const surfaceColor = globalTheme.colors.surface || "#ffffff";

    return (
        <section id="about" className="min-h-[100vh] flex items-center px-6 lg:px-10 relative overflow-hidden" style={{ backgroundColor: surfaceColor }}>
            <div className="w-full relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gray-400 font-bold uppercase tracking-[0.2em] mb-6 text-[10px] lg:text-sm"
                >
                    {hero?.greeting || "Available for projects"}
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[15vw] lg:text-[12vw] font-black leading-[0.8] uppercase tracking-tighter italic mb-12"
                >
                    {name || "DEVELOPER"}
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col md:flex-row justify-between items-end gap-10"
                >
                    <p className="text-2xl font-medium max-w-xl leading-snug">
                        {hero?.title || "Crafting digital interfaces that bridge the gap between human and machine."}
                    </p>
                    <div className="flex gap-4">
                        {socialLinks?.map(s => (
                            <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:underline">{s.platform}</a>
                        ))}
                    </div>
                </motion.div>
            </div>
            {/* DECORATIVE NOISE */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </section>
    );
};

export const WebOneSocial = ({ profileData }) => {
    return null; // Integrated into Hero and Footer
};

export const WebOneBasics = ({ profileData }) => {
    return null; // Integrated into Hero
};

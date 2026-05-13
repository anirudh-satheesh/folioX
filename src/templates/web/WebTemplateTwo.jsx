import React from 'react';
import { useTheme } from '../../core/theme/ThemeProvider';
import { SectionRenderer } from '../../core/rendering/SectionRenderer';
import { registerSection } from '../../core/rendering/sectionComponentRegistry';
import { 
    WebTwoExperience, 
    WebTwoSkills, 
    WebTwoProjects, 
    WebTwoAchievements, 
    WebTwoEducation, 
    WebTwoCertifications,
    WebTwoHero,
    WebTwoBasics,
    WebTwoSocial 
} from './WebTemplateTwo/WebTwoSections';

// Register sections for this template
registerSection('experience', 'web-two', WebTwoExperience);
registerSection('skills', 'web-two', WebTwoSkills);
registerSection('projects', 'web-two', WebTwoProjects);
registerSection('achievements', 'web-two', WebTwoAchievements);
registerSection('education', 'web-two', WebTwoEducation);
registerSection('certifications', 'web-two', WebTwoCertifications);
registerSection('hero', 'web-two', WebTwoHero);
registerSection('basics', 'web-two', WebTwoBasics);
registerSection('social', 'web-two', WebTwoSocial);

function WebTemplateTwo({ profileData }) {
    const globalTheme = useTheme();
    const {
        name,
        bio,
        theme: localTheme,
        hero,
        skills,
        projects,
        experience,
        education,
        certifications,
        achievements,
        socialLinks,
        sectionOrder
    } = profileData;

    // Use global theme values, fallback to local theme or defaults
    const primary = globalTheme.colors.primary || localTheme?.primary || "#7c3aed";
    const secondary = globalTheme.colors.secondary || localTheme?.secondary || "#06b6d4";
    const backgroundColor = globalTheme.colors.background || "#0a0a0a";
    const textColor = globalTheme.colors.text || "#ffffff";
    const surfaceColor = globalTheme.colors.surface || "#181818";
    const mutedColor = globalTheme.colors.muted || "#a1a1aa";
    
    const cardRadius = globalTheme.radius.card || "24px";
    const buttonRadius = globalTheme.radius.button || "18px";
    const cardShadow = globalTheme.shadow.card || "0 10px 40px rgba(0,0,0,0.2)";

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
    };

    return (
        <div className="w-full min-h-screen relative overflow-x-hidden" style={{ backgroundColor, color: textColor }}>
            <style>{`
                ::selection {
                    background: ${primary};
                    color: ${backgroundColor};
                }
            `}</style>
            {/* Grain overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

            {/* STICKY NAV */}
            <nav className="absolute top-0 left-0 w-full z-50 px-6 lg:px-20 py-8 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primary }} />
                    <span className="text-sm font-black uppercase tracking-widest">{name?.split(" ")[0] || "Portfolio"}</span>
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <a href="#work" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Work</a>
                    <a href="#about" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">About</a>
                    <a href="#contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Contact</a>
                </div>
                <div className="flex items-center gap-4">
                    {socialLinks?.slice(0, 3).map(s => (
                        <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                            {s.platform}
                        </a>
                    ))}
                </div>
            </nav>


            {/* DYNAMIC SECTIONS */}
            <div className="relative z-10 w-full min-h-screen flex flex-col">
                {Array.isArray(sectionOrder) && sectionOrder.map(id => (
                    <SectionRenderer key={id} section={id} profileData={profileData} templateId="web-two" />
                ))}
            </div>

            {/* CTA + FOOTER */}
            <section id="contact" className="py-40 px-6 lg:px-20 relative">
                <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(ellipse at center, ${primary}, transparent 70%)` }} />
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-xs font-black uppercase tracking-[0.3em] mb-8"
                        style={{ color: secondary }}
                    >
                        What's Next?
                    </motion.p>
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={fadeUp} custom={0.1}
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-12"
                    >
                        Let's Build<br />
                        <span style={{ color: primary }}>Together.</span>
                    </motion.h2>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={fadeUp} custom={0.2}
                    >
                        <a 
                            href={profileData?.email ? `mailto:${profileData.email}` : '#'} 
                            className="inline-block px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest text-black hover:scale-105 active:scale-95 transition-all" 
                            style={{ backgroundColor: primary }}
                        >
                            Say Hello
                        </a>
                    </motion.div>
                </div>
            </section>

            <footer className="py-12 px-6 lg:px-20 border-t border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primary }} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                            {name || "Portfolio"} © {new Date().getFullYear()}
                        </span>
                    </div>
                    <div className="flex gap-8">
                        {socialLinks?.map(s => (
                            <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer"
                                className="text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-white transition-colors">
                                {s.platform}
                            </a>
                        ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                        Built with folioX
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default WebTemplateTwo;

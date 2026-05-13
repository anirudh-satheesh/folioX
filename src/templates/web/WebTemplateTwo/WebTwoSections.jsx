import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../core/theme/ThemeProvider';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
};

export const WebTwoExperience = ({ profileData }) => {
    const globalTheme = useTheme();
    const primary = globalTheme.colors.primary || "#7c3aed";
    const secondary = globalTheme.colors.secondary || "#06b6d4";
    const { experience } = profileData;

    return experience?.length > 0 && (
        <section className="py-32 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-xs font-black uppercase tracking-[0.3em] mb-16"
                    style={{ color: primary }}
                >
                    Experience
                </motion.h2>
                <div className="space-y-0">
                    {experience.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={fadeUp} custom={i * 0.15}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-white/10 hover:border-white/20 transition-all cursor-default"
                        >
                            <div className="md:col-span-3">
                                <span className="text-sm font-mono text-gray-500">{exp.duration}</span>
                            </div>
                            <div className="md:col-span-9">
                                <h3 className="text-2xl lg:text-3xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">{exp.role}</h3>
                                <p className="text-lg font-medium mb-3" style={{ color: secondary }}>{exp.company}</p>
                                {exp.description && <p className="text-gray-500 leading-relaxed max-w-2xl">{exp.description}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const WebTwoSkills = ({ profileData }) => {
    const globalTheme = useTheme();
    const primary = globalTheme.colors.primary || "#7c3aed";
    const secondary = globalTheme.colors.secondary || "#06b6d4";
    const { skills } = profileData;

    return skills?.length > 0 && (
        <section className="py-32 px-6 lg:px-20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-xs font-black uppercase tracking-[0.3em] mb-16"
                    style={{ color: primary }}
                >
                    Expertise
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={fadeUp} custom={i * 0.05}
                            className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/15 transition-all duration-500 cursor-default"
                        >
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${primary}08, ${secondary}08)` }} />
                            <span className="relative text-sm font-bold">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]" style={{ background: `radial-gradient(circle, ${primary}, transparent)` }} />
        </section>
    );
};

export const WebTwoProjects = ({ profileData }) => {
    const globalTheme = useTheme();
    const primary = globalTheme.colors.primary || "#7c3aed";
    const secondary = globalTheme.colors.secondary || "#06b6d4";
    const { projects } = profileData;

    return projects?.length > 0 && (
        <section id="work" className="py-32 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-xs font-black uppercase tracking-[0.3em] mb-16"
                    style={{ color: primary }}
                >
                    Selected Work
                </motion.h2>
                <div className="space-y-24">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={fadeUp} custom={i * 0.1}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-3xl mb-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5">
                                {p.image ? (
                                    <div className="aspect-[16/9] overflow-hidden">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                ) : (
                                    <div className="aspect-[16/9] flex items-center justify-center">
                                        <span className="text-6xl font-black text-white/5 uppercase">0{i + 1}</span>
                                    </div>
                                )}
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                                    <div className="flex gap-4">
                                        {p.github && (
                                            <a href={p.github} target="_blank" rel="noopener noreferrer"
                                                className="px-6 py-3 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                                GitHub
                                            </a>
                                        )}
                                        {p.liveDemo && (
                                            <a href={p.liveDemo} target="_blank" rel="noopener noreferrer"
                                                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-black hover:opacity-90 transition-all"
                                                style={{ backgroundColor: secondary }}>
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                <div>
                                    <h3 className="text-3xl lg:text-4xl font-black mb-3 group-hover:translate-x-2 transition-transform duration-300">{p.title}</h3>
                                    <p className="text-gray-500 max-w-xl leading-relaxed">{p.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 md:justify-end">
                                    {p.techStack?.map((t, j) => (
                                        <span key={j} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-gray-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const WebTwoAchievements = ({ profileData }) => {
    const globalTheme = useTheme();
    const primary = globalTheme.colors.primary || "#7c3aed";
    const { achievements } = profileData;

    return achievements?.length > 0 && (
        <section className="py-32 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-xs font-black uppercase tracking-[0.3em] mb-16"
                    style={{ color: primary }}
                >
                    Achievements
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((ach, i) => (
                        <motion.div
                            key={ach.id}
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={fadeUp} custom={i * 0.1}
                            className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-2">{ach.title}</h3>
                            <p className="text-gray-500 text-sm">{ach.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const WebTwoEducation = ({ profileData }) => {
    const globalTheme = useTheme();
    const primary = globalTheme.colors.primary || "#7c3aed";
    const secondary = globalTheme.colors.secondary || "#06b6d4";
    const { education } = profileData;

    return education?.length > 0 && (
        <section className="py-32 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-xs font-black uppercase tracking-[0.3em] mb-16"
                    style={{ color: primary }}
                >
                    Education
                </motion.h2>
                <div className="space-y-8">
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.id}
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={fadeUp} custom={i * 0.1}
                            className="flex items-center gap-8 group"
                        >
                            <div className="w-20 h-20 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors" style={{ background: `linear-gradient(135deg, ${primary}15, ${secondary}15)` }}>
                                <span className="text-2xl font-black text-white/30">{edu.year?.slice(-2)}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{edu.degree}</h3>
                                <p className="text-gray-500">{edu.school}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const WebTwoCertifications = ({ profileData }) => {
    const globalTheme = useTheme();
    const primary = globalTheme.colors.primary || "#7c3aed";
    const secondary = globalTheme.colors.secondary || "#06b6d4";
    const { certifications } = profileData;

    return certifications?.length > 0 && (
        <section className="py-32 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-xs font-black uppercase tracking-[0.3em] mb-16"
                    style={{ color: primary }}
                >
                    Certifications
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={fadeUp} custom={i * 0.1}
                            className="flex justify-between items-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                        >
                            <div>
                                <h3 className="font-bold">{cert.name}</h3>
                                <p className="text-sm text-gray-500">{cert.issuer} · {cert.year}</p>
                            </div>
                            {cert.link && (
                                <a href={cert.link} target="_blank" rel="noopener noreferrer"
                                    className="text-[10px] font-black uppercase tracking-widest hover:underline"
                                    style={{ color: secondary }}>
                                    Verify →
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export const WebTwoHero = ({ profileData }) => {
    const { name, hero } = profileData;
    const globalTheme = useTheme();
    const primary = globalTheme.colors.primary || "#3b82f6";

    return (
        <section id="about" className="pt-32 pb-20 px-6 lg:px-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ backgroundColor: primary }}>👋</div>
                    <span className="text-sm font-black uppercase tracking-[0.3em] opacity-40">{hero?.greeting || "Hello World"}</span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black mb-10 leading-[0.9]">
                    I'm <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${primary}, #a78bfa)` }}>{name || "A Developer"}</span>
                </h1>
                <p className="text-2xl lg:text-3xl font-medium text-gray-500 leading-relaxed">
                    {hero?.title || "Bridging the gap between complex logic and elegant design."}
                </p>
            </motion.div>
        </section>
    );
};

export const WebTwoBasics = ({ profileData }) => {
    const { bio } = profileData;
    if (!bio) return null;
    return (
        <section className="py-20 px-6 lg:px-20">
            <div className="max-w-3xl">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">About Me</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">{bio}</p>
            </div>
        </section>
    );
};

export const WebTwoSocial = ({ profileData }) => {
    return null; // Integrated elsewhere
};

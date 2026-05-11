import React from 'react';
import { motion } from 'framer-motion';

function WebTemplateTwo({ profileData }) {
    const {
        name,
        bio,
        theme,
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

    const primary = theme?.primary || "#7c3aed";
    const secondary = theme?.secondary || "#06b6d4";

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
    };

    const renderSection = (id) => {
        switch (id) {
            case "experience":
                return experience?.length > 0 && (
                    <section key={id} className="py-32 px-6 lg:px-20">
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

            case "skills":
                return skills?.length > 0 && (
                    <section key={id} className="py-32 px-6 lg:px-20 relative overflow-hidden">
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

            case "projects":
                return projects?.length > 0 && (
                    <section key={id} id="work" className="py-32 px-6 lg:px-20">
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
                                        variants={fadeUp} custom={0.1}
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

            case "achievements":
                return achievements?.length > 0 && (
                    <section key={id} className="py-32 px-6 lg:px-20">
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

            case "education":
                return education?.length > 0 && (
                    <section key={id} className="py-32 px-6 lg:px-20">
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
                                            <span className="text-2xl font-black text-white/30">{String(edu.year ?? '').slice(-2)}</span>
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

            case "certifications":
                return certifications?.length > 0 && (
                    <section key={id} className="py-32 px-6 lg:px-20">
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

            default: return null;
        }
    };

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white selection:text-black relative overflow-x-hidden" style={{ selectionColor: primary }}>
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

            {/* CINEMATIC HERO */}
            <section id="about" className="min-h-screen flex flex-col justify-center px-6 lg:px-20 relative">
                {/* Ambient glow */}
                <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]" style={{ backgroundColor: primary }} />
                <div className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px]" style={{ backgroundColor: secondary }} />

                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-8 block">
                            {hero?.greeting || "Available for opportunities"}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeUp} custom={0.1}
                        className="text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.95] mb-10 max-w-5xl"
                    >
                        {hero?.title || (
                            <>I design & build <span style={{ color: primary }}>digital products</span> that people love</>
                        )}
                    </motion.h1>

                    <motion.p
                        initial="hidden" animate="visible" variants={fadeUp} custom={0.2}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-14"
                    >
                        {bio || "Full-stack developer with a passion for elegant solutions and pixel-perfect interfaces."}
                    </motion.p>

                    <motion.div
                        initial="hidden" animate="visible" variants={fadeUp} custom={0.3}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#work" className="px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest text-black hover:opacity-90 transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: primary }}>
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all">
                            Get in Touch
                        </a>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600">Scroll</span>
                    <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
                </motion.div>
            </section>

            {/* DYNAMIC SECTIONS */}
            {sectionOrder.map(id => renderSection(id))}

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
                        <a href={`mailto:${profileData.email || 'hello@example.com'}`} className="inline-block px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest text-black hover:scale-105 active:scale-95 transition-all" style={{ backgroundColor: primary }}>
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

import React from 'react';
import { useTheme } from '../../../core/theme/ThemeProvider';

export const ResumeOneExperience = ({ profileData }) => {
    const globalTheme = useTheme();
    const primary = globalTheme.colors.primary || "#3b82f6";
    const { experience } = profileData;

    return (
        <section className="mb-8">
            <h2 className="text-lg font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-4">Experience</h2>
            <div className="space-y-6">
                {experience?.map(e => (
                    <div key={e.id}>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-base">{e.company}</h3>
                            <span className="text-xs font-bold text-gray-500 uppercase">{e.duration}</span>
                        </div>
                        <div className="flex justify-between items-baseline mb-2">
                            <span className="text-sm font-bold italic" style={{ color: primary }}>{e.role}</span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap">{e.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export const ResumeOneSkills = ({ profileData }) => {
    const { skills } = profileData;
    return (
        <section className="mb-8">
            <h2 className="text-lg font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {skills?.map((s, i) => (
                    <span key={i} className="text-xs font-bold px-3 py-1 bg-gray-100 rounded-full">{s}</span>
                ))}
            </div>
        </section>
    );
};

export const ResumeOneProjects = ({ profileData }) => {
    const globalTheme = useTheme();
    const primary = globalTheme.colors.primary || "#3b82f6";
    const { projects } = profileData;

    return (
        <section className="mb-8">
            <h2 className="text-lg font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-4">Projects</h2>
            <div className="grid grid-cols-1 gap-6">
                {projects?.map(p => (
                    <div key={p.id}>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-base">{p.title}</h3>
                            <div className="flex gap-3">
                                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest hover:underline text-gray-400">GitHub</a>}
                                {p.liveDemo && <a href={p.liveDemo} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest hover:underline" style={{ color: primary }}>Live</a>}
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{p.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                            {p.techStack?.map((t, i) => (
                                <span key={i} className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter"># {t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export const ResumeOneAchievements = ({ profileData }) => {
    const { achievements } = profileData;
    return (
        <section className="mb-8">
            <h2 className="text-lg font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-4">Achievements</h2>
            <div className="space-y-4">
                {achievements?.map(a => (
                    <div key={a.id}>
                        <h3 className="font-bold text-sm mb-1">{a.title}</h3>
                        <p className="text-xs text-gray-600">{a.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export const ResumeOneEducation = ({ profileData }) => {
    const { education } = profileData;
    return (
        <section className="mb-8">
            <h2 className="text-lg font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-4">Education</h2>
            <div className="space-y-4">
                {education?.map(e => (
                    <div key={e.id} className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-sm">{e.school}</h3>
                            <p className="text-xs text-gray-600">{e.degree}</p>
                        </div>
                        <span className="text-xs font-bold text-gray-400">{e.year}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export const ResumeOneCertifications = ({ profileData }) => {
    const { certifications } = profileData;
    return (
        <section className="mb-8">
            <h2 className="text-lg font-black uppercase tracking-widest border-b-2 border-black pb-1 mb-4">Certifications</h2>
            <div className="grid grid-cols-2 gap-4">
                {certifications?.map(c => (
                    <div key={c.id}>
                        <h3 className="font-bold text-xs mb-0.5">{c.name}</h3>
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">{c.issuer} • {c.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

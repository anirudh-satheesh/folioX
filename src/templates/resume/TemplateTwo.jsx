import React from 'react';
import { useTheme } from '../../core/theme/ThemeProvider';

function TemplateTwo({ profileData }) {
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
        socialLinks, 
        sectionOrder 
    } = profileData;

    // Use global theme values, fallback to local theme or defaults
    const primary = globalTheme.colors.primary || localTheme?.primary || "#000000";
    const background = globalTheme.colors.background || localTheme?.background || "#ffffff";
    const textColor = globalTheme.colors.text || "#000000";
    const surfaceColor = globalTheme.colors.surface || "#ffffff";
    const mutedColor = globalTheme.colors.muted || "#666666";

    const sectionRenderers = {
        skills: () => (
            <div key="skills" className="mb-12">
                <h2 className="text-xl font-bold mb-4 uppercase tracking-tighter" style={{ color: primary }}>Expertise</h2>
                <div className="flex flex-wrap gap-2">
                    {skills?.map((s, i) => (
                        <span key={i} className="text-sm border-b-2" style={{ borderColor: primary }}>{s}</span>
                    ))}
                </div>
            </div>
        ),
        projects: () => (
            <div key="projects" className="mb-12">
                <h2 className="text-xl font-bold mb-6 uppercase tracking-tighter" style={{ color: primary }}>Work</h2>
                <div className="space-y-8">
                    {projects?.map(p => (
                        <div key={p.id}>
                            <h3 className="font-bold text-lg">{p.title}</h3>
                            <p className="text-gray-500 text-sm mb-2">{p.description}</p>
                            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
                                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:underline">Code</a>}
                                {p.liveDemo && <a href={p.liveDemo} target="_blank" rel="noopener noreferrer" className="hover:underline">Live</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        experience: () => (
            <div key="experience" className="mb-12">
                <h2 className="text-xl font-bold mb-6 uppercase tracking-tighter" style={{ color: primary }}>Experience</h2>
                <div className="space-y-6">
                    {experience?.map(e => (
                        <div key={e.id} className="flex justify-between items-start">
                            <div>
                                <h3 className="font-bold">{e.role}</h3>
                                <p className="text-gray-500 text-sm">{e.company}</p>
                            </div>
                            <span className="text-xs font-mono text-gray-400">{e.duration}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
        // Placeholders for other sections if needed
        education: () => education?.length > 0 && (
            <div key="education" className="mb-12">
                <h2 className="text-xl font-bold mb-6 uppercase tracking-tighter" style={{ color: primary }}>Education</h2>
                <div className="space-y-4">
                    {education.map(edu => (
                        <div key={edu.id}>
                            <h3 className="font-bold">{edu.degree}</h3>
                            <p className="text-gray-500 text-sm">{edu.school}, {edu.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    };

    const renderSection = (id) => {
        const renderer = sectionRenderers[id];
        return renderer ? renderer() : null;
    };

    return (
        <div className="flex min-h-screen font-mono" style={{ backgroundColor: background, color: textColor }}>
            {/* LEFT SIDEBAR */}
            <aside className="w-1/3 p-12 border-r border-gray-100 flex flex-col justify-between sticky top-0 h-screen">
                <div>
                    <h1 className="text-4xl font-black mb-4 leading-none uppercase tracking-tighter" style={{ color: primary }}>
                        {name || "NAME"}
                    </h1>
                    <p className="text-sm leading-relaxed text-gray-600 mb-8 max-w-[200px]">
                        {bio || "Your minimalist professional summary goes here."}
                    </p>
                    
                    <div className="space-y-2">
                        {socialLinks?.map(s => (
                            <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="block text-xs font-bold hover:underline py-1">
                                {s.platform} ↗
                            </a>
                        ))}
                    </div>
                </div>

                <div className="text-[10px] text-gray-300 font-bold uppercase">
                    &copy; {new Date().getFullYear()} FOLIOX MINIMAL
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="w-2/3 p-20">
                <div className="max-w-2xl">
                    <div className="mb-20">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                            {hero?.greeting || "Introduction"}
                        </span>
                        <h2 className="text-3xl font-bold leading-tight">
                            {hero?.title || "I build digital products with focus on simplicity and craftsmanship."}
                        </h2>
                    </div>

                    {sectionOrder?.map(id => renderSection(id))}
                </div>
            </main>
        </div>
    );
}

export default TemplateTwo;

import React from 'react';
import { useTheme } from '../../core/theme/ThemeProvider';
import { SectionRenderer } from '../../core/rendering/SectionRenderer';
import { registerSection } from '../../core/rendering/sectionComponentRegistry';
import { 
    ResumeOneExperience, 
    ResumeOneSkills, 
    ResumeOneProjects, 
    ResumeOneAchievements, 
    ResumeOneEducation, 
    ResumeOneCertifications 
} from './TemplateOne/ResumeOneSections';

// Register sections for this template
registerSection('experience', 'resume-one', ResumeOneExperience);
registerSection('skills', 'resume-one', ResumeOneSkills);
registerSection('projects', 'resume-one', ResumeOneProjects);
registerSection('achievements', 'resume-one', ResumeOneAchievements);
registerSection('education', 'resume-one', ResumeOneEducation);
registerSection('certifications', 'resume-one', ResumeOneCertifications);

function TemplateOne({ profileData }) {
    const globalTheme = useTheme();
    const {
        name,
        bio,
        hero,
        theme: localTheme,
        socialLinks,
        sectionOrder = ["experience", "skills", "projects", "achievements", "certifications", "education"]
    } = profileData;

    const primary = globalTheme.colors.primary || localTheme?.primary || "#000000";
    const backgroundColor = globalTheme.colors.background || "#ffffff";
    const textColor = globalTheme.colors.text || "#000000";

    return (
        <div className="w-full min-h-screen p-12 bg-gray-50 flex justify-center">
            <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl p-16 print:shadow-none" style={{ backgroundColor, color: textColor }}>
                {/* HEADER */}
                <header className="mb-12 border-b-4 border-black pb-8 flex justify-between items-end">
                    <div>
                        <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">{name || "Your Name"}</h1>
                        <p className="text-xl font-bold uppercase tracking-widest" style={{ color: primary }}>{hero?.title || "Professional Title"}</p>
                    </div>
                    <div className="text-right flex flex-col gap-1 items-end">
                        {socialLinks?.map(s => (
                            <span key={s.id} className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{s.url.replace("https://", "")}</span>
                        ))}
                    </div>
                </header>

                {/* BIO */}
                {bio && <p className="mb-12 text-sm leading-relaxed text-gray-600 italic border-l-4 border-gray-100 pl-6">{bio}</p>}

                {/* DYNAMIC SECTIONS */}
                <div className="space-y-8">
                    {sectionOrder.map(id => (
                        <SectionRenderer key={id} section={id} profileData={profileData} templateId="resume-one" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TemplateOne;
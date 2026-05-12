function TemplateOne({ profileData }) {
    const { 
        theme, 
        hero, 
        experience, 
        education, 
        skills, 
        projects, 
        certifications, 
        achievements, 
        resumeUrl, 
        name, 
        bio, 
        socialLinks,
        sectionOrder = ["experience", "skills", "projects", "achievements", "certifications", "education"]
    } = profileData;

    // Default theme fallback
    const primary = theme?.primary || "#000000";
    const secondary = theme?.secondary || "#3b82f6";
    const background = theme?.background || "#ffffff";
    const accent = theme?.accent || "#f3f4f6";

    const sectionRenderers = {
        experience: () => experience?.length > 0 && (
            <section key="experience" className="group">
                <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                    <span className="w-8 h-1" style={{ backgroundColor: primary }}></span>
                    Experience
                </h2>
                <div className="space-y-12">
                    {experience.map((exp) => (
                        <div key={exp.id} className="relative pl-8 border-l-2 border-gray-100 group/item">
                            <div 
                                className="absolute w-4 h-4 bg-white border-2 rounded-full -left-[9px] top-1 group-hover/item:scale-125 transition-transform duration-300"
                                style={{ borderColor: primary }}
                            ></div>
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                                    <p className="font-semibold text-lg" style={{ color: secondary }}>{exp.company}</p>
                                </div>
                                <div className="text-gray-400 font-medium">{exp.duration}</div>
                            </div>
                            <p className="text-gray-600 leading-relaxed max-w-3xl">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        ),
        skills: () => (
            <section key="skills">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-1" style={{ backgroundColor: primary }}></span>
                    Expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                    {skills?.length > 0 ? skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-6 py-2 rounded-full text-sm font-semibold border transition-all cursor-default hover:bg-black hover:text-white"
                            style={{ backgroundColor: accent, color: primary, borderColor: 'transparent' }}
                        >
                            {skill}
                        </span>
                    )) : (
                        <p className="text-gray-400 italic">No skills added yet...</p>
                    )}
                </div>
            </section>
        ),
        projects: () => (
            <section key="projects">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-1" style={{ backgroundColor: primary }}></span>
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects?.length > 0 ? projects.map((project) => (
                        <div 
                            key={project.id}
                            className={`group border rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${project.featured ? 'border-2' : 'border-gray-100'}`}
                            style={{ borderColor: project.featured ? primary : undefined }}
                        >
                            {project.image && (
                                <div className="h-48 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            )}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                    {project.featured && (
                                        <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-md font-bold text-white" style={{ backgroundColor: primary }}>Featured</span>
                                    )}
                                </div>
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack?.map((tech, i) => (
                                        <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-700">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 border rounded-lg hover:bg-black hover:text-white transition font-medium">Code</a>}
                                    {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 text-white rounded-lg hover:opacity-80 transition font-medium" style={{ backgroundColor: primary }}>Live View</a>}
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center text-gray-400">
                            <p className="text-lg">Add your first project from the left panel 👈</p>
                        </div>
                    )}
                </div>
            </section>
        ),
        achievements: () => achievements?.length > 0 && (
            <section key="achievements">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-1" style={{ backgroundColor: primary }}></span>
                    Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((ach) => (
                        <div key={ach.id} className="p-6 rounded-2xl transition-all hover:translate-x-2" style={{ backgroundColor: accent }}>
                            <h3 className="font-bold text-lg mb-1">{ach.title}</h3>
                            <p className="text-gray-600 text-sm">{ach.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        ),
        certifications: () => certifications?.length > 0 && (
            <section key="certifications">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-1" style={{ backgroundColor: primary }}></span>
                    Certifications
                </h2>
                <div className="space-y-4">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="flex justify-between items-center group">
                            <div>
                                <h3 className="font-bold">{cert.name}</h3>
                                <p className="text-sm text-gray-500">{cert.issuer}, {cert.year}</p>
                            </div>
                            {cert.link && (
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:underline" style={{ color: secondary }}>Verify</a>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        ),
        education: () => education?.length > 0 && (
            <section key="education">
                <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                    <span className="w-8 h-1" style={{ backgroundColor: primary }}></span>
                    Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu) => (
                        <div key={edu.id} className="p-8 rounded-3xl group hover:shadow-xl transition-all duration-300" style={{ backgroundColor: accent }}>
                            <div className="bg-white text-black w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm font-bold text-xl group-hover:scale-110 transition-transform">
                                {edu.year.slice(-2)}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                            <p className="text-gray-500 font-medium">{edu.school}, {edu.year}</p>
                        </div>
                    ))}
                </div>
            </section>
        )
    };

    const renderSection = (sectionId) => {
        const renderer = sectionRenderers[sectionId];
        return renderer ? renderer() : null;
    };

    return (
        <div 
            className="max-w-4xl mx-auto rounded-3xl shadow-xl overflow-hidden min-h-screen my-10 border border-gray-100 transition-colors duration-500"
            style={{ backgroundColor: background }}
        >
            {/* HERO SECTION */}
            <header 
                className="p-12 lg:p-16 relative overflow-hidden text-white"
                style={{ backgroundColor: primary }}
            >
                <div className="relative z-10">
                    <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
                        {hero?.greeting || "Hello, I'm"}
                    </p>
                    <h1 className="text-6xl font-black tracking-tight mb-6">
                        {name || "Your Name"}
                    </h1>
                    <p className="text-2xl font-medium text-gray-300 mb-8 max-w-xl">
                        {hero?.title || "Creative Developer & Designer"}
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-10">
                        {bio || "Crafting digital experiences with precision and passion. Your story starts here."}
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        {socialLinks?.map((social) => (
                            <a
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm transition-all border border-white/10"
                            >
                                {social.platform}
                            </a>
                        ))}
                        {resumeUrl && (
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm px-6 py-2 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
                                style={{ backgroundColor: secondary, color: "white" }}
                            >
                                Download Resume
                            </a>
                        )}
                    </div>
                </div>
                {/* DECORATIVE ELEMENT */}
                <div 
                    className="absolute top-0 right-0 w-64 h-64 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full opacity-30"
                    style={{ backgroundColor: secondary }}
                ></div>
            </header>

            <div className="p-12 lg:p-16 space-y-24">
                {/* DYNAMIC SECTIONS */}
                {sectionOrder.map((sectionId) => renderSection(sectionId))}
            </div>

            <footer className="p-16 text-center border-t border-gray-50 bg-gray-50/50">
                <div className="flex justify-center gap-6 mb-8">
                    {socialLinks?.map((social) => (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-black transition-colors font-semibold"
                        >
                            {social.platform}
                        </a>
                    ))}
                </div>
                <p className="text-gray-400 text-sm">
                    Built with Portfolio Generator &copy; {new Date().getFullYear()}
                </p>
            </footer>

        </div>
    );
}

export default TemplateOne;
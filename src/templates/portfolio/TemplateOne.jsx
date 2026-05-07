function TemplateOne({ data }) {

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden min-h-screen my-10 border border-gray-100">

            {/* HERO SECTION */}
            <header className="bg-black text-white p-12 lg:p-16">
                <h1 className="text-6xl font-black tracking-tight mb-6">
                    {data.name || "Your Name"}
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                    {data.bio || "Crafting digital experiences with precision and passion. Your story starts here."}
                </p>
            </header>

            <div className="p-12 lg:p-16 space-y-20">
                {/* SKILLS SECTION */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-black"></span>
                        Expertise
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {data.skills.length > 0 ? data.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-black px-6 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-black hover:text-white transition-all cursor-default"
                            >
                                {skill}
                            </span>
                        )) : (
                            <p className="text-gray-400 italic">No skills added yet...</p>
                        )}
                    </div>
                </section>

                {/* PROJECTS SECTION */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-black"></span>
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.projects.length > 0 ? data.projects.map((project, index) => (
                            <div className="group border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                {/* TECH STACK */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack?.split(",").map((tech, i) => (
                                        <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>

                                {/* LINKS */}
                                <div className="flex gap-3">

                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm px-4 py-2 border rounded-lg hover:bg-black hover:text-white transition"
                                        >
                                            Code
                                        </a>
                                    )}

                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition"
                                        >
                                            Live
                                        </a>
                                    )}

                                </div>

                            </div>
                        )) : (
                            <div className="col-span-full border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center text-gray-400">
                                <p className="text-lg">
                                    Add your first project from the left panel 👈
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <footer className="p-12 text-center border-t border-gray-100 text-gray-400 text-sm">
                Built with Portfolio Generator &copy; {new Date().getFullYear()}
            </footer>

        </div>
    );
}

export default TemplateOne;
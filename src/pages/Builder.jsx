import { useState } from "react";
import { useProfile } from "../context/ProfileContext";

function Builder() {

  const { profile, setProfile } = useProfile();

  const [skillInput, setSkillInput] = useState("");
  const [projectInput, setProjectInput] = useState({
    title: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
  });

  // ADD SKILL
  const addSkill = () => {
    if (!skillInput.trim()) return;
    setProfile({
      ...profile,
      skills: [...profile.skills, skillInput],
    });
    setSkillInput("");
  };

  const addProject = () => {
    if (!projectInput.title.trim()) return;

    if (editIndex !== null) {
      // UPDATE EXISTING PROJECT
      const updatedProjects = [...profile.projects];
      updatedProjects[editIndex] = projectInput;

      setProfile({
        ...profile,
        projects: updatedProjects,
      });

      setEditIndex(null);

    } else {
      // ADD NEW PROJECT
      setProfile({
        ...profile,
        projects: [...profile.projects, projectInput],
      });
    }

    // RESET FORM
    setProjectInput({
      title: "",
      description: "",
      techStack: "",
      githubLink: "",
      liveLink: "",
    });
  };

  // REMOVE PROJECT
  const removeProject = (index) => {
    const updatedProjects = profile.projects.filter((_, i) => i !== index);
    setProfile({
      ...profile,
      projects: updatedProjects,
    });
  };

  const [editIndex, setEditIndex] = useState(null);

  const editProject = (index) => {
    setProjectInput(profile.projects[index]);
    setEditIndex(index);
  };

  return (
    <div className="p-8 space-y-12 max-w-2xl mx-auto">

      <h1 className="text-4xl font-extrabold tracking-tight">
        Portfolio Builder
      </h1>

      {/* BASIC INFO */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Basic Information</h2>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-black outline-none transition-all"
            value={profile.name}
            onChange={(e) =>
              setProfile({
                ...profile,
                name: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            placeholder="Tell something about yourself"
            className="w-full border rounded-xl p-3 min-h-[120px] focus:ring-2 focus:ring-black outline-none transition-all"
            value={profile.bio}
            onChange={(e) =>
              setProfile({
                ...profile,
                bio: e.target.value,
              })
            }
          />
        </div>
      </section>

      {/* SKILLS */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Skills</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g. React, Node.js"
            className="flex-1 border rounded-xl p-3 focus:ring-2 focus:ring-black outline-none transition-all"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          />
          <button
            onClick={addSkill}
            className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition-colors font-medium"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium border flex items-center gap-2">
              {skill}
              <button
                onClick={() => setProfile({ ...profile, skills: profile.skills.filter((_, i) => i !== index) })}
                className="hover:text-red-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Projects</h2>

        <div className="bg-gray-50 p-6 rounded-2xl space-y-4 border border-dashed border-gray-300">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Project Title</label>
            <input
              type="text"
              placeholder="e.g. E-commerce App"
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-black outline-none transition-all"
              value={projectInput.title}
              onChange={(e) => setProjectInput({ ...projectInput, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
            <textarea
              placeholder="What does this project do?"
              className="w-full border rounded-xl p-3 min-h-[100px] focus:ring-2 focus:ring-black outline-none transition-all"
              value={projectInput.description}
              onChange={(e) => setProjectInput({ ...projectInput, description: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Tech Stack
            </label>

            <input
              type="text"
              placeholder="e.g. React, Firebase, Tailwind"
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-black outline-none transition-all"
              value={projectInput.techStack}
              onChange={(e) =>
                setProjectInput({
                  ...projectInput,
                  techStack: e.target.value,
                })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">GitHub Link</label>
              <input
                type="text"
                placeholder="https://github.com/..."
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-black outline-none transition-all"
                value={projectInput.githubLink}
                onChange={(e) => setProjectInput({ ...projectInput, githubLink: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Live Demo</label>
              <input
                type="text"
                placeholder="https://demo.com/..."
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-black outline-none transition-all"
                value={projectInput.liveLink}
                onChange={(e) => setProjectInput({ ...projectInput, liveLink: e.target.value })}
              />
            </div>
          </div>

          <button
            onClick={addProject}
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors font-bold"
          >
            {editIndex !== null ? "Update Project" : "Add Project"}
          </button>
        </div>

        {/* LIST OF PROJECTS */}
        <div className="space-y-4">
          {profile.projects.map((proj, index) => (
            <div key={index} className="flex justify-between items-start p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-bold text-lg">{proj.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{proj.description}</p>
              </div>
              <div className="flex gap-2">

                <button
                  onClick={() => editProject(index)}
                  className="text-blue-500 hover:bg-blue-50 px-3 py-1 rounded-lg transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => removeProject(index)}
                  className="text-red-500 hover:bg-red-50 px-3 py-1 rounded-lg transition"
                >
                  Delete
                </button>
                {editIndex !== null && (
                  <button
                    onClick={() => {
                      setEditIndex(null);
                      setProjectInput({
                        title: "",
                        description: "",
                        techStack: "",
                        githubLink: "",
                        liveLink: "",
                      });
                    }}
                    className="w-full border py-2 rounded-xl"
                  >
                    Cancel Edit
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Builder;
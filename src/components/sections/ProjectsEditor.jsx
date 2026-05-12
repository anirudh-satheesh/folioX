import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { projectSchema } from "../../data/defaultProfile";
import ProjectForm from "../forms/ProjectForm";
import { Section } from "../EditorUI";

const ProjectsEditor = () => {
    const { profile, setProfile } = useProfile();
    const [projectInput, setProjectInput] = useState({ ...projectSchema, id: crypto.randomUUID() });
    const [editingProjectId, setEditingProjectId] = useState(null);

    const handleSaveProject = () => {
        if (!projectInput.title.trim()) return;
        const formattedProject = {
            ...projectInput,
            techStack: typeof projectInput.techStack === "string"
                ? projectInput.techStack.split(",").map((s) => s.trim()).filter((s) => s !== "")
                : projectInput.techStack,
        };

        if (editingProjectId) {
            setProfile({
                ...profile,
                projects: profile.projects.map((p) => (p.id === editingProjectId ? formattedProject : p)),
            });
            setEditingProjectId(null);
        } else {
            setProfile({ ...profile, projects: [...profile.projects, formattedProject] });
        }
        setProjectInput({ ...projectSchema, id: crypto.randomUUID() });
    };

    const handleEdit = (p) => {
        setProjectInput({ ...p, techStack: p.techStack.join(", ") });
        setEditingProjectId(p.id);
    };

    const handleDelete = (id) => {
        setProfile({ ...profile, projects: profile.projects.filter((proj) => proj.id !== id) });
    };

    return (
        <Section title="Portfolio Work">
            <div className="mb-6">
                <ProjectForm
                    value={projectInput}
                    onChange={setProjectInput}
                    onSave={handleSaveProject}
                    onCancel={() => {
                        setEditingProjectId(null);
                        setProjectInput({ ...projectSchema, id: crypto.randomUUID() });
                    }}
                    isEditing={!!editingProjectId}
                />
            </div>
            <div className="space-y-2">
                {profile.projects.map((p) => (
                    <div
                        key={p.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100"
                    >
                        <span className="text-xs font-bold truncate pr-4">{p.title}</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleEdit(p)}
                                className="text-blue-600 text-[10px] font-black uppercase"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(p.id)}
                                className="text-red-600 text-[10px] font-black uppercase"
                            >
                                Del
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default ProjectsEditor;

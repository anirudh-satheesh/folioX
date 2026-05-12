import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { projectSchema } from "../../data/defaultProfile";
import ProjectForm from "../forms/ProjectForm";
import { SectionCard, ArrayInput } from "../ui/fields";

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
        <SectionCard title="Portfolio Work">
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
            
            <ArrayInput 
                items={profile.projects}
                onEdit={handleEdit}
                onDelete={handleDelete}
                titleKey="title"
            />
        </SectionCard>
    );
};

export default ProjectsEditor;

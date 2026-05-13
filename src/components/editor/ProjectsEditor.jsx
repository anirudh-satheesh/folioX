import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { projectSchema } from "../../data/defaultProfile";
import ProjectForm from "../forms/ProjectForm";
import { SectionCard, ArrayInput } from "../ui/fields";
import { generateId } from "../../utils/id";

const ProjectsEditor = () => {
    const { profile, setProfile } = useProfile();
    const [projectInput, setProjectInput] = useState({ ...projectSchema, id: generateId() });
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
            setProfile(prev => ({
                ...prev,
                projects: prev.projects.map((p) => (p.id === editingProjectId ? formattedProject : p)),
            }));
            setEditingProjectId(null);
        } else {
            setProfile(prev => ({ ...prev, projects: [...prev.projects, formattedProject] }));
        }
        setProjectInput({ ...projectSchema, id: generateId() });
    };

    const handleEdit = (p) => {
        const normalized = Array.isArray(p.techStack) ? p.techStack.join(", ") : "";
        setProjectInput({ ...p, techStack: normalized });
        setEditingProjectId(p.id);
    };

    const handleDelete = (id) => {
        setProfile(prev => ({ ...prev, projects: prev.projects.filter((proj) => proj.id !== id) }));
    };

    return (
        <SectionCard title="Portfolio Work">
            <ProjectForm
                value={projectInput}
                onChange={setProjectInput}
                onSave={handleSaveProject}
                onCancel={() => {
                    setEditingProjectId(null);
                    setProjectInput({ ...projectSchema, id: generateId() });
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

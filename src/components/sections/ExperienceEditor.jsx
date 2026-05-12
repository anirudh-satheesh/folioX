import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { experienceSchema } from "../../data/defaultProfile";
import { SectionCard, TextField, TextAreaField, ArrayInput } from "../ui/fields";

const ExperienceEditor = () => {
    const { profile, setProfile } = useProfile();
    const [input, setInput] = useState({ ...experienceSchema, id: crypto.randomUUID() });
    const [editingId, setEditingId] = useState(null);

    const handleSave = () => {
        if (!input.company.trim()) return;
        if (editingId) {
            setProfile({
                ...profile,
                experience: profile.experience.map((exp) => (exp.id === editingId ? input : exp)),
            });
            setEditingId(null);
        } else {
            setProfile({ ...profile, experience: [...profile.experience, input] });
        }
        setInput({ ...experienceSchema, id: crypto.randomUUID() });
    };

    const handleEdit = (exp) => {
        setInput(exp);
        setEditingId(exp.id);
    };

    const handleDelete = (id) => {
        setProfile({ ...profile, experience: profile.experience.filter((e) => e.id !== id) });
    };

    return (
        <SectionCard title="Career Path">
            <div className="space-y-3 mb-6">
                <TextField
                    label="Company"
                    placeholder="e.g. Acme Corp"
                    value={input.company}
                    onChange={(e) => setInput({ ...input, company: e.target.value })}
                />
                <TextField
                    label="Role"
                    placeholder="e.g. Senior Frontend Engineer"
                    value={input.role}
                    onChange={(e) => setInput({ ...input, role: e.target.value })}
                />
                <TextField
                    label="Duration"
                    placeholder="e.g. 2022-Present"
                    value={input.duration}
                    onChange={(e) => setInput({ ...input, duration: e.target.value })}
                />
                <TextAreaField
                    label="Responsibilities"
                    placeholder="Describe your impact and key results..."
                    value={input.description}
                    onChange={(e) => setInput({ ...input, description: e.target.value })}
                />
                <button
                    onClick={handleSave}
                    className="w-full bg-black text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest"
                >
                    {editingId ? "Update Job" : "Add Experience"}
                </button>
            </div>
            
            <ArrayInput 
                items={profile.experience}
                onEdit={handleEdit}
                onDelete={handleDelete}
                titleKey="company"
            />
        </SectionCard>
    );
};

export default ExperienceEditor;

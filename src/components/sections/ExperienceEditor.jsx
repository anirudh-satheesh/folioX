import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { experienceSchema } from "../../data/defaultProfile";
import { Section, Input, TextArea } from "../EditorUI";

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
        <Section title="Career Path">
            <div className="space-y-3 mb-6">
                <Input
                    placeholder="Company"
                    value={input.company}
                    onChange={(e) => setInput({ ...input, company: e.target.value })}
                />
                <Input
                    placeholder="Role"
                    value={input.role}
                    onChange={(e) => setInput({ ...input, role: e.target.value })}
                />
                <Input
                    placeholder="Duration (e.g. 2022-Present)"
                    value={input.duration}
                    onChange={(e) => setInput({ ...input, duration: e.target.value })}
                />
                <TextArea
                    placeholder="Results & Responsibilities"
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
            <div className="space-y-2">
                {profile.experience.map((exp) => (
                    <div
                        key={exp.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100"
                    >
                        <span className="text-xs font-bold truncate pr-4">{exp.company}</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleEdit(exp)}
                                className="text-blue-600 text-[10px] font-black uppercase"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(exp.id)}
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

export default ExperienceEditor;

import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { achievementSchema } from "../../data/defaultProfile";
import { SectionCard, TextField, TextAreaField, ArrayInput } from "../ui/fields";
import { generateId } from "../../utils/id";

const AchievementsEditor = () => {
    const { profile, setProfile } = useProfile();
    const [input, setInput] = useState({ ...achievementSchema, id: generateId() });
    const [editingId, setEditingId] = useState(null);

    const handleSave = () => {
        if (!input.title.trim()) return;
        if (editingId) {
            setProfile({
                ...profile,
                achievements: profile.achievements.map((a) => (a.id === editingId ? input : a)),
            });
            setEditingId(null);
        } else {
            setProfile({ ...profile, achievements: [...profile.achievements, input] });
        }
        setInput({ ...achievementSchema, id: generateId() });
    };

    const handleDelete = (id) => {
        setProfile({ ...profile, achievements: profile.achievements.filter((a) => a.id !== id) });
    };

    return (
        <SectionCard title="Achievements">
            <div className="space-y-3 mb-6">
                <TextField
                    label="Achievement Title"
                    placeholder="e.g. Won Hackathon 2023"
                    value={input.title}
                    onChange={(e) => setInput({ ...input, title: e.target.value })}
                />
                <TextAreaField
                    label="Description"
                    placeholder="Briefly explain what you achieved..."
                    value={input.description}
                    onChange={(e) => setInput({ ...input, description: e.target.value })}
                />
                <button
                    onClick={handleSave}
                    className="w-full bg-black text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest"
                >
                    {editingId ? "Update Achievement" : "Add Achievement"}
                </button>
            </div>

            <ArrayInput 
                items={profile.achievements}
                onEdit={(a) => { setInput(a); setEditingId(a.id); }}
                onDelete={handleDelete}
                titleKey="title"
            />
        </SectionCard>
    );
};

export default AchievementsEditor;

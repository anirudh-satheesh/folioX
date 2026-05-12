import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { achievementSchema } from "../../data/defaultProfile";
import { Section, Input, TextArea } from "../EditorUI";

const AchievementsEditor = () => {
    const { profile, setProfile } = useProfile();
    const [input, setInput] = useState({ ...achievementSchema, id: crypto.randomUUID() });
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
        setInput({ ...achievementSchema, id: crypto.randomUUID() });
    };

    const handleDelete = (id) => {
        setProfile({ ...profile, achievements: profile.achievements.filter((a) => a.id !== id) });
    };

    return (
        <Section title="Achievements">
            <div className="space-y-3 mb-6">
                <Input
                    placeholder="Achievement Title"
                    value={input.title}
                    onChange={(e) => setInput({ ...input, title: e.target.value })}
                />
                <TextArea
                    placeholder="Description"
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
            <div className="space-y-2">
                {profile.achievements.map((a) => (
                    <div
                        key={a.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100"
                    >
                        <span className="text-xs font-bold truncate pr-4">{a.title}</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => { setInput(a); setEditingId(a.id); }}
                                className="text-blue-600 text-[10px] font-black uppercase"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(a.id)}
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

export default AchievementsEditor;

import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { educationSchema } from "../../data/defaultProfile";
import { Section, Input } from "../EditorUI";

const EducationEditor = () => {
    const { profile, setProfile } = useProfile();
    const [input, setInput] = useState({ ...educationSchema, id: crypto.randomUUID() });
    const [editingId, setEditingId] = useState(null);

    const handleSave = () => {
        if (!input.school.trim()) return;
        if (editingId) {
            setProfile({
                ...profile,
                education: profile.education.map((edu) => (edu.id === editingId ? input : edu)),
            });
            setEditingId(null);
        } else {
            setProfile({ ...profile, education: [...profile.education, input] });
        }
        setInput({ ...educationSchema, id: crypto.randomUUID() });
    };

    const handleDelete = (id) => {
        setProfile({ ...profile, education: profile.education.filter((e) => e.id !== id) });
    };

    return (
        <Section title="Academic Background">
            <div className="space-y-3 mb-6">
                <Input
                    placeholder="School/University"
                    value={input.school}
                    onChange={(e) => setInput({ ...input, school: e.target.value })}
                />
                <Input
                    placeholder="Degree"
                    value={input.degree}
                    onChange={(e) => setInput({ ...input, degree: e.target.value })}
                />
                <Input
                    placeholder="Year"
                    value={input.year}
                    onChange={(e) => setInput({ ...input, year: e.target.value })}
                />
                <button
                    onClick={handleSave}
                    className="w-full bg-black text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest"
                >
                    {editingId ? "Update Education" : "Add Education"}
                </button>
            </div>
            <div className="space-y-2">
                {profile.education.map((edu) => (
                    <div
                        key={edu.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100"
                    >
                        <span className="text-xs font-bold truncate pr-4">{edu.school}</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => { setInput(edu); setEditingId(edu.id); }}
                                className="text-blue-600 text-[10px] font-black uppercase"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(edu.id)}
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

export default EducationEditor;

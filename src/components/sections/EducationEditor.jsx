import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { educationSchema } from "../../data/defaultProfile";
import { SectionCard, TextField, ArrayInput } from "../ui/fields";
import { generateId } from "../../utils/id";

const EducationEditor = () => {
    const { profile, setProfile } = useProfile();
    const [input, setInput] = useState({ ...educationSchema, id: generateId() });
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
        setInput({ ...educationSchema, id: generateId() });
    };

    const handleDelete = (id) => {
        setProfile({ ...profile, education: profile.education.filter((e) => e.id !== id) });
    };

    return (
        <SectionCard title="Academic Background">
            <div className="space-y-3 mb-6">
                <TextField
                    label="School/University"
                    placeholder="e.g. Stanford University"
                    value={input.school}
                    onChange={(e) => setInput({ ...input, school: e.target.value })}
                />
                <TextField
                    label="Degree"
                    placeholder="e.g. B.S. in Computer Science"
                    value={input.degree}
                    onChange={(e) => setInput({ ...input, degree: e.target.value })}
                />
                <TextField
                    label="Year"
                    placeholder="e.g. 2018 - 2022"
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
            
            <ArrayInput 
                items={profile.education}
                onEdit={(edu) => { setInput(edu); setEditingId(edu.id); }}
                onDelete={handleDelete}
                titleKey="school"
            />
        </SectionCard>
    );
};

export default EducationEditor;

import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { certificationSchema } from "../../data/defaultProfile";
import { Section, Input } from "../EditorUI";

const CertificationsEditor = () => {
    const { profile, setProfile } = useProfile();
    const [input, setInput] = useState({ ...certificationSchema, id: crypto.randomUUID() });
    const [editingId, setEditingId] = useState(null);

    const handleSave = () => {
        if (!input.name.trim()) return;
        if (editingId) {
            setProfile({
                ...profile,
                certifications: profile.certifications.map((c) => (c.id === editingId ? input : c)),
            });
            setEditingId(null);
        } else {
            setProfile({ ...profile, certifications: [...profile.certifications, input] });
        }
        setInput({ ...certificationSchema, id: crypto.randomUUID() });
    };

    const handleDelete = (id) => {
        setProfile({ ...profile, certifications: profile.certifications.filter((c) => c.id !== id) });
    };

    return (
        <Section title="Certifications">
            <div className="space-y-3 mb-6">
                <Input
                    placeholder="Certification Name"
                    value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                />
                <Input
                    placeholder="Issuer"
                    value={input.issuer}
                    onChange={(e) => setInput({ ...input, issuer: e.target.value })}
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
                    {editingId ? "Update Cert" : "Add Certification"}
                </button>
            </div>
            <div className="space-y-2">
                {profile.certifications.map((c) => (
                    <div
                        key={c.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100"
                    >
                        <span className="text-xs font-bold truncate pr-4">{c.name}</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => { setInput(c); setEditingId(c.id); }}
                                className="text-blue-600 text-[10px] font-black uppercase"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(c.id)}
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

export default CertificationsEditor;

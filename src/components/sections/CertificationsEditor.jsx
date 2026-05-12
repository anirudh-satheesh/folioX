import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { certificationSchema } from "../../data/defaultProfile";
import { SectionCard, TextField, ArrayInput } from "../ui/fields";

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
        <SectionCard title="Certifications">
            <div className="space-y-3 mb-6">
                <TextField
                    label="Certification Name"
                    placeholder="e.g. AWS Certified Solutions Architect"
                    value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                />
                <TextField
                    label="Issuer"
                    placeholder="e.g. Amazon Web Services"
                    value={input.issuer}
                    onChange={(e) => setInput({ ...input, issuer: e.target.value })}
                />
                <TextField
                    label="Year"
                    placeholder="e.g. 2023"
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
            
            <ArrayInput 
                items={profile.certifications}
                onEdit={(c) => { setInput(c); setEditingId(c.id); }}
                onDelete={handleDelete}
                titleKey="name"
            />
        </SectionCard>
    );
};

export default CertificationsEditor;

import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { socialLinkSchema } from "../../data/defaultProfile";
import { Section, Input } from "../EditorUI";

const SocialEditor = () => {
    const { profile, setProfile } = useProfile();
    const [socialInput, setSocialInput] = useState({ ...socialLinkSchema, id: crypto.randomUUID() });

    const handleSaveSocial = () => {
        if (!socialInput.platform.trim() || !socialInput.url.trim()) return;
        setProfile({ ...profile, socialLinks: [...profile.socialLinks, socialInput] });
        setSocialInput({ ...socialLinkSchema, id: crypto.randomUUID() });
    };

    const removeSocial = (id) => {
        setProfile({ ...profile, socialLinks: profile.socialLinks.filter((soc) => soc.id !== id) });
    };

    return (
        <Section title="Presence">
            <div className="flex gap-2 mb-4">
                <select 
                    className="flex-1 bg-[#F5F7F9] border-transparent rounded-xl px-4 py-3 text-xs outline-none"
                    value={socialInput.platform}
                    onChange={(e) => setSocialInput({ ...socialInput, platform: e.target.value })}
                >
                    <option value="">Platform</option>
                    <option value="GitHub">GitHub</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Twitter">Twitter</option>
                </select>
                <Input placeholder="Handle/URL" value={socialInput.url} onChange={(e) => setSocialInput({ ...socialInput, url: e.target.value })} />
                <button onClick={handleSaveSocial} className="bg-black text-white px-4 rounded-xl font-bold text-xs">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
                {profile.socialLinks.map(s => (
                    <div key={s.id} className="bg-gray-50 px-3 py-1.5 rounded-lg text-[10px] font-black border border-gray-100 flex items-center gap-3 uppercase">
                        {s.platform}
                        <button 
                            onClick={() => removeSocial(s.id)}
                            className="text-gray-300 hover:text-black"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default SocialEditor;

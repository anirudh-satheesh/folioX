import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { socialLinkSchema } from "../../data/defaultProfile";
import { SectionCard, TextField } from "../ui/fields";
import { generateId } from "../../utils/id";

const SocialEditor = () => {
    const { profile, setProfile } = useProfile();
    const [socialInput, setSocialInput] = useState({ ...socialLinkSchema, id: generateId() });

    const handleSaveSocial = () => {
        if (!socialInput.platform.trim() || !socialInput.url.trim()) return;
        setProfile({ ...profile, socialLinks: [...profile.socialLinks, socialInput] });
        setSocialInput({ ...socialLinkSchema, id: generateId() });
    };

    const removeSocial = (id) => {
        setProfile({ ...profile, socialLinks: profile.socialLinks.filter((soc) => soc.id !== id) });
    };

    return (
        <SectionCard title="Presence">
            <div className="flex gap-2 items-end mb-4">
                <div className="flex-1 space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 tracking-widest">Platform</label>
                    <select 
                        className="w-full bg-[#F5F7F9] border-transparent rounded-xl px-4 py-3 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-black/5 transition-all"
                        value={socialInput.platform}
                        onChange={(e) => setSocialInput({ ...socialInput, platform: e.target.value })}
                    >
                        <option value="">Platform</option>
                        <option value="GitHub">GitHub</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Twitter">Twitter</option>
                    </select>
                </div>
                <TextField 
                    label="Handle/URL"
                    placeholder="e.g. github.com/username" 
                    value={socialInput.url} 
                    onChange={(e) => setSocialInput({ ...socialInput, url: e.target.value })} 
                />
                <button 
                    onClick={handleSaveSocial} 
                    className="bg-black text-white px-5 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                    Add
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                {profile.socialLinks.map(s => (
                    <div key={s.id} className="bg-gray-50 px-3 py-1.5 rounded-lg text-[10px] font-black border border-gray-100 flex items-center gap-3 uppercase">
                        {s.platform}
                        <button 
                            onClick={() => removeSocial(s.id)}
                            className="text-gray-300 hover:text-black transition-colors"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
};

export default SocialEditor;

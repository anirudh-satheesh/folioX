import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { motion } from "framer-motion";
import { Section, Input } from "../EditorUI";

const SkillsEditor = () => {
    const { profile, setProfile } = useProfile();
    const [skillInput, setSkillInput] = useState("");

    const addSkill = () => {
        if (!skillInput.trim()) return;
        setProfile({ ...profile, skills: [...profile.skills, skillInput] });
        setSkillInput("");
    };

    const removeSkill = (index) => {
        setProfile({ ...profile, skills: profile.skills.filter((_, i) => i !== index) });
    };

    return (
        <Section title="Expertise Area">
            <div className="flex gap-2 mb-4">
                <Input
                    placeholder="Tool/Skill"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                />
                <button
                    onClick={addSkill}
                    className="bg-black text-white px-4 rounded-xl font-bold text-xs"
                >
                    Add
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                    <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        key={index}
                        className="bg-gray-50 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-100 flex items-center gap-2"
                    >
                        {skill}
                        <button
                            onClick={() => removeSkill(index)}
                            className="text-gray-300 hover:text-black transition-colors"
                        >
                            ×
                        </button>
                    </motion.span>
                ))}
            </div>
        </Section>
    );
};

export default SkillsEditor;

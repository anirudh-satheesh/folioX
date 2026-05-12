import { useProfile } from "../../context/ProfileContext";
import { SectionCard, TagInput } from "../ui/fields";

const SkillsEditor = () => {
    const { profile, setProfile } = useProfile();

    const addSkill = (skill) => {
        setProfile({ ...profile, skills: [...profile.skills, skill] });
    };

    const removeSkill = (index) => {
        setProfile({ ...profile, skills: profile.skills.filter((_, i) => i !== index) });
    };

    return (
        <SectionCard title="Expertise Area">
            <TagInput 
                tags={profile.skills}
                onAdd={addSkill}
                onRemove={removeSkill}
                placeholder="Add a skill or tool..."
            />
        </SectionCard>
    );
};

export default SkillsEditor;

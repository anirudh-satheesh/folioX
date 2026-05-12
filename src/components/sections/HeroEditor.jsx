import { useProfile } from "../../context/ProfileContext";
import { SectionCard, TextField } from "../ui/fields";

const HeroEditor = () => {
    const { profile, setProfile } = useProfile();
    
    return (
        <SectionCard title="Intro Header">
            <div className="space-y-4">
                <TextField 
                    label="Greeting"
                    placeholder="e.g. Hello, I'm"
                    value={profile.hero.greeting}
                    onChange={(e) => setProfile({ ...profile, hero: { ...profile.hero, greeting: e.target.value } })}
                />
                <TextField 
                    label="Job Title"
                    placeholder="Official Job Title"
                    value={profile.hero.title}
                    onChange={(e) => setProfile({ ...profile, hero: { ...profile.hero, title: e.target.value } })}
                />
            </div>
        </SectionCard>
    );
};

export default HeroEditor;

import { useProfile } from "../../context/ProfileContext";
import { Section, Input } from "../EditorUI";

const HeroEditor = () => {
    const { profile, setProfile } = useProfile();
    
    return (
        <Section title="Intro Header">
            <div className="space-y-4">
                <Input 
                    placeholder="Greeting (e.g. Hello, I'm)"
                    value={profile.hero.greeting}
                    onChange={(e) => setProfile({ ...profile, hero: { ...profile.hero, greeting: e.target.value } })}
                />
                <Input 
                    placeholder="Official Job Title"
                    value={profile.hero.title}
                    onChange={(e) => setProfile({ ...profile, hero: { ...profile.hero, title: e.target.value } })}
                />
            </div>
        </Section>
    );
};

export default HeroEditor;

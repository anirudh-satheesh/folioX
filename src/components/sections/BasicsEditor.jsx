import { useProfile } from "../../context/ProfileContext";
import { Section, Input, TextArea } from "../EditorUI";

const BasicsEditor = () => {
    const { profile, setProfile } = useProfile();

    return (
        <Section title="Profile Basics">
            <div className="space-y-4">
                <Input 
                    placeholder="Full Name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
                <TextArea 
                    placeholder="Professional Biography"
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                />
                <Input 
                    placeholder="Resume Link (Google Drive/Dropbox)"
                    value={profile.resumeUrl}
                    onChange={(e) => setProfile({ ...profile, resumeUrl: e.target.value })}
                />
            </div>
        </Section>
    );
};

export default BasicsEditor;

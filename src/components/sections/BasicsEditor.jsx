import { useProfile } from "../../context/ProfileContext";
import { SectionCard, TextField, TextAreaField } from "../ui/fields";

const BasicsEditor = () => {
    const { profile, setProfile } = useProfile();

    return (
        <SectionCard title="Profile Basics">
            <div className="space-y-4">
                <TextField 
                    label="Full Name"
                    placeholder="Enter your name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
                <TextAreaField 
                    label="Biography"
                    placeholder="Describe yourself..."
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                />
                <TextField 
                    label="Resume Link"
                    placeholder="Google Drive / Dropbox URL"
                    value={profile.resumeUrl}
                    onChange={(e) => setProfile({ ...profile, resumeUrl: e.target.value })}
                />
            </div>
        </SectionCard>
    );
};

export default BasicsEditor;

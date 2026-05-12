import { createContext, useContext, useState, useEffect } from "react";
import { defaultProfile } from "../data/defaultProfile";
import { loadProfile, saveProfile } from "../lib/storage";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    // Hydrate state on app load with deep merge to ensure all default fields exist
    const [profile, setProfile] = useState(() => {
        const loaded = loadProfile();
        if (!loaded) return defaultProfile;

        // Deep merge loaded data onto defaultProfile to ensure all nested fields exist
        return {
            ...defaultProfile,
            ...loaded,
            hero: { ...defaultProfile.hero, ...(loaded.hero || {}) },
            theme: { ...defaultProfile.theme, ...(loaded.theme || {}) },
            skills: loaded.skills || defaultProfile.skills,
            projects: loaded.projects || defaultProfile.projects,
            experience: loaded.experience || defaultProfile.experience,
            education: loaded.education || defaultProfile.education,
            certifications: loaded.certifications || defaultProfile.certifications,
            achievements: loaded.achievements || defaultProfile.achievements,
            socialLinks: loaded.socialLinks || defaultProfile.socialLinks,
            sectionOrder: loaded.sectionOrder || defaultProfile.sectionOrder,
        };
    });

    // Autosave on profile changes
    useEffect(() => {
        saveProfile(profile);
    }, [profile]);

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error("useProfile must be used within a ProfileProvider");
    }
    return context;
};
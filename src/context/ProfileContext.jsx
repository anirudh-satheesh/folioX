import { createContext, useContext, useState, useEffect } from "react";
import { defaultProfile } from "../data/defaultProfile";
import { loadProfile, saveProfile } from "../lib/storage";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    // Hydrate state on app load
    const [profile, setProfile] = useState(() => {
        return loadProfile() || defaultProfile;
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
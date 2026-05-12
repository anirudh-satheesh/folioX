const STORAGE_KEY = "foliox_profile_data";

/**
 * Saves the profile data to local storage.
 * @param {Object} profile - The profile data to save.
 */
export const saveProfile = (profile) => {
    try {
        const serializedData = JSON.stringify(profile);
        localStorage.setItem(STORAGE_KEY, serializedData);
    } catch (error) {
        console.error("Error saving profile to localStorage:", error);
    }
};

/**
 * Loads the profile data from local storage.
 * @returns {Object|null} The profile data or null if not found.
 */
export const loadProfile = () => {
    try {
        const serializedData = localStorage.getItem(STORAGE_KEY);
        if (serializedData === null) {
            return null;
        }
        return JSON.parse(serializedData);
    } catch (error) {
        console.error("Error loading profile from localStorage:", error);
        return null;
    }
};

/**
 * Clears the profile data from local storage.
 */
export const clearProfile = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error("Error clearing profile from localStorage:", error);
    }
};

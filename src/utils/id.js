/**
 * Generates a unique ID string.
 * Used for identifying items in arrays for React keys and CRUD operations.
 */
export const generateId = () => {
    return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
};

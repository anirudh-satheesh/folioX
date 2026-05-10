export const defaultProfile = {
    name: "",
    bio: "",
    resumeUrl: "",
    
    hero: {
        greeting: "Hello, I'm",
        title: "Creative Developer & Designer",
        subtitle: ""
    },
    
    theme: {
        primary: "#000000",
        secondary: "#3b82f6",
        background: "#ffffff",
        accent: "#f3f4f6"
    },
    
    skills: [],
    projects: [],
    experience: [],
    education: [],
    certifications: [],
    achievements: [],
    socialLinks: [],
    
    sectionOrder: ["experience", "skills", "projects", "achievements", "certifications", "education"]
};

export const projectSchema = {
    id: null,
    title: "",
    description: "",
    techStack: "",
    github: "",
    liveDemo: "",
    image: "",
    featured: false
};

export const experienceSchema = {
    id: null,
    company: "",
    role: "",
    duration: "",
    description: ""
};

export const educationSchema = {
    id: null,
    school: "",
    degree: "",
    year: ""
};

export const certificationSchema = {
    id: null,
    name: "",
    issuer: "",
    year: "",
    link: ""
};

export const achievementSchema = {
    id: null,
    title: "",
    description: ""
};

export const socialLinkSchema = {
    id: null,
    platform: "",
    url: ""
};

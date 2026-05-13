export const defaultProfile = {
    name: "",
    bio: "",
    resumeUrl: "",
    selectedTemplate: "web-one",
    mode: "portfolio", // 'portfolio' (website) or 'resume' (A4)
    
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
    
    sectionOrder: ["hero", "basics", "experience", "skills", "projects", "achievements", "certifications", "education", "social"],
    visibleSections: {
        hero: true,
        basics: true,
        experience: true,
        skills: true,
        projects: true,
        achievements: true,
        certifications: true,
        education: true,
        social: true
    }
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

import TemplateOne from "../templates/resume/TemplateOne";
import TemplateTwo from "../templates/resume/TemplateTwo";
import WebTemplateOne from "../templates/web/WebTemplateOne";
import WebTemplateTwo from "../templates/web/WebTemplateTwo";

export const templateRegistry = [
    {
        id: "resume-one",
        name: "Standard Professional",
        mode: "resume",
        component: TemplateOne,
        theme: "modern",
        supports: {
            darkMode: true,
            accentColor: true,
            animations: true,
            layoutModes: ["standard"],
            sections: ["hero", "basics", "experience", "skills", "projects", "achievements", "certifications", "education", "social"]
        }
    },
    {
        id: "resume-two",
        name: "Minimalist Sidebar",
        mode: "resume",
        component: TemplateTwo,
        theme: "minimal",
        supports: {
            darkMode: false,
            accentColor: true,
            animations: false,
            layoutModes: ["sidebar"],
            sections: ["hero", "basics", "skills", "projects", "experience", "education", "social"]
        }
    },
    {
        id: "web-one",
        name: "Modern Bento",
        mode: "portfolio",
        component: WebTemplateOne,
        theme: "dark",
        supports: {
            darkMode: true,
            accentColor: true,
            animations: true,
            layoutModes: ["grid", "stack"],
            sections: ["hero", "basics", "projects", "skills", "experience", "social"]
        }
    },
    {
        id: "web-two",
        name: "Creative Portfolio",
        mode: "portfolio",
        component: WebTemplateTwo,
        theme: "flat",
        supports: {
            darkMode: true,
            accentColor: true,
            animations: true,
            layoutModes: ["grid", "stack"],
            sections: ["hero", "basics", "experience", "skills", "projects", "achievements", "education", "certifications", "social"]
        }
    }
];

export const getTemplate = (mode, id) => {
    return templateRegistry.find(t => t.mode === mode && t.id === id) || templateRegistry.find(t => t.mode === mode);
};

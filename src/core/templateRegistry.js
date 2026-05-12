import TemplateOne from "../templates/resume/TemplateOne";
import TemplateTwo from "../templates/resume/TemplateTwo";
import WebTemplateOne from "../templates/website/WebTemplateOne";
import WebTemplateTwo from "../templates/website/WebTemplateTwo";

export const templateRegistry = [
    {
        id: "one",
        name: "Standard Professional",
        mode: "resume",
        component: TemplateOne,
        theme: "modern"
    },
    {
        id: "two",
        name: "Minimalist Sidebar",
        mode: "resume",
        component: TemplateTwo,
        theme: "minimal"
    },
    {
        id: "one",
        name: "Modern Bento",
        mode: "portfolio",
        component: WebTemplateOne,
        theme: "dark"
    },
    {
        id: "two",
        name: "Creative Portfolio",
        mode: "portfolio",
        component: WebTemplateTwo,
        theme: "flat"
    }
];

export const getTemplate = (mode, id) => {
    return templateRegistry.find(t => t.mode === mode && t.id === id) || templateRegistry.find(t => t.mode === mode);
};

import HeroEditor from "../components/sections/HeroEditor";
import BasicsEditor from "../components/sections/BasicsEditor";
import SkillsEditor from "../components/sections/SkillsEditor";
import ProjectsEditor from "../components/sections/ProjectsEditor";
import ExperienceEditor from "../components/sections/ExperienceEditor";
import EducationEditor from "../components/sections/EducationEditor";
import CertificationsEditor from "../components/sections/CertificationsEditor";
import AchievementsEditor from "../components/sections/AchievementsEditor";
import SocialEditor from "../components/sections/SocialEditor";

export const sectionRegistry = {
    hero: {
        title: "Intro Header",
        Editor: HeroEditor,
    },
    basics: {
        title: "Profile Basics",
        Editor: BasicsEditor,
    },
    skills: {
        title: "Expertise Area",
        Editor: SkillsEditor,
    },
    projects: {
        title: "Portfolio Work",
        Editor: ProjectsEditor,
    },
    experience: {
        title: "Career Path",
        Editor: ExperienceEditor,
    },
    education: {
        title: "Academic Background",
        Editor: EducationEditor,
    },
    certifications: {
        title: "Certifications",
        Editor: CertificationsEditor,
    },
    achievements: {
        title: "Achievements",
        Editor: AchievementsEditor,
    },
    social: {
        title: "Presence",
        Editor: SocialEditor,
    },
};

/**
 * Returns the list of available reorderable section keys
 */
export const getReorderableSections = () => {
    return ["experience", "skills", "projects", "achievements", "certifications", "education"];
};

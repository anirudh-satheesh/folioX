import HeroEditor from "../components/editor/HeroEditor";
import BasicsEditor from "../components/editor/BasicsEditor";
import SkillsEditor from "../components/editor/SkillsEditor";
import ProjectsEditor from "../components/editor/ProjectsEditor";
import ExperienceEditor from "../components/editor/ExperienceEditor";
import EducationEditor from "../components/editor/EducationEditor";
import CertificationsEditor from "../components/editor/CertificationsEditor";
import AchievementsEditor from "../components/editor/AchievementsEditor";
import SocialEditor from "../components/editor/SocialEditor";

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

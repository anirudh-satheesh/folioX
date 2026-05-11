import { useState } from "react";
import { useProfile } from "../context/ProfileContext";
import { Reorder, motion } from "framer-motion";
import ProjectForm from "../components/forms/ProjectForm";
import { 
  projectSchema, 
  experienceSchema, 
  educationSchema, 
  certificationSchema, 
  achievementSchema, 
  socialLinkSchema 
} from "../data/defaultProfile";

// Modular Section Wrapper for consistent styling
const Section = ({ title, children, badge }) => (
  <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 mb-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-black uppercase tracking-[0.1em] text-gray-400">{title}</h2>
      {badge && <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">{badge}</span>}
    </div>
    {children}
  </div>
);

const Input = (props) => (
  <input 
    {...props} 
    className={`w-full bg-[#F5F7F9] border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black/10 outline-none transition-all ${props.className || ""}`}
  />
);

const TextArea = (props) => (
  <textarea 
    {...props} 
    className={`w-full bg-[#F5F7F9] border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black/10 outline-none transition-all min-h-[100px] ${props.className || ""}`}
  />
);

function Builder() {
  const { profile, setProfile } = useProfile();
  const [skillInput, setSkillInput] = useState("");
  
  const [projectInput, setProjectInput] = useState({ ...projectSchema, id: crypto.randomUUID() });
  const [editingProjectId, setEditingProjectId] = useState(null);

  const [experienceInput, setExperienceInput] = useState({ ...experienceSchema, id: crypto.randomUUID() });
  const [editingExperienceId, setEditingExperienceId] = useState(null);

  const [educationInput, setEducationInput] = useState({ ...educationSchema, id: crypto.randomUUID() });
  const [editingEducationId, setEditingEducationId] = useState(null);

  const [certInput, setCertInput] = useState({ ...certificationSchema, id: crypto.randomUUID() });
  const [editingCertId, setEditingCertId] = useState(null);

  const [achievementInput, setAchievementInput] = useState({ ...achievementSchema, id: crypto.randomUUID() });
  const [editingAchievementId, setEditingAchievementId] = useState(null);

  const [socialInput, setSocialInput] = useState({ ...socialLinkSchema, id: crypto.randomUUID() });

  // HANDLERS
  const addSkill = () => {
    if (!skillInput.trim()) return;
    setProfile({ ...profile, skills: [...profile.skills, skillInput] });
    setSkillInput("");
  };

  const handleSaveProject = () => {
    if (!projectInput.title.trim()) return;
    const formattedProject = {
      ...projectInput,
      techStack: typeof projectInput.techStack === 'string' 
        ? projectInput.techStack.split(",").map(s => s.trim()).filter(s => s !== "")
        : projectInput.techStack
    };

    if (editingProjectId) {
      setProfile({ ...profile, projects: profile.projects.map(p => p.id === editingProjectId ? formattedProject : p) });
      setEditingProjectId(null);
    } else {
      setProfile({ ...profile, projects: [...profile.projects, formattedProject] });
    }
    setProjectInput({ ...projectSchema, id: crypto.randomUUID() });
  };

  const handleSaveExperience = () => {
    if (!experienceInput.company.trim()) return;
    if (editingExperienceId) {
      setProfile({ ...profile, experience: profile.experience.map(exp => exp.id === editingExperienceId ? experienceInput : exp) });
      setEditingExperienceId(null);
    } else {
      setProfile({ ...profile, experience: [...profile.experience, experienceInput] });
    }
    setExperienceInput({ ...experienceSchema, id: crypto.randomUUID() });
  };

  const handleSaveEducation = () => {
    if (!educationInput.school.trim()) return;
    if (editingEducationId) {
      setProfile({ ...profile, education: profile.education.map(edu => edu.id === editingEducationId ? educationInput : edu) });
      setEditingEducationId(null);
    } else {
      setProfile({ ...profile, education: [...profile.education, educationInput] });
    }
    setEducationInput({ ...educationSchema, id: crypto.randomUUID() });
  };

  const handleSaveCert = () => {
    if (!certInput.name.trim()) return;
    if (editingCertId) {
      setProfile({ ...profile, certifications: profile.certifications.map(c => c.id === editingCertId ? certInput : c) });
      setEditingCertId(null);
    } else {
      setProfile({ ...profile, certifications: [...profile.certifications, certInput] });
    }
    setCertInput({ ...certificationSchema, id: crypto.randomUUID() });
  };

  const handleSaveAchievement = () => {
    if (!achievementInput.title.trim()) return;
    if (editingAchievementId) {
      setProfile({ ...profile, achievements: profile.achievements.map(a => a.id === editingAchievementId ? achievementInput : a) });
      setEditingAchievementId(null);
    } else {
      setProfile({ ...profile, achievements: [...profile.achievements, achievementInput] });
    }
    setAchievementInput({ ...achievementSchema, id: crypto.randomUUID() });
  };

  const handleSaveSocial = () => {
    if (!socialInput.platform.trim() || !socialInput.url.trim()) return;
    setProfile({ ...profile, socialLinks: [...profile.socialLinks, socialInput] });
    setSocialInput({ ...socialLinkSchema, id: crypto.randomUUID() });
  };

  return (
    <div className="pb-24">
      {/* MODE SELECTOR */}
      <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8">
        <button 
          onClick={() => setProfile({ ...profile, mode: 'portfolio' })}
          className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${profile.mode === 'portfolio' ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}
        >
          Website
        </button>
        <button 
          onClick={() => setProfile({ ...profile, mode: 'resume' })}
          className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${profile.mode === 'resume' ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}
        >
          Resume
        </button>
      </div>

      {/* TEMPLATE PICKER */}
      <Section title="Templates" badge="New">
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setProfile({ ...profile, selectedTemplate: 'one' })}
            className={`p-1 rounded-2xl border-2 transition-all ${profile.selectedTemplate === 'one' ? 'border-black' : 'border-transparent'}`}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl flex items-center justify-center">
              <span className="text-white text-[10px] font-black uppercase">Template One</span>
            </div>
          </button>
          <button 
            onClick={() => setProfile({ ...profile, selectedTemplate: 'two' })}
            className={`p-1 rounded-2xl border-2 transition-all ${profile.selectedTemplate === 'two' ? 'border-black' : 'border-transparent'}`}
          >
            <div className="aspect-[4/3] bg-[#0a0a0a] border border-gray-800 rounded-xl flex items-center justify-center overflow-hidden relative">
               <div className="w-1/3 h-full border-r border-gray-800 bg-black flex items-center justify-center relative z-10">
                 <div className="w-4 h-1 bg-gray-700 rounded-full" />
               </div>
               <div className="flex-1 p-2 space-y-1 relative z-10">
                 <div className="w-full h-1 bg-gray-800 rounded-full" />
                 <div className="w-2/3 h-1 bg-gray-800 rounded-full" />
               </div>
               {/* Tiny indicator for template name */}
               <span className="absolute bottom-2 right-2 text-white/50 text-[8px] font-black uppercase z-20">Template Two</span>
            </div>
          </button>
        </div>
      </Section>

      {/* SECTION ORDERING */}
      <Section title="Structure" badge="Drag">
        <Reorder.Group 
          axis="y" 
          values={profile.sectionOrder} 
          onReorder={(newOrder) => setProfile({ ...profile, sectionOrder: newOrder })}
          className="space-y-2"
        >
          {profile.sectionOrder.map((section) => (
            <Reorder.Item 
              key={section} 
              value={section}
              className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center justify-between cursor-grab active:cursor-grabbing hover:border-black/10 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-black transition-colors" />
                <span className="capitalize text-xs font-bold text-gray-600 group-hover:text-black">{section}</span>
              </div>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8h16M4 16h16" />
              </svg>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Section>

      {/* THEME & APPEARANCE */}
      <Section title="Appearance">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase">Primary</label>
            <div className="flex gap-2 items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
              <input
                type="color"
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent"
                value={profile.theme.primary}
                onChange={(e) => setProfile({ ...profile, theme: { ...profile.theme, primary: e.target.value } })}
              />
              <span className="text-[11px] font-mono font-medium">{profile.theme.primary}</span>
            </div>
          </div>
          <div className="space-y-1">
             <label className="text-[10px] font-bold text-gray-400 uppercase">Secondary</label>
             <div className="flex gap-2 items-center p-2 bg-gray-50 rounded-xl border border-gray-100">
              <input
                type="color"
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent"
                value={profile.theme.secondary}
                onChange={(e) => setProfile({ ...profile, theme: { ...profile.theme, secondary: e.target.value } })}
              />
              <span className="text-[11px] font-mono font-medium">{profile.theme.secondary}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* HERO & GREETING */}
      <Section title="Intro Header">
        <div className="space-y-4">
          <Input 
            placeholder="Greeting (e.g. Hello, I'm)"
            value={profile.hero.greeting}
            onChange={(e) => setProfile({ ...profile, hero: { ...profile.hero, greeting: e.target.value } })}
          />
          <Input 
            placeholder="Official Job Title"
            value={profile.hero.title}
            onChange={(e) => setProfile({ ...profile, hero: { ...profile.hero, title: e.target.value } })}
          />
        </div>
      </Section>

      {/* BASIC INFO */}
      <Section title="Profile Basics">
        <div className="space-y-4">
          <Input 
            placeholder="Full Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <TextArea 
            placeholder="Professional Biography"
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          />
          <Input 
            placeholder="Resume Link (Google Drive/Dropbox)"
            value={profile.resumeUrl}
            onChange={(e) => setProfile({ ...profile, resumeUrl: e.target.value })}
          />
        </div>
      </Section>

      {/* SKILLS */}
      <Section title="Expertise Area">
        <div className="flex gap-2 mb-4">
          <Input 
            placeholder="Tool/Skill"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
          />
          <button onClick={addSkill} className="bg-black text-white px-4 rounded-xl font-bold text-xs">Add</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <motion.span 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              key={index} 
              className="bg-gray-50 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-100 flex items-center gap-2"
            >
              {skill}
              <button 
                onClick={() => setProfile({ ...profile, skills: profile.skills.filter((_, i) => i !== index) })}
                className="text-gray-300 hover:text-black transition-colors"
              >
                ×
              </button>
            </motion.span>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section title="Portfolio Work">
        <div className="mb-6">
          <ProjectForm 
            value={projectInput}
            onChange={setProjectInput}
            onSave={handleSaveProject}
            onCancel={() => { setEditingProjectId(null); setProjectInput({ ...projectSchema, id: crypto.randomUUID() }); }}
            isEditing={!!editingProjectId}
          />
        </div>
        <div className="space-y-2">
          {profile.projects.map(p => (
            <div key={p.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-xs font-bold truncate pr-4">{p.title}</span>
              <div className="flex gap-2">
                 <button onClick={() => { setProjectInput({ ...p, techStack: p.techStack.join(", ") }); setEditingProjectId(p.id); }} className="text-blue-600 text-[10px] font-black uppercase">Edit</button>
                 <button onClick={() => setProfile({ ...profile, projects: profile.projects.filter(proj => proj.id !== p.id) })} className="text-red-600 text-[10px] font-black uppercase">Del</button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Career Path">
        <div className="space-y-3 mb-6">
          <Input placeholder="Company" value={experienceInput.company} onChange={(e) => setExperienceInput({ ...experienceInput, company: e.target.value })} />
          <Input placeholder="Role" value={experienceInput.role} onChange={(e) => setExperienceInput({ ...experienceInput, role: e.target.value })} />
          <Input placeholder="Duration (e.g. 2022-Present)" value={experienceInput.duration} onChange={(e) => setExperienceInput({ ...experienceInput, duration: e.target.value })} />
          <TextArea placeholder="Results & Responsibilities" value={experienceInput.description} onChange={(e) => setExperienceInput({ ...experienceInput, description: e.target.value })} />
          <button onClick={handleSaveExperience} className="w-full bg-black text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest">
            {editingExperienceId ? "Update Job" : "Add Experience"}
          </button>
        </div>
        <div className="space-y-2">
          {profile.experience.map(exp => (
            <div key={exp.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-xs font-bold truncate pr-4">{exp.company}</span>
              <div className="flex gap-2">
                 <button onClick={() => { setExperienceInput(exp); setEditingExperienceId(exp.id); }} className="text-blue-600 text-[10px] font-black uppercase">Edit</button>
                 <button onClick={() => setProfile({ ...profile, experience: profile.experience.filter(e => e.id !== exp.id) })} className="text-red-600 text-[10px] font-black uppercase">Del</button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SOCIAL LINKS */}
      <Section title="Presence">
        <div className="flex gap-2 mb-4">
          <select 
            className="flex-1 bg-[#F5F7F9] border-transparent rounded-xl px-4 py-3 text-xs outline-none"
            value={socialInput.platform}
            onChange={(e) => setSocialInput({ ...socialInput, platform: e.target.value })}
          >
            <option value="">Platform</option>
            <option value="GitHub">GitHub</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Twitter">Twitter</option>
          </select>
          <Input placeholder="Handle/URL" value={socialInput.url} onChange={(e) => setSocialInput({ ...socialInput, url: e.target.value })} />
          <button onClick={handleSaveSocial} className="bg-black text-white px-4 rounded-xl font-bold text-xs">Add</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.socialLinks.map(s => (
            <div key={s.id} className="bg-gray-50 px-3 py-1.5 rounded-lg text-[10px] font-black border border-gray-100 flex items-center gap-3 uppercase">
              {s.platform}
              <button 
                onClick={() => setProfile({ ...profile, socialLinks: profile.socialLinks.filter(soc => soc.id !== s.id) })}
                className="text-gray-300 hover:text-black"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}

export default Builder;
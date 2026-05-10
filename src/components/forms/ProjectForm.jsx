import React from 'react';

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

const ProjectForm = ({ value, onChange, onSave, onCancel, isEditing }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl space-y-4 border border-dashed border-gray-300">
      <div>
        <label className="block mb-1 text-[10px] font-black text-gray-400 uppercase tracking-wider">Project Title</label>
        <Input 
          placeholder="e.g. E-commerce App"
          value={value.title}
          onChange={(e) => onChange({ ...value, title: e.target.value })}
        />
      </div>

      <div>
        <label className="block mb-1 text-[10px] font-black text-gray-400 uppercase tracking-wider">Description</label>
        <TextArea 
          placeholder="What does this project do?"
          value={value.description}
          onChange={(e) => onChange({ ...value, description: e.target.value })}
        />
      </div>

      <div>
        <label className="block mb-1 text-[10px] font-black text-gray-400 uppercase tracking-wider">Tech Stack (comma separated)</label>
        <Input 
          placeholder="e.g. React, Firebase, Tailwind"
          value={value.techStack}
          onChange={(e) => onChange({ ...value, techStack: e.target.value })}
        />
      </div>

      <div>
        <label className="block mb-1 text-[10px] font-black text-gray-400 uppercase tracking-wider">Image URL</label>
        <Input 
          placeholder="https://..."
          value={value.image}
          onChange={(e) => onChange({ ...value, image: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-[10px] font-black text-gray-400 uppercase tracking-wider">GitHub Link</label>
          <Input 
            placeholder="https://github.com/..."
            value={value.github}
            onChange={(e) => onChange({ ...value, github: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-1 text-[10px] font-black text-gray-400 uppercase tracking-wider">Live Demo</label>
          <Input 
            placeholder="https://demo.com/..."
            value={value.liveDemo}
            onChange={(e) => onChange({ ...value, liveDemo: e.target.value })}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 py-2">
        <input
          type="checkbox"
          id="featured"
          checked={value.featured}
          onChange={(e) => onChange({ ...value, featured: e.target.checked })}
          className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
        />
        <label htmlFor="featured" className="text-xs font-bold text-gray-600">Mark as Featured</label>
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <button
          onClick={onSave}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors font-black text-xs uppercase tracking-widest"
        >
          {isEditing ? "Update Project" : "Add to Portfolio"}
        </button>
        
        {isEditing && (
          <button
            onClick={onCancel}
            className="w-full text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-black transition-colors py-2"
          >
            Cancel Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectForm;

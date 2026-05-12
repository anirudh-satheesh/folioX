import React from 'react';
import { TextField, TextAreaField } from '../ui/fields';

const ProjectForm = ({ value, onChange, onSave, onCancel, isEditing }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl space-y-4 border border-dashed border-gray-300">
      <TextField 
        label="Project Title"
        placeholder="e.g. E-commerce App"
        value={value.title}
        onChange={(e) => onChange({ ...value, title: e.target.value })}
      />

      <TextAreaField 
        label="Description"
        placeholder="What does this project do?"
        value={value.description}
        onChange={(e) => onChange({ ...value, description: e.target.value })}
      />

      <TextField 
        label="Tech Stack (comma separated)"
        placeholder="e.g. React, Firebase, Tailwind"
        value={value.techStack}
        onChange={(e) => onChange({ ...value, techStack: e.target.value })}
      />

      <TextField 
        label="Image URL"
        placeholder="https://..."
        value={value.image}
        onChange={(e) => onChange({ ...value, image: e.target.value })}
      />

      <div className="grid grid-cols-2 gap-4">
        <TextField 
          label="GitHub Link"
          placeholder="https://github.com/..."
          value={value.github}
          onChange={(e) => onChange({ ...value, github: e.target.value })}
        />
        <TextField 
          label="Live Demo"
          placeholder="https://demo.com/..."
          value={value.liveDemo}
          onChange={(e) => onChange({ ...value, liveDemo: e.target.value })}
        />
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

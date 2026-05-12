import { useState } from "react";
import { motion } from "framer-motion";

export const TextField = ({ label, ...props }) => (
    <div className="space-y-1 w-full">
        {label && <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 tracking-widest">{label}</label>}
        <input
            {...props}
            className={`w-full bg-[#F5F7F9] border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black/10 outline-none transition-all ${props.className || ""}`}
        />
    </div>
);

export const TextAreaField = ({ label, ...props }) => (
    <div className="space-y-1 w-full">
        {label && <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 tracking-widest">{label}</label>}
        <textarea
            {...props}
            className={`w-full bg-[#F5F7F9] border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black/10 outline-none transition-all min-h-[100px] ${props.className || ""}`}
        />
    </div>
);

export const SectionCard = ({ title, children, badge }) => (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 mb-6 font-geist">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-black uppercase tracking-[0.1em] text-gray-400">{title}</h2>
            {badge && <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">{badge}</span>}
        </div>
        {children}
    </div>
);

export const TagInput = ({ tags, onAdd, onRemove, placeholder = "Add item..." }) => {
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim()) {
            onAdd(input.trim());
            setInput("");
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <input
                    className="flex-1 bg-[#F5F7F9] border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-black/5 outline-none transition-all"
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                />
                <button
                    onClick={handleAdd}
                    className="bg-black text-white px-5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                    Add
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        key={index}
                        className="bg-gray-50 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-100 flex items-center gap-2"
                    >
                        {tag}
                        <button
                            onClick={() => onRemove(index)}
                            className="text-gray-300 hover:text-black transition-colors"
                        >
                            ×
                        </button>
                    </motion.span>
                ))}
            </div>
        </div>
    );
};

export const ArrayInput = ({ items, onEdit, onDelete, titleKey = "title" }) => (
    <div className="space-y-2 mt-4">
        {items.map((item) => (
            <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100 group hover:border-black/10 transition-all"
            >
                <span className="text-xs font-bold truncate pr-4 text-gray-600 group-hover:text-black transition-colors">
                    {item[titleKey]}
                </span>
                <div className="flex gap-3">
                    <button
                        onClick={() => onEdit(item)}
                        className="text-blue-600 text-[10px] font-black uppercase tracking-widest hover:underline"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(item.id)}
                        className="text-red-600 text-[10px] font-black uppercase tracking-widest hover:underline"
                    >
                        Del
                    </button>
                </div>
            </div>
        ))}
    </div>
);

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TextField = ({ label, id: providedId, ...props }) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    return (
        <div className="space-y-2 w-full">
            {label && <label htmlFor={id} className="text-[11px] font-black text-gray-400 lg:text-gray-500 uppercase ml-1 tracking-[0.15em] leading-tight">{label}</label>}
            <input
                id={id}
                {...props}
                className={`w-full bg-[#F8F9FA] border border-transparent rounded-xl px-4 py-3.5 text-sm font-medium focus:bg-white focus:ring-4 focus:ring-black/[0.03] focus:border-black/5 outline-none transition-all duration-300 placeholder:text-gray-300 ${props.className || ""}`}
            />
        </div>
    );
};

export const TextAreaField = ({ label, id: providedId, ...props }) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    return (
        <div className="space-y-2 w-full">
            {label && <label htmlFor={id} className="text-[11px] font-black text-gray-400 lg:text-gray-500 uppercase ml-1 tracking-[0.15em] leading-tight">{label}</label>}
            <textarea
                id={id}
                {...props}
                className={`w-full bg-[#F8F9FA] border border-transparent rounded-xl px-4 py-3.5 text-sm font-medium focus:bg-white focus:ring-4 focus:ring-black/[0.03] focus:border-black/5 outline-none transition-all duration-300 placeholder:text-gray-300 min-h-[120px] resize-none ${props.className || ""}`}
            />
        </div>
    );
};

export const SectionCard = ({ title, children, badge }) => (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 mb-6 group overflow-hidden">
        <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-black rounded-full" />
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-black leading-none">{title}</h2>
            </div>
            {badge && <span className="bg-gray-100 text-gray-500 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">{badge}</span>}
        </div>
        <div className="space-y-5 animate-slow">
            {children}
        </div>
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
            <div className="flex gap-2 p-1.5 bg-[#F8F9FA] rounded-2xl border border-gray-50">
                <input
                    className="flex-1 bg-transparent border-none px-3 py-2 text-sm font-medium outline-none placeholder:text-gray-300"
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleAdd();
                        }
                    }}
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    className="bg-black text-white px-5 py-2 rounded-xl font-black text-[10px] uppercase tracking-[0.15em] hover:bg-gray-800 hover:scale-[1.02] active:scale-95 transition-all shadow-sm"
                >
                    Add
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                <AnimatePresence mode="popLayout">
                    {tags.map((tag, index) => (
                        <motion.span
                            layout
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            key={tag + index}
                            className="bg-white pl-4 pr-2 py-2 rounded-xl text-[11px] font-bold border border-gray-100 flex items-center gap-3 shadow-none hover:shadow-md hover:border-black/5 transition-all group"
                        >
                            {tag}
                            <button
                                type="button"
                                onClick={() => onRemove(index)}
                                className="w-5 h-5 flex items-center justify-center rounded-lg bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all font-black text-[14px]"
                            >
                                ×
                            </button>
                        </motion.span>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export const ArrayInput = ({ items, onEdit, onDelete, titleKey = "title" }) => (
    <div className="space-y-2 mt-4">
        <AnimatePresence mode="popLayout">
            {items.map((item) => (
                <motion.div
                    layout
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-[#F8F9FA] hover:bg-white rounded-2xl border border-transparent hover:border-gray-100 group hover:shadow-xl hover:shadow-black/[0.02] transition-all duration-300"
                >
                    <span className="text-xs font-black truncate pr-4 text-gray-500 group-hover:text-black transition-colors uppercase tracking-widest">
                        {item[titleKey]}
                    </span>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => onEdit(item)}
                            className="bg-white text-black px-3 py-1.5 rounded-lg border border-gray-100 text-[9px] font-black uppercase tracking-widest hover:border-black transition-all shadow-sm active:scale-95"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            onClick={() => onDelete(item.id)}
                            className="bg-white text-red-500 px-3 py-1.5 rounded-lg border border-gray-100 text-[9px] font-black uppercase tracking-widest hover:bg-red-50 hover:border-red-100 transition-all shadow-sm active:scale-95"
                        >
                            Del
                        </button>
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>
    </div>
);

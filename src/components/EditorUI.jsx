export const Section = ({ title, children, badge }) => (
  <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 mb-6 font-geist">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-black uppercase tracking-[0.1em] text-gray-400">{title}</h2>
      {badge && <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">{badge}</span>}
    </div>
    {children}
  </div>
);

export const Input = (props) => (
  <input 
    {...props} 
    className={`w-full bg-[#F5F7F9] border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black/10 outline-none transition-all ${props.className || ""}`}
  />
);

export const TextArea = (props) => (
  <textarea 
    {...props} 
    className={`w-full bg-[#F5F7F9] border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black/10 outline-none transition-all min-h-[100px] ${props.className || ""}`}
  />
);

const Tabs = ({ active, setActive }) => {
  const tabs = ["Projects", "Certificates", "Services"];

  return (
    <div className="flex justify-center mt-6">
      <div className="
        bg-[#18191c]
        border border-gray-800
        rounded-full
        p-1.5
        flex gap-2
        shadow-[inset_0_0_12px_rgba(0,0,0,0.6)]
      ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              
              ${
                active === tab
                  ? `
                    bg-linear-to-r from-blue-500 to-cyan-400
                    text-black
                    shadow-lg
                    shadow-blue-500/30
                    scale-105
                  `
                  : `
                    text-gray-400
                    hover:text-white
                    hover:bg-[#232428]
                  `
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

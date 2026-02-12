import { useEffect, useState } from "react";
import { User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "skills", "portfolio", "contact"];
    const OFFSET = 90; // height of navbar

    const handleScroll = () => {
      const scrollPos = window.scrollY + OFFSET;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const linkStyle = (id) =>
  `block px-2 py-1 rounded-md transition font-medium
   ${
     active === id
       ? "text-primary bg-blue-500/15 md:bg-transparent md:text-cyan-400"
       : "text-gray-300 hover:text-white hover:bg-blue-500/20 md:hover:bg-transparent md:hover:text-cyan-300 md:hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
   }`;




  return (
    <nav className="fixed top-0 w-full z-50 bg-[#141515] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold tracking-wide text-white flex items-center gap-1.5">
          <User size={24} className="text-primary" />
          Sai Manideep
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          <li><a href="#home" className={linkStyle("home")}>Home</a></li>
          <li><a href="#about" className={linkStyle("about")}>About</a></li>
          <li><a href="#skills" className={linkStyle("skills")}>Skills</a></li>
          <li><a href="#portfolio" className={linkStyle("portfolio")}>Portfolio</a></li>
          <li><a href="#contact" className={linkStyle("contact")}>Contact</a></li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#141515] border-t border-gray-800 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg">
            <li><a href="#home" onClick={() => setOpen(false)} className={linkStyle("home")}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)} className={linkStyle("about")}>About</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)} className={linkStyle("skills")}>Skills</a></li>
            <li><a href="#portfolio" onClick={() => setOpen(false)} className={linkStyle("portfolio")}>Portfolio</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className={linkStyle("contact")}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

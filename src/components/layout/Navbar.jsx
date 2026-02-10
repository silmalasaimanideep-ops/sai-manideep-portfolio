import { useEffect, useState } from "react";
import { User } from "lucide-react";


const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "portfolio", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (id) =>
    `transition font-medium ${
      active === id
        ? "text-primary"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#141515] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide text-white flex items-center gap-2">
  <User size={20} className="text-primary" />
  Sai Manideep
</h1>


        <ul className="flex gap-8">
          <li><a href="#home" className={linkStyle("home")}>Home</a></li>
          <li><a href="#about" className={linkStyle("about")}>About</a></li>
          <li><a href="#skills" className={linkStyle("skills")}>Skills</a></li>
          <li><a href="#portfolio" className={linkStyle("portfolio")}>Portfolio</a></li>
          <li><a href="#contact" className={linkStyle("contact")}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

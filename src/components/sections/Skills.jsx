import SectionTitle from "../ui/SectionTitle";
import {Atom,Braces,FileCode,Palette,Wind,GitBranch,Github,Monitor} from "lucide-react";

function Skills() {
  const skills = [
    { name: "React", icon: Atom },
    { name: "JavaScript", icon: Braces },
    { name: "HTML", icon: FileCode },
    { name: "CSS", icon: Palette },
    { name: "Tailwind", icon: Wind },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "Responsive Design", icon: Monitor },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Skills" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="
                  bg-[#16181d] border border-gray-800 
                  p-4 sm:p-6 
                  rounded-xl text-center
                  hover:border-primary hover:-translate-y-1 sm:hover:-translate-y-2
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
                  transition duration-300
                "
              >
                <Icon
                  className="mx-auto mb-2 sm:mb-3 text-primary"
                  size={24}
                />
                <p className="text-sm sm:text-base font-medium">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;

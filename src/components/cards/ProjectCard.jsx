import { useState } from "react";
import { ExternalLink, X, Github } from "lucide-react";

const ProjectCard = ({ title, image, demoLink, github, tech, features }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        className="
          bg-[#161717]
          rounded-xl
          p-4
          border border-gray-800
          hover:border-primary
          hover:-translate-y-2
          hover:shadow-lg
          transition
        "
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-lg mb-4 w-full h-44 object-cover"
          />
        )}

        <h3 className="text-lg font-semibold">{title}</h3>

        {/* TECH BADGES */}
        {tech && (
          <div className="flex flex-wrap gap-2 mt-2 mb-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="
                  border border-gray-700
                  px-3 py-1
                  rounded-full
                  text-xs
                  text-gray-300
                "
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* FEATURES */}
        {features && (
          <ul className="text-gray-400 text-sm mt-2 list-disc ml-4 space-y-1">
            {features.slice(0, 2).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}

        {/* BUTTONS */}
        <div className="flex items-center gap-2 mt-4 flex-nowrap overflow-x-auto">


          <button
            onClick={() => setOpen(true)}
            className="text-sm text-primary hover:underline"
          >
            Details →
          </button>

          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center text-sm bg-gray-800 px-4 py-2 rounded hover:bg-primary hover:text-black transition"
          >
            Live Demo<ExternalLink size={16} />
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center text-sm bg-gray-800 px-4 py-2 rounded hover:bg-primary hover:text-black transition"
            >
              GitHub <Github size={16} />
            </a>
          )}
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          
          <div
            className="
              bg-[#141515]
              w-full
              max-w-md sm:max-w-lg md:max-w-2xl
              rounded-xl
              p-5 sm:p-6 md:p-8
              border border-gray-800
              relative
              max-h-[90vh]
              overflow-y-auto
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>

            {image && (
              <img
                src={image}
                alt={title}
                className="rounded-lg mb-4 w-full"
              />
            )}

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              {title}
            </h2>

            {tech && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="border border-gray-700 px-3 py-1 rounded-full text-xs text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {features && (
              <ul className="text-gray-400 text-sm list-disc ml-5 space-y-1 mb-5">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            )}

            {/* BUTTONS — SINGLE ROW ON MOBILE */}
            <div className="flex gap-3 flex-nowrap overflow-x-auto">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap flex gap-1 items-center text-sm bg-gray-800 px-4 py-2 rounded hover:bg-primary hover:text-black transition"
              >
                Live Demo <ExternalLink size={16} />
              </a>

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap flex gap-1 items-center text-sm bg-gray-800 px-4 py-2 rounded hover:bg-primary hover:text-black transition"
                >
                  GitHub <Github size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;

import { useState } from "react";
import Tabs from "../components/ui/Tabs";
import ProjectCard from "../components/cards/ProjectCard";
import CertificateCard from "../components/cards/CertificateCard";
import ServiceCard from "../components/cards/ServiceCard";
import SectionTitle from "../components/ui/SectionTitle";


import projects from "../data/projects";
import certificates from "../data/certificates";
import services from "../data/service";

const Portfolio = () => {
  const [active, setActive] = useState("Projects");

  return (
    <section>
      <SectionTitle
  title="Featured Projects"
  subtitle="Explore my projects, certifications, and the services I can offer as a frontend developer."
/>
      <Tabs active={active} setActive={setActive} />

      <div
        className={`
          grid gap-8 mt-10
          grid-cols-1
          sm:grid-cols-2
          ${
            active === "Certificates"
              ? "lg:grid-cols-3"
              : "lg:grid-cols-3"
          }
        `}
      >
        {/* PROJECTS */}
        {active === "Projects" &&
          projects.map((p) => <ProjectCard key={p.id} {...p} />)}

        {/* CERTIFICATES */}
        {active === "Certificates" &&
          certificates.map((c, i) => (
            <CertificateCard key={i} {...c} />
          ))}

        {/* SERVICES */}
        {active === "Services" && (
          <>
            <h3 className="text-xl text-center text-gray-300 mb-6 col-span-full">
              What I Can Do
            </h3>

            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}

            <div className="col-span-full text-center mt-12">
              <p className="text-gray-400 mb-4">
                Interested in working together?
              </p>

              <a
                href="#contact"
                className="bg-primary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Contact Me
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

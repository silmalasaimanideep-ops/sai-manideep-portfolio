import SectionTitle from "../ui/SectionTitle";
import { Mail, Linkedin, Github, Send } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-28 px-4 sm:px-6 text-center border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="Let's Connect"
          subtitle="Open to internships, freelance work and collaboration."
        />

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-10">

          <a
            href="mailto:saimanideepsilmala@gmail.com"
            className="bg-[#16181d] border border-gray-800 p-5 sm:p-6 rounded-xl 
            hover:border-primary hover:-translate-y-1 sm:hover:-translate-y-2
            hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
            transition"
          >
            <Mail className="mx-auto text-primary mb-3" size={24} />
            <h3 className="font-semibold text-base sm:text-lg">Email</h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 break-all">
              saimanideepsilmala@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/sai-manideep-silmala-530100249"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16181d] border border-gray-800 p-5 sm:p-6 rounded-xl 
            hover:border-primary hover:-translate-y-1 sm:hover:-translate-y-2
            hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
            transition"
          >
            <Linkedin className="mx-auto text-primary mb-3" size={24} />
            <h3 className="font-semibold text-base sm:text-lg">LinkedIn</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Connect with me</p>
          </a>

          <a
            href="https://github.com/silmalasaimanideep-ops"
            target="_blank"
            rel="noreferrer"
            className="bg-[#16181d] border border-gray-800 p-5 sm:p-6 rounded-xl 
            hover:border-primary hover:-translate-y-1 sm:hover:-translate-y-2
            hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
            transition"
          >
            <Github className="mx-auto text-primary mb-3" size={24} />
            <h3 className="font-semibold text-base sm:text-lg">GitHub</h3>
            <p className="text-gray-400 text-xs sm:text-sm">View my work</p>
          </a>
        </div>

        <a
          href="mailto:saimanideepsilmala@gmail.com"
          className="mt-10 inline-flex items-center gap-2 
          text-sm sm:text-base
          bg-gradient-to-r from-blue-500 to-cyan-500 
          px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold 
          hover:scale-105 transition shadow-lg"
        >
          <Send size={18} />
          Send Message
        </a>
      </div>
    </section>
  );
}

export default Contact;

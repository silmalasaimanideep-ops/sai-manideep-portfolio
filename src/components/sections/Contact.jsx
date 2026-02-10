import SectionTitle from "../ui/SectionTitle";
import { Mail, Linkedin, Github, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-28 px-6 text-center border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle
          title="Let's Connect"
          subtitle="Open to internships, freelance work and collaboration."
        />
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          <a
            href="mailto:saimanideepsilmala@gmail.com"
            className="bg-[#16181d] border border-gray-800 p-6 rounded-xl 
            hover:border-primary hover:-translate-y-2 
            hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
            transition"
          >
            <Mail className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-400 text-sm mt-1">
              saimanideepsilmala@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/sai-manideep-silmala-530100249"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16181d] border border-gray-800 p-6 rounded-xl 
            hover:border-primary hover:-translate-y-2 
            hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
            transition"
          >

            <Linkedin className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Connect with me</p>
          </a>

          <a
            href="https://github.com/silmalasaimanideep-ops"
            target="_blank"
            rel="noreferrer"
            className="bg-[#16181d] border border-gray-800 p-6 rounded-xl 
            hover:border-primary hover:-translate-y-2 
            hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
            transition"
          >
            <Github className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-semibold">GitHub</h3>
            <p className="text-gray-400 text-sm">View my work</p>
          </a>
        </div>

        <a
          href="mailto:saimanideepsilmala@gmail.com"
          className="mt-10 inline-flex items-center gap-2 
          bg-gradient-to-r from-blue-500 to-cyan-500 
          px-6 py-3 rounded-lg font-semibold 
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

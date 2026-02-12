function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* CARD */}
        <div className="bg-[#161717] border border-gray-800 rounded-2xl p-8 
          hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition">
          <div className="flex items-center gap-5 mb-6">
            <img
              src="profile/profile.jpeg"
              alt="profile"
              className="w-18 h-18 object-cover rounded-full border-2 border-primary"
            />

            <div>
              <h3 className="text-xl font-semibold">Sai Manideep</h3>
              <p className="text-gray-400 text-sm">Frontend Developer (React)</p>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">Location</span>
              <span>Hyderabad, India</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">Education</span>
              <span>B.Tech (CSE)</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Focus</span>
              <span>Frontend Development</span>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-6 leading-relaxed">
            I specialize in building responsive interfaces using React,
            Tailwind and modern frontend tools.
          </p>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>

          <p className="text-gray-400 leading-relaxed mb-4 max-w-xl">
            I'm a frontend developer focused on building clean, responsive
            and high-performance web interfaces using React and modern UI tools.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4 max-w-xl">
            I enjoy transforming ideas into real products and continuously
            improving through hands-on project building.
          </p>

          <div className="mt-6">
            <span className="text-xs tracking-wider text-gray-500">STATUS</span>
            <p className="text-primary font-semibold">
              Open to internships & frontend roles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
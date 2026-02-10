function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sai Manideep
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-2">
            React Frontend Developer
          </p>

          {/* STATUS BADGE */}
          <p className="inline-block px-3 py-1 mb-4 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
            ● Open to Internships & Frontend Roles
          </p>

          <p className="text-gray-400 max-w-xl mb-6">
            I build fast, modern and responsive web applications using React,
            JavaScript and modern UI technologies with a strong focus on
            performance and user experience.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="#portfolio"
              className="bg-primary px-6 py-3 rounded-lg font-semibold 
              hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
              transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-700 
              hover:border-primary hover:text-primary hover:bg-primary/5 transition"
            >
              Contact Me
            </a>

            <a
              href="public/Sai_Manideep_Resume.pdf"
              download
              className="px-6 py-3 rounded-lg border border-gray-700 
              hover:border-primary hover:bg-primary/5 transition"
            >
              View Resume
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Clean UI • Performance • Real-world projects
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="profile/profile.jpeg"
            alt="profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-primary 
            shadow-[0_0_25px_rgba(59,130,246,0.35)]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;


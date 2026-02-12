function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 pt-25"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h1 className="
            font-bold tracking-tight leading-tight mb-4
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          ">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sai Manideep
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-2">
            React Frontend Developer
          </p>

          {/* STATUS BADGE */}
          <p className="
            inline-block
            px-3 py-1 mb-4
            text-[11px] sm:text-xs
            rounded-full
            bg-green-500/10 text-green-400
            border border-green-500/20
          ">
            ● Open to Internships & Frontend Roles
          </p>

          <p className="
            text-sm sm:text-base text-gray-400
            max-w-xl mb-6
            mx-auto md:mx-0
          ">
            I build fast, modern and responsive web applications using React,
            JavaScript and modern UI technologies with a strong focus on
            performance and user experience.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start justify-center md:justify-start">
            <a
              href="#portfolio"
              className="w-full sm:w-auto text-center
              bg-primary px-6 py-3 rounded-lg font-semibold
              hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
              transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto text-center
              px-6 py-3 rounded-lg border border-gray-700
              hover:border-primary hover:text-primary hover:bg-primary/5 transition"
            >
              Contact Me
            </a>

            <a
              href="/Sai_Manideep_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center
              px-6 py-3 rounded-lg border border-gray-700
              hover:border-primary hover:bg-primary/5 transition"
            >
              View Resume
            </a>
          </div>


          <p className="text-gray-500 text-xs sm:text-sm mt-6">
            Clean UI • Performance • Real-world projects
          </p>
        </div>


        {/* RIGHT IMAGE */}
        <div className="flex justify-center mt-10 md:mt-0 mb-6 md:mb-0">
          <img
            src="profile/profile.jpeg"
            alt="profile"
            className="
            w-40 h-40
            sm:w-52 sm:h-52
            md:w-64 md:h-64
            lg:w-72 lg:h-72
            object-cover rounded-full
            border-4 border-primary
            shadow-[0_0_25px_rgba(59,130,246,0.35)]"
          />
        </div>


      </div>
    </section>
  );
}

export default Hero;


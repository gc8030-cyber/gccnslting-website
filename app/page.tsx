export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#0f172a] overflow-hidden">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="GC Consulting"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[#0f172a]">
                GC CONSULTING
              </h1>

              <p className="text-sm text-gray-500">
                Clinical Research. Data. Technology.
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#home"
              className="text-[#d89d33] border-b-2 border-[#d89d33] pb-1"
            >
              Home
            </a>

            <a href="#about" className="hover:text-[#008b84] transition">
              About
            </a>

            <a href="#services" className="hover:text-[#008b84] transition">
              Services
            </a>

            <a href="#platforms" className="hover:text-[#008b84] transition">
              Platforms
            </a>

            <a href="#contact" className="hover:text-[#008b84] transition">
              Contact
            </a>
          </nav>

          <a
            href="mailto:gc@gccnslting.com"
            className="bg-[#008b84] hover:bg-[#00736d] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg transition inline-block"
          >
            Get In Touch
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative max-w-7xl mx-auto px-6 pt-24 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#008b84] font-semibold mb-5">
              Clinical Research & Healthcare Technology
            </p>

            <h2 className="text-6xl leading-tight font-bold tracking-tight text-[#10233d]">
              Transforming Healthcare Through
              <span className="text-[#008b84]"> Data</span>,
              <span className="text-[#d89d33]"> Technology</span>
              & Clinical Excellence
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">
              GC Consulting provides strategic consulting and healthcare
              technology solutions for clinical research organizations,
              healthcare companies, decentralized clinical operations, and
              digital health ecosystems.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#services"
                className="bg-[#008b84] hover:bg-[#00736d] text-white px-8 py-4 rounded-full font-medium shadow-lg transition"
              >
                Explore Our Services
              </a>

              <a
                href="#contact"
                className="border border-[#008b84] text-[#008b84] hover:bg-[#008b84] hover:text-white px-8 py-4 rounded-full font-medium transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#008b84]/20 to-[#d89d33]/10 blur-3xl rounded-full"></div>

            <div className="relative bg-white rounded-[40px] p-10 shadow-2xl border border-gray-100">
              <img
                src="/logo.png"
                alt="GC Consulting"
                className="w-[420px] max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#008b84] font-semibold mb-4">
              About GC Consulting
            </p>

            <h3 className="text-5xl font-bold leading-tight text-[#10233d]">
              Expertise That Drives
              <span className="text-[#d89d33]"> Better Outcomes</span>
            </h3>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              We partner with healthcare organizations, clinical research
              companies, biotechnology initiatives, and digital health teams to
              accelerate innovation, improve operational efficiency, and build
              scalable healthcare technology ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Clinical Expertise",
                text: "Deep understanding of clinical research and healthcare operations.",
              },
              {
                title: "Data Excellence",
                text: "Focused on data integrity, operational quality, and process optimization.",
              },
              {
                title: "Digital Innovation",
                text: "Building scalable healthcare IT and eClinical solutions.",
              },
              {
                title: "Global Perspective",
                text: "Solutions designed for global healthcare environments and compliance needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#f8f7f4] rounded-3xl p-8 border border-gray-100 shadow-sm"
              >
                <h4 className="text-2xl font-semibold text-[#10233d]">
                  {item.title}
                </h4>

                <p className="mt-4 text-gray-600 leading-7 text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-sm text-[#008b84] font-semibold mb-4">
              Our Services
            </p>

            <h3 className="text-5xl font-bold leading-tight text-[#10233d]">
              Comprehensive Solutions for Modern Healthcare
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "Clinical Research Consulting",
                text: "Support for clinical development, study operations, and healthcare workflows.",
              },

              {
                title: "Clinical Data Management",
                text: "Data management consulting, CDISC standards, quality control, and reporting support.",
              },

              {
                title: "Healthcare IT Solutions",
                text: "Custom healthcare IT systems designed to streamline workflows and improve efficiency.",
              },

              {
                title: "eClinical Suite Development",
                text: "Designing scalable eClinical and healthcare technology platforms.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#008b84] to-[#00a59d] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  •
                </div>

                <h4 className="mt-8 text-2xl font-semibold leading-tight text-[#10233d]">
                  {item.title}
                </h4>

                <p className="mt-5 text-gray-600 leading-7 text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#007f79] to-[#005e5a] py-14 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          {[
            ["20+", "Years of Experience"],
            ["100+", "Projects Delivered"],
            ["40+", "Countries Supported"],
            ["100%", "Client Commitment"],
          ].map(([num, text]) => (
            <div key={text}>
              <h3 className="text-5xl font-bold">{num}</h3>

              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/80">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="platforms" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-sm text-[#008b84] font-semibold mb-4">
              Our Platforms
            </p>

            <h3 className="text-5xl font-bold leading-tight text-[#10233d]">
              Building Platforms for a Healthier Future
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-[#f8f7f4] rounded-[35px] p-10 border border-gray-100 shadow-lg">
              <h4 className="text-3xl font-bold text-[#008b84]">
                QuitMate
              </h4>

              <p className="mt-6 text-gray-600 leading-8">
                A wellness-focused digital platform designed to support
                healthier habits, lifestyle improvement, and long-term personal
                wellness journeys.
              </p>
            </div>

            <div className="bg-[#fffaf2] rounded-[35px] p-10 border border-[#f3dfb4] shadow-lg">
              <h4 className="text-3xl font-bold text-[#d89d33]">
                Healthcare Technology Platforms
              </h4>

              <p className="mt-6 text-gray-600 leading-8">
                Next-generation healthcare technology and eClinical solutions
                currently under development to support modern clinical
                operations and digital healthcare ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#0d3b39] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-bold leading-tight">
            Let's Build The Future of Healthcare Together
          </h3>

          <p className="mt-8 text-lg text-white/80 leading-8 max-w-3xl mx-auto">
            Have a project in mind or want to explore healthcare consulting,
            clinical operations, or healthcare technology collaboration?
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="text-xl font-semibold">GC Consulting</h4>

              <p className="mt-4 text-white/70 leading-7 text-sm">
                Driving innovation and operational excellence through healthcare
                consulting and digital technology solutions.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Contact Us</h4>

              <p className="mt-4 text-white/70 text-sm leading-7">
                gc@gccnslting.com
                <br />
                +91 8511048026
                <br />
                India
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Core Areas</h4>

              <p className="mt-4 text-white/70 text-sm leading-7">
                Clinical Research Consulting
                <br />
                Clinical Data Management
                <br />
                Healthcare IT
                <br />
                eClinical Platforms
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-white/60 text-sm text-center">
            <div className="flex justify-center gap-6 mb-4">
              <a
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="hover:text-white transition"
              >
                Terms & Conditions
              </a>
            </div>

            <div>
              © 2026 GC Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
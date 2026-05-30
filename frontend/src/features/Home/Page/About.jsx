import React from "react";
import aki from "../../../../src/assets/Aki.png"
 const About = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/10 blur-[220px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Hero Section */}
        <div className="text-center">

          <h1 className="text-7xl md:text-8xl font-thin tracking-[0.35em] text-[#D4AF37]">
            AKIRA
          </h1>

          <p className="mt-6 text-gray-400 text-lg tracking-wide">
            Intelligence Beyond Search
          </p>

        </div>

        {/* Mission */}
        <section className="mt-32 text-center max-w-4xl mx-auto">

          <h2 className="text-4xl font-light mb-8">
            Our Mission
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            AKIRA is designed to redefine the way people interact with
            knowledge. Instead of navigating endless links, users receive
            intelligent, contextual and meaningful answers instantly.
          </p>

        </section>

        {/* Vision + Philosophy */}
        <section className="mt-24 grid md:grid-cols-2 gap-8">

          <div className="bg-[#111111]/60 backdrop-blur-xl border border-[#222] rounded-3xl p-8">

            <h3 className="text-2xl text-[#D4AF37] mb-4">
              Vision
            </h3>

            <p className="text-gray-400 leading-7">
              To create an AI-native platform that empowers people to
              learn, research and make decisions with confidence.
            </p>

          </div>

          <div className="bg-[#111111]/60 backdrop-blur-xl border border-[#222] rounded-3xl p-8">

            <h3 className="text-2xl text-[#D4AF37] mb-4">
              Philosophy
            </h3>

            <p className="text-gray-400 leading-7">
              Quiet Intelligence. Elegant Design. Powerful Answers.
              Every interaction should feel effortless and natural.
            </p>

          </div>

        </section>

        {/* Features */}
        <section className="mt-24">

          <h2 className="text-center text-4xl font-light mb-14">
            What Makes AKIRA Different
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#111111]/60 border border-[#222] rounded-3xl p-8 hover:border-[#D4AF37]/30 transition">

              <h3 className="text-[#D4AF37] text-xl mb-4">
                AI Conversations
              </h3>

              <p className="text-gray-400">
                Ask complex questions and receive contextual,
                intelligent responses.
              </p>

            </div>

            <div className="bg-[#111111]/60 border border-[#222] rounded-3xl p-8 hover:border-[#D4AF37]/30 transition">

              <h3 className="text-[#D4AF37] text-xl mb-4">
                Research Focused
              </h3>

              <p className="text-gray-400">
                Built for deep understanding rather than simple searching.
              </p>

            </div>

            <div className="bg-[#111111]/60 border border-[#222] rounded-3xl p-8 hover:border-[#D4AF37]/30 transition">

              <h3 className="text-[#D4AF37] text-xl mb-4">
                Premium Experience
              </h3>

              <p className="text-gray-400">
                Crafted with elegance, performance and intelligence.
              </p>

            </div>

          </div>

        </section>

        {/* Founder Section */}
        <section className="mt-32">

          <h2 className="text-center text-4xl font-light mb-14">
            Founder
          </h2>

          <div className="bg-[#111111]/60 backdrop-blur-xl border border-[#222] rounded-[40px] p-8 md:p-14">

            <div className="grid md:grid-cols-2 gap-14 items-center">

              {/* Image */}
              <div className="flex justify-center">

                <div className="relative">

                  {/* Gold Glow */}
                  <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[80px] rounded-full" />

                  <img
                    src={aki}
                    alt="Akshat Soni"
                    className="
                      relative
                      w-[320px]
                      h-[420px]
                      object-cover
                      rounded-[30px]
                      border
                      border-[#D4AF37]/20
                      shadow-[0_0_40px_rgba(212,175,55,0.08)]
                    "
                  />

                </div>

              </div>

              {/* Content */}
              <div>

                <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-sm">
                  Creator
                </p>

                <h3 className="text-5xl font-light mt-4">
                  Akshat Soni
                </h3>

                <p className="mt-6 text-gray-400 leading-8">
                  Full Stack Developer passionate about building
                  intelligent systems, scalable architectures and
                  next-generation AI experiences.
                </p>

                <p className="mt-6 text-gray-400 leading-8">
                  AKIRA began as a vision to create a platform where
                  artificial intelligence feels natural, elegant and
                  genuinely useful.
                </p>

                <div className="mt-10 p-6 border border-[#D4AF37]/20 rounded-2xl bg-[#0A0A0A]">

                  <p className="text-[#D4AF37] italic text-lg">
                    "The future belongs to intelligent systems that
                    understand humans, not just commands."
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Footer */}
        <section className="mt-24 text-center">

          <div className="w-24 h-px bg-[#D4AF37]/30 mx-auto mb-8" />

          <p className="text-gray-500">
            © 2026 AKIRA. Built with intelligence and ambition.
          </p>

        </section>

      </div>
    </div>
  );
};

export default About;
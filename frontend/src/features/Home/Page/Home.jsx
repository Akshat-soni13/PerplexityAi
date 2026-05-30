import React, { useEffect } from "react";
import {
  Search,
  Sparkles,
  BrainCircuit,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Globe,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useChat } from "../../chat/Hooks/useChat";



const Home = () => {

  const chat = useChat()

  const {user} = useSelector(state=> state.auth)
  
  useEffect(()=>{
    chat.initialzeSocketConnection()
  },[])

  console.log(user)

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/10 blur-[220px] rounded-full" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6 border-b border-[#1E1E1E] backdrop-blur-xl">

        <div className="flex items-center gap-4">

          <div className="
            w-12 h-12 rounded-2xl
            bg-[#111111]
            border border-[#2B2B2B]
            flex items-center justify-center
            shadow-[0_0_25px_rgba(212,175,55,0.15)]
          ">
            <span className="text-[#D4AF37] text-2xl font-bold">
              A
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-[0.3em]">
              AKIRA
            </h1>

            <p className="text-xs text-[#D4AF37] tracking-[0.25em]">
              AI OPERATING SYSTEM
            </p>
          </div>

        </div>

        <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">

          <button className="hover:text-[#D4AF37] transition">
            Features
          </button>

          <button className="hover:text-[#D4AF37] transition">
            Technology
          </button>

          <button className="hover:text-[#D4AF37] transition">
            About
          </button>

        </div>

        <button
          className="
            px-6 py-3 rounded-xl
            bg-gradient-to-r
            from-[#B8860B]
            via-[#D4AF37]
            to-[#F5D76E]
            text-black font-bold
            hover:scale-105 transition
          "
        >
          Launch
        </button>

      </nav>

      {/* Hero */}
      <section className="relative z-10 px-8 md:px-16 pt-24 pb-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>

            <div className="
              inline-flex items-center gap-2
              px-4 py-2 rounded-full
              border border-[#2A2A2A]
              bg-[#111111]/70
              text-[#D4AF37]
              text-sm
              mb-8
            ">
              <Sparkles size={16} />
              Next Generation Intelligence
            </div>

            <h1 className="
              text-5xl md:text-7xl
              font-black
              leading-tight
            ">
              Beyond
              <span className="text-[#D4AF37]">
                {" "}Search
              </span>
              <br />
              Into Intelligence
            </h1>

            <p className="
              text-gray-400
              text-lg
              mt-8
              leading-relaxed
              max-w-xl
            ">
              AKIRA is an AI-powered operating intelligence system
              that understands, automates, creates and evolves
              with you.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button
                className="
                  px-8 py-4 rounded-2xl
                  bg-gradient-to-r
                  from-[#B8860B]
                  via-[#D4AF37]
                  to-[#F5D76E]
                  text-black font-bold
                  flex items-center gap-2
                  hover:scale-105 transition
                "
              >
                Enter AKIRA
                <ArrowRight size={18} />
              </button>

              <button
                className="
                  px-8 py-4 rounded-2xl
                  border border-[#2A2A2A]
                  bg-[#111111]/80
                  hover:border-[#D4AF37]
                  transition
                "
              >
                Watch Demo
              </button>

            </div>

          </div>

          {/* Right */}
          <div className="relative">

            <div className="
              absolute inset-0
              bg-[#D4AF37]/10
              blur-[120px]
              rounded-full
            " />

            <div className="
              relative
              bg-[#111111]/80
              border border-[#2B2B2B]
              rounded-[40px]
              p-8
              backdrop-blur-2xl
              shadow-[0_0_60px_rgba(212,175,55,0.08)]
            ">

              {/* Search Bar */}
              <div className="
                flex items-center gap-4
                bg-black
                border border-[#2A2A2A]
                rounded-2xl
                px-5 py-4
              ">

                <Search className="text-[#D4AF37]" />

                <input
                  type="text"
                  placeholder="Ask AKIRA anything..."
                  className="
                    bg-transparent
                    flex-1
                    outline-none
                    text-white
                    placeholder:text-gray-500
                  "
                />

              </div>

              {/* AI Response */}
              <div className="mt-8 space-y-5">

                <div className="
                  p-5 rounded-2xl
                  bg-[#0C0C0C]
                  border border-[#1F1F1F]
                ">
                  <p className="text-[#D4AF37] text-sm mb-2">
                    AI ANALYSIS
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    Building intelligent systems with real-time
                    contextual understanding and autonomous execution.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="
                    p-5 rounded-2xl
                    border border-[#1F1F1F]
                    bg-[#0D0D0D]
                  ">
                    <BrainCircuit className="text-[#D4AF37] mb-4" />

                    <h3 className="font-semibold">
                      Neural AI
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      Human-like intelligence engine
                    </p>
                  </div>

                  <div className="
                    p-5 rounded-2xl
                    border border-[#1F1F1F]
                    bg-[#0D0D0D]
                  ">
                    <Cpu className="text-[#D4AF37] mb-4" />

                    <h3 className="font-semibold">
                      Automation
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      Execute complex workflows
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="px-8 md:px-16 pb-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="
            bg-[#101010]
            border border-[#1F1F1F]
            rounded-3xl
            p-8
            hover:border-[#D4AF37]
            transition
          ">

            <ShieldCheck className="text-[#D4AF37] mb-5" />

            <h3 className="text-2xl font-bold">
              Secure Intelligence
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Enterprise-grade architecture with intelligent
              protection systems.
            </p>

          </div>

          <div className="
            bg-[#101010]
            border border-[#1F1F1F]
            rounded-3xl
            p-8
            hover:border-[#D4AF37]
            transition
          ">

            <Globe className="text-[#D4AF37] mb-5" />

            <h3 className="text-2xl font-bold">
              Connected Ecosystem
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Unified intelligence connected across your
              digital world.
            </p>

          </div>

          <div className="
            bg-[#101010]
            border border-[#1F1F1F]
            rounded-3xl
            p-8
            hover:border-[#D4AF37]
            transition
          ">

            <Sparkles className="text-[#D4AF37] mb-5" />

            <h3 className="text-2xl font-bold">
              Adaptive Learning
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              AKIRA evolves continuously based on your
              behavior and workflow.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;
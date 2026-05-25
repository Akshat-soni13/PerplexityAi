import React from "react";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import EnergyTrailSnake from "../../../global/component/EnergyTrailSnake.jsx";

const Register = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* Animated Background */}
      <EnergyTrailSnake />

      {/* Gold Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[180px] rounded-full z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">

        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-2xl animate-pulse" />

              <div className="relative w-28 h-28 rounded-full border border-[#D4AF37]/40 bg-[#111111]/80 backdrop-blur-xl flex items-center justify-center">
                <h1 className="text-[#D4AF37] text-5xl font-bold">
                  A
                </h1>
              </div>
            </div>
          </div>

          {/* Brand */}
          <div className="text-center mb-8">
            <h1 className="text-white text-5xl font-bold tracking-[0.3em]">
              AKIRA
            </h1>

            <p className="text-[#D4AF37] mt-3 text-sm tracking-widest uppercase">
              Create Your Account
            </p>
          </div>

          {/* Register Card */}
          <div
            className="
              bg-[#141414]/85
              backdrop-blur-2xl
              border
              border-[#2A2A2A]
              rounded-3xl
              p-8
              shadow-[0_0_50px_rgba(212,175,55,0.08)]
            "
          >
            <h2 className="text-white text-2xl font-semibold text-center">
              Join AKIRA
            </h2>

            <p className="text-gray-400 text-center mt-2 mb-8">
              Start your AI journey
            </p>

            {/* Username */}
            <div className="relative mb-4">
              <User
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              />

              <input
                type="text"
                placeholder="Username"
                className="
                  w-full
                  bg-[#0D0D0D]
                  border
                  border-[#2A2A2A]
                  rounded-xl
                  py-3
                  pl-12
                  pr-4
                  text-white
                  outline-none
                  focus:border-[#D4AF37]
                  focus:shadow-[0_0_20px_rgba(212,175,55,0.25)]
                  transition
                "
              />
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <Mail
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  bg-[#0D0D0D]
                  border
                  border-[#2A2A2A]
                  rounded-xl
                  py-3
                  pl-12
                  pr-4
                  text-white
                  outline-none
                  focus:border-[#D4AF37]
                  focus:shadow-[0_0_20px_rgba(212,175,55,0.25)]
                  transition
                "
              />
            </div>

            {/* Password */}
            <div className="relative mb-6">
              <Lock
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              />

              <input
                type="password"
                placeholder="Password"
                className="
                  w-full
                  bg-[#0D0D0D]
                  border
                  border-[#2A2A2A]
                  rounded-xl
                  py-3
                  pl-12
                  pr-4
                  text-white
                  outline-none
                  focus:border-[#D4AF37]
                  focus:shadow-[0_0_20px_rgba(212,175,55,0.25)]
                  transition
                "
              />
            </div>

            {/* Register Button */}
            <button
              className="
                w-full
                bg-gradient-to-r
                from-[#B8860B]
                via-[#D4AF37]
                to-[#F5D76E]
                text-black
                font-bold
                py-3
                rounded-xl
                hover:scale-[1.02]
                transition
                flex
                items-center
                justify-center
                gap-2
              "
            >
              Create Account
              <ArrowRight size={18} />
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-400 mt-6 text-sm">
              Already have an account?

              <Link
                to="/login"
                className="
                  text-[#D4AF37]
                  ml-2
                  hover:text-[#F5D76E]
                  transition
                "
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
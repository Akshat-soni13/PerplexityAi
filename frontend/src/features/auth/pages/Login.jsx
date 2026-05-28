import React, { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import EnergyTrailSnake from "../../../global/component/EnergyTrailSnake.jsx";
import { useAuth } from "../hook/useAuth.js";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  

  const { handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(state=> state.auth.user)
  const loading = useSelector(state=> state.auth.loading)




  const submitForm = async (e) => {

    e.preventDefault();
    
      if (!email || !password) {
         toast.error("Please fill all fields");
         return;
      }

    try {

      const payload = {
        email,password
      }

       await handleLogin({
    email,
    password,
  });

      toast.success("Login Successful");
      navigate("/");

    } catch (error) {

      toast.error("Invalid Credentials");
      console.log(error);

    }
  };

  if(!loading && user)
  {
    return <Navigate to="/" replace></Navigate>
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* Animated Snake Background */}
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
              Intelligence Beyond Search
            </p>

          </div>

          {/* Login Card */}
          <form
            onSubmit={submitForm}
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
              Welcome Back
            </h2>

            <p className="text-gray-400 text-center mt-2 mb-8">
              Sign in to continue
            </p>

            {/* Email */}
            <div className="relative mb-5">

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            {/* Login Button */}
            <button
              type="submit"
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
              Continue
              <ArrowRight size={18} />
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">

              <div className="flex-1 h-px bg-[#2A2A2A]" />

              <span className="px-4 text-gray-500 text-sm">
                OR
              </span>

              <div className="flex-1 h-px bg-[#2A2A2A]" />

            </div>

            {/* Google */}
            <button
              type="button"
              className="
                w-full
                border
                border-[#2A2A2A]
                rounded-xl
                py-3
                text-white
                hover:border-[#D4AF37]
                hover:bg-[#1A1A1A]
                transition
              "
            >
              Continue with Google
            </button>

            {/* Register */}
            <p className="text-center text-gray-400 mt-6 text-sm">

              Don't have an account?

              <Link
                to="/register"
                className="
                  text-[#D4AF37]
                  ml-2
                  hover:text-[#F5D76E]
                  transition
                "
              >
                Register
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;
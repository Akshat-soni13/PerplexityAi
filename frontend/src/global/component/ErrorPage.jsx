import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[200px] rounded-full" />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight - 100,
            ],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
          }}
        />
      ))}

      <div className="relative z-10 text-center">

        <h1 className="text-[10rem] font-thin text-[#D4AF37] tracking-widest">
          404
        </h1>

        <h2 className="text-white text-3xl font-light tracking-[0.3em] uppercase">
          Signal Lost
        </h2>

        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          AKIRA could not locate the requested destination.
        </p>

        <Link
          to="/"
          className="
            inline-block
            mt-10
            px-8
            py-3
            rounded-xl
            border
            border-[#D4AF37]/30
            text-[#D4AF37]
            hover:bg-[#D4AF37]
            hover:text-black
            transition-all
          "
        >
          Return Home
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;



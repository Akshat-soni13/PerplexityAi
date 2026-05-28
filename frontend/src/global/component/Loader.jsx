import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const loadingSteps = [
  "INITIALIZING CORE",
  "NEURAL SYSTEMS ONLINE",
  "COGNITION ACTIVE",
  "AKIRA LOADED",
];

const AkiraLoader = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < loadingSteps.length - 1) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 1800);

      return () => clearTimeout(timer);
    }

    const finalTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2200);

    return () => clearTimeout(finalTimer);
  }, [step, onComplete]);

  return (
    <div className="fixed inset-0 bg-[#030303] overflow-hidden flex items-center justify-center">

      {/* Ambient Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[200px]
        "
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">

        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="
              absolute
              w-[2px]
              h-[2px]
              rounded-full
              bg-[#D4AF37]
            "
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight - 180,
              ],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

      </div>

      {/* Main Core */}
      <div className="relative flex flex-col items-center">

        {/* Rotating Rings */}
        <div className="relative flex items-center justify-center">

          {/* Outer Ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-64
              h-64
              rounded-full
              border
              border-[#D4AF37]/10
            "
          />

          {/* Middle Ring */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-44
              h-44
              rounded-full
              border
              border-[#D4AF37]/20
            "
          />

          {/* Inner Glow Ring */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              absolute
              w-28
              h-28
              rounded-full
              border
              border-[#D4AF37]/40
              shadow-[0_0_60px_rgba(212,175,55,0.35)]
            "
          />

          {/* Core */}
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              relative
              w-20
              h-20
              rounded-full
              bg-[#0D0D0D]
              border
              border-[#D4AF37]/30
              backdrop-blur-3xl
              flex
              items-center
              justify-center
            "
          >

            {/* Core Glow */}
            <motion.div
              animate={{
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                absolute
                inset-3
                rounded-full
                bg-[#D4AF37]/20
                blur-xl
              "
            />

            {/* AKIRA Symbol */}
            <motion.h1
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                relative
                text-[#D4AF37]
                text-3xl
                font-thin
                tracking-[0.15em]
              "
            >
              A
            </motion.h1>

          </motion.div>

        </div>

        {/* AKIRA Typography */}
        <AnimatePresence>

          {step >= 2 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.4,
              }}
              className="mt-20 text-center"
            >

              <motion.h1
                animate={{
                  textShadow: [
                    "0 0 10px rgba(212,175,55,0.15)",
                    "0 0 35px rgba(212,175,55,0.55)",
                    "0 0 10px rgba(212,175,55,0.15)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  text-[#D4AF37]
                  text-6xl
                  font-thin
                  tracking-[0.45em]
                "
              >
                AKIRA
              </motion.h1>

              <p
                className="
                  mt-5
                  text-[#D4AF37]/60
                  uppercase
                  tracking-[0.35em]
                  text-xs
                "
              >
                Intelligence Beyond Search
              </p>

            </motion.div>
          )}

        </AnimatePresence>

        {/* Status */}
        <motion.p
          key={step}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 0.8,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            absolute
            -bottom-28
            text-[#D4AF37]/60
            text-xs
            uppercase
            tracking-[0.35em]
          "
        >
          {loadingSteps[step]}
        </motion.p>

      </div>
    </div>
  );
};

export default AkiraLoader;
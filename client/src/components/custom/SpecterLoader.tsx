import { motion } from "framer-motion";
import {
  useState,
  useEffect,
} from "react";
import { Scale } from "lucide-react";

interface SpecterLoaderProps {
  title?: string;
  subtitle: string;
}

export default function SpecterLoader({
  title = "Pocket Specter",
  subtitle,
}: SpecterLoaderProps) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.length >= 3
          ? ""
          : prev + "."
      );
    }, 500);
    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/20 rounded-full"
            style={{
              left: `${
                Math.random() * 100
              }%`,
              top: `${
                Math.random() * 100
              }%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration:
                3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-16">
        {/* Abstract legal symbol loader */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Rotating hexagon frame */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}>
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full">
              <motion.path
                d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%">
                  <stop
                    offset="0%"
                    stopColor="#d97706"
                    stopOpacity="0.6"
                  />
                  <stop
                    offset="100%"
                    stopColor="#d97706"
                    stopOpacity="0.1"
                  />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Counter-rotating inner ring */}
          <motion.div
            className="absolute w-40 h-40"
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}>
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full">
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#d97706"
                strokeWidth="0.3"
                strokeDasharray="4 4"
                opacity="0.4"
              />
            </svg>
          </motion.div>

          {/* Center pillar with scales icon */}
          <motion.div
            className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-600/30 flex items-center justify-center"
            animate={{
              boxShadow: [
                "0 0 30px rgba(217, 119, 6, 0.2)",
                "0 0 50px rgba(217, 119, 6, 0.4)",
                "0 0 30px rgba(217, 119, 6, 0.2)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            {/* Law scales icon from lucide-react */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}>
              <Scale
                className="w-12 h-12 text-amber-500"
                strokeWidth={1.5}
              />
            </motion.div>

            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-amber-600/50" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-amber-600/50" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-amber-600/50" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-amber-600/50" />
          </motion.div>

          {/* Orbiting dots */}
          {[0, 90, 180, 270, 360].map(
            (angle, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2"
                animate={{
                  rotate: [
                    angle,
                    angle + 360,
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}>
                <motion.div
                  className="w-2 h-2 rounded-full bg-amber-500 absolute"
                  style={{
                    left: "100px",
                    top: "-4px",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [
                      0.4, 1, 0.4,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              </motion.div>
            )
          )}
        </div>

        {/* Text section */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="flex items-center gap-3"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}>
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-600/50" />
              <h1 className="text-3xl font-serif text-slate-100 tracking-wider">
                {title}
              </h1>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-600/50" />
            </motion.div>

            <motion.p
              className="text-amber-500/70 text-sm tracking-[0.2em] uppercase"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}>
              {subtitle}
              {dots}
            </motion.p>
          </div>

          {/* Progress indicator */}
          <div className="w-64 h-1 bg-slate-800/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-full"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.p
            className="text-slate-400 text-xs font-light max-w-md text-center leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.8 }}>
            Your trusted AI legal
            assistant is preparing to
            assist you with professional
            guidance
          </motion.p>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full bg-amber-600/40"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
}

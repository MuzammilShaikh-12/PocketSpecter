import { Variants } from "framer-motion";

export const userMessageVariants: Variants =
  {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.4,
      },
    },
  };

export const botMessageVariants: Variants =
  {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

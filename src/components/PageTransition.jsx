import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const transition = {
  duration: 0.2,
  ease: "easeInOut",
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

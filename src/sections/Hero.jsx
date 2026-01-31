import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(180deg, rgba(0,0,0,0.8), #0b0b0b)",
      }}
    >
      <div>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: "4.5rem" }}
        >
          Air Pollution in the United States
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ fontSize: "1.4rem", marginTop: "1rem" }}
        >
          A cinematic data story (2010–2023)
        </motion.p>
      </div>
    </motion.section>
  );
}

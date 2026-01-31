import { motion } from "framer-motion";

export default function FloatingData({ text, x, y, delay = 0, size = "1rem" }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -20, 0], opacity: [0, 1, 0.8] }}
      transition={{
        duration: 4 + Math.random() * 2, // random float duration
        repeat: Infinity,
        delay,
      }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        color: "#ff7b00",
        fontSize: size,
        fontWeight: "600",
        pointerEvents: "none", // does not block interactions
        textShadow: "0 0 10px rgba(255,123,0,0.6)",
      }}
    >
      {text}
    </motion.div>
  );
}

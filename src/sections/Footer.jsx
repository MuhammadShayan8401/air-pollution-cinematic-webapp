import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        background: "#0b0b0b",
        color: "#fff",
        padding: "3rem 2rem",
        textAlign: "center",
        borderTop: "1px solid #222",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginBottom: "1rem",
        }}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none", fontSize: "1.5rem" }}
        >
          🐦
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none", fontSize: "1.5rem" }}
        >
          🐙
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none", fontSize: "1.5rem" }}
        >
          💼
        </a>
      </motion.div>

      <motion.p
        style={{ fontSize: "0.9rem", opacity: 0.6 }}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        © {new Date().getFullYear()} Air Pollution Cinematic WebApp. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}

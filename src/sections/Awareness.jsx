import { motion } from "framer-motion";

const awarenessTips = [
  {
    id: 1,
    title: "Reduce Vehicle Emissions",
    text: "Use public transport, carpool, or cycle whenever possible to reduce NO₂ emissions.",
  },
  {
    id: 2,
    title: "Plant More Trees",
    text: "Trees absorb CO₂ and other pollutants, improving air quality in urban areas.",
  },
  {
    id: 3,
    title: "Conserve Energy",
    text: "Turn off lights and electronics when not in use to reduce emissions from power plants.",
  },
  {
    id: 4,
    title: "Support Clean Policies",
    text: "Advocate for stricter environmental regulations and support sustainable initiatives.",
  },
];

export default function Awareness() {
  return (
    <section style={{ padding: "4rem", background: "#0b0b0b", color: "#fff" }}>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Air Pollution Awareness
      </motion.h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 3rem auto",
          textAlign: "center",
          opacity: 0.8,
        }}
      >
        Simple actions and awareness can significantly reduce air pollution and protect
        our health. Every small step counts.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {awarenessTips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.3,
              type: "spring",
              stiffness: 70,
            }}
            style={{
              background: "#1a1a1a",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              maxWidth: "300px",
              flex: "1 1 250px",
              textAlign: "left",
            }}
          >
            <h3 style={{ marginBottom: "0.5rem" }}>{tip.title}</h3>
            <p style={{ opacity: 0.85, lineHeight: "1.4rem" }}>{tip.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

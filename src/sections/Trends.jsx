import { motion } from "framer-motion";
import no2 from "../assets/gifs/animated_no2_mean.gif";
import o3 from "../assets/gifs/animated_o3_mean.gif";

const trendCards = [
  {
    id: 1,
    title: "Nitrogen Dioxide (NO₂)",
    text: "Emissions mainly from traffic and industry. Peaks in urban and industrial areas.",
    img: no2,
    imgAlt: "NO2 Trends",
    imgLeft: true,
  },
  {
    id: 2,
    title: "Ozone (O₃)",
    text: "Formed from chemical reactions between sunlight and pollutants. Peaks in summer.",
    img: o3,
    imgAlt: "O3 Trends",
    imgLeft: false,
  },
];

export default function Trends() {
  return (
    <section style={{ padding: "4rem", background: "#111", color: "#fff" }}>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Pollution Trends Over Time
      </motion.h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 3rem auto",
          textAlign: "center",
          opacity: 0.8,
        }}
      >
        These animations show how pollutant levels have changed across U.S. states
        over time, revealing patterns linked to industry, traffic, and policy.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {trendCards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: card.id * 0.3 }}
            style={{
              display: "flex",
              flexDirection: card.imgLeft ? "row" : "row-reverse",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <motion.img
              src={card.img}
              alt={card.imgAlt}
              style={{
                width: "400px",
                maxWidth: "90%",
                borderRadius: "12px",
                boxShadow: "0 0 20px rgba(255,255,255,0.2)",
              }}
              animate={{ y: ["0%", "2%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: card.id * 0.3 }}
            />

            <div style={{ maxWidth: "400px", textAlign: "left" }}>
              <h3 style={{ marginBottom: "0.5rem" }}>{card.title}</h3>
              <p style={{ lineHeight: "1.4rem", opacity: 0.85 }}>{card.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

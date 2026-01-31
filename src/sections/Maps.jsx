import { motion } from "framer-motion";
import FloatingData from "../components/FloatingData";

export default function Maps() {
  const infoCards = [
    {
      title: "High Pollution States",
      desc: "States with higher NO₂ levels often correspond to dense urban and industrial regions.",
    },
    {
      title: "Policy Impact",
      desc: "States with stricter environmental regulations show lower NO₂ levels.",
    },
    {
      title: "Urban vs Rural",
      desc: "Urban areas have more traffic-related emissions; rural areas have lower NO₂ levels.",
    },
  ];

  return (
    <section style={{ padding: "6rem 2rem", background: "#111", position: "relative", overflow: "hidden" }}>
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", fontSize: "2.8rem", marginBottom: "1rem" }}
      >
        Pollution Distribution Across States
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ maxWidth: "850px", margin: "0 auto 3rem auto", fontSize: "1.2rem", lineHeight: "1.6", opacity: 0.85 }}
      >
        This interactive map shows average NO₂ levels across U.S. states.
        Darker regions indicate higher pollution, often linked to traffic,
        industrial activity, and urban density. Hover over a state to see the
        average NO₂ concentration.
      </motion.p>

      {/* Map + Floating Data */}
      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", borderRadius: "12px", overflow: "hidden", boxShadow: "0 0 40px rgba(0,0,0,0.5)" }}>
        <iframe
          src="/maps/choropleth_no2_states_2016.html"
          title="NO2 Map"
          style={{ width: "100%", height: "650px", border: "none", display: "block" }}
        />

        {/* Floating labels */}
        <FloatingData text="NO2: 45 ppb" x="15%" y="20%" delay={0} />
        <FloatingData text="NO2: 70 ppb" x="60%" y="35%" delay={1} />
        <FloatingData text="NO2: 50 ppb" x="35%" y="60%" delay={2} />
        <FloatingData text="Urban Area" x="70%" y="15%" delay={0.5} size="1.2rem" />
      </div>

      {/* Info Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginTop: "3rem" }}>
        {infoCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
            style={{ background: "#1a1a1a", padding: "1.8rem", borderRadius: "12px", flex: "1 1 250px", maxWidth: "300px", boxShadow: "0 0 20px rgba(0,0,0,0.5)", textAlign: "center" }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem" }}>{card.title}</h3>
            <p style={{ fontSize: "1rem", opacity: 0.8, lineHeight: "1.5" }}>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

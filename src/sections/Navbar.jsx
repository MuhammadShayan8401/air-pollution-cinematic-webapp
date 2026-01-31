export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#111",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "1rem 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
      }}
    >
      {["Hero", "Trends", "Maps", "Awareness"].map((section) => (
        <a
          key={section}
          href={`#${section.toLowerCase()}`}
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "500",
            transition: "0.3s",
          }}
        >
          {section}
        </a>
      ))}
    </nav>
  );
}

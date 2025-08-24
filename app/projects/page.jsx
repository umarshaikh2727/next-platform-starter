import { projects } from "./projects-data";

export default function ProjectsPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>My Projects</h1>
      <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {projects.map((project, idx) => (
          <div key={idx} style={{ border: "1px solid #eee", borderRadius: "8px", padding: "1rem", background: "#fff" }}>
            <img src={project.image} alt={project.title} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "6px" }} />
            <h2 style={{ fontSize: "1.25rem", margin: "1rem 0 0.5rem" }}>{project.title}</h2>
            <p style={{ marginBottom: "1rem" }}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3", textDecoration: "underline" }}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

import React from "react";
import { FaFlask, FaDatabase, FaLaptopCode } from "react-icons/fa";
import "./Projects.css"; // 👈 import the CSS

const defaultProjects = [
  {
    title: "Brain Tumor Segmentation using Attention-Enhanced 3D U-NET",
    description:
      "Implemented Cross-Shaped Window Attention blocks with Enhanced U-NET on MRI images, achieving 94.7% Dice Coefficient.",
    technologies: ["Python", "Deep Learning", "Medical Imaging"],
  },
  {
    title: "Leukemia (ALL) Segmentation using Ensemble Modeling",
    description:
      "Built an ensemble model with InceptionV3, VGG16, and ResNet50 for accurate ALL diagnosis with weighted averaging.",
    technologies: ["Deep Learning", "Ensemble Models"],
  },
  {
    title: "Identification of Missing Persons using Deep Learning",
    description:
      "Developed AI-based 3D face reconstruction and PostgreSQL database system for missing persons search.",
    technologies: ["Python", "TensorFlow", "SQL"],
  },
];

export default function Projects1({ projects = defaultProjects }) {
  return (
    <section className="projects-container">
      <header className="projects-header">
        <h2 className="projects-title">Projects</h2>
      </header>

      <div className="projects-grid">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="project-card"
            aria-labelledby={`proj-${idx}-title`}
          >
            <div className="project-card-header">
              <h3 id={`proj-${idx}-title`} className="project-card-title">
                {p.title}
              </h3>
              <div className="project-icon">
                {idx === 0 ? <FaFlask /> : idx === 1 ? <FaLaptopCode /> : <FaDatabase />}
              </div>
            </div>

            <p className="project-description">{p.description}</p>

            <div className="tech-list">
              {p.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import "./../styles/Projects.css";

const projects = [
  {
    title: "MediBridge",
    date: "2024 - Present",
    description: "Hospital Appointment Scheduling & Coordination Application (Senior Project)",
    techStack: "Flutter, Firebase",
    details: [
      "Built a cross-platform mobile app for hospital appointment scheduling and coordination.",
      "Developed features for patients, doctors, and staff, including appointment booking, medical record access, and schedule management.",
      "Utilized Firebase for secure data storage and real-time notifications.",
    ],
  },
  {
    title: "PlanMyTrip",
    date: "2024 - Present",
    description: "Personalized Travel Planning Mobile Application",
    techStack: "React Native, Firebase, Gemini AI",
    details: [
      "Developed features allowing users to plan trips by selecting cities, budgets, and travel companions.",
      "Integrated Gemini AI to assist users in finding suitable hotels and activities based on their preferences.",
      "Utilized Firebase for data storage and user authentication, ensuring secure access and real-time updates.",
    ],
  },
  {
    title: "E-Commerce Website",
    date: "2023 – 2024",
    description: "E-commerce Product Selection and Management System",
    techStack: "React.js, Node.js, HTML, CSS, JavaScript, PHP, SQL, MySQL",
    details: [
      "Designed and developed an e-commerce website featuring a front-end product selection page for users, an admin page for management purposes, and a reporting dashboard for sales insights.",
      "Utilized SQL and MySQL for storing and retrieving sales data.",
    ],
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <br></br>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-header">
            <span className="project-title">{project.title}</span>
            <span className="project-date">{project.date}</span>
          </div>
          <p>{project.description}</p>
          <p>
            <strong>Tech Stack:</strong> {project.techStack}
          </p>
          <ul>
            {project.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
          <br></br>
        </div>
      ))}
      <p>
        For more projects, please visit my <b>GitHub</b>: github.com/arrieaunp
      </p>
    </section>
  );
}

export default Projects;

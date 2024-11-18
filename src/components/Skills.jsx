import React from "react";

const skills = [
  { category: "Programming Languages", items: ["Java", "JavaScript", "Python", "PHP"] },
  { category: "Frameworks", items: ["React Native", "Flutter"] },
  { category: "Database Management", items: ["MySQL", "Firebase"] },
  { category: "Version Control", items: ["Git, GitHub"] },
  { category: "UX/UI Design Tools", items: ["Figma", "Figjam"] },
];

function Skills() {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      {skills.map((skill, index) => (
        <div key={index}>
          <h4>{skill.category}</h4>
          <ul>
            {skill.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;

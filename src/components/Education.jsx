import React from "react";
import "./../styles/Education.css";

function Education() {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-details">
        <p>
          <strong>Computer Science, Faculty of Science</strong>
        </p>
        <p className="institution">
          King Mongkut's Institute of Technology Ladkrabang
        </p>
        <p className="yearandGPA">2021 - Present</p>
        <p className="yearandGPA">(GPA: 3.21)</p>
      </div>
    </div>
  );
}

export default Education;

import React from "react";
import "../styles/CVPreview.css";
import {IoLocationSharp} from 'react-icons/io5'
import { IoMdMail } from "react-icons/io";
import { IoPhonePortrait } from "react-icons/io5";

function CVPreview({ personal, education,experience,skills }) {
  return (
    <div className="container">
      <div className="header">
        <h2>{personal.name}</h2>
        <div className="personalDetails">
          <p><IoMdMail /> {personal.email}</p>
          <p><IoLocationSharp /> {personal.place}</p>
          <p><IoPhonePortrait /> 12345</p>
        </div>
      </div>
      <div className="body">
        <div className="skills">
          <h3>Skills</h3>
          <ul className="skills-list">
            {Array.from(skills).map(skill=><li key={skill}>{skill}</li>)}
          </ul>
        </div>
        <div className="main">
          <h3>Education</h3>
          {/* qualification, institution, from ,to */}
          <div className="card">
            <div className="right">
              <h4>{education.qualification}</h4>
              <p>{education.institution}</p>
            </div>
            <p>
              {education.from} - {education.to}
            </p>
          </div>
          <h3>Experience</h3>
          <div className="card">
            <div className="right">
              <h4>{experience.role}</h4>
              <p>{experience.experience}</p>
              <h5>{experience.company}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVPreview;

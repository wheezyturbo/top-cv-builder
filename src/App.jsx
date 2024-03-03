import React, { useState } from "react";
import PersonalSection from "./components/PersonalSection";
import EducationSection from "./components/EducationSection";
import SkillSection from "./components/SkillSection";
import ExperienceSection from "./components/ExperienceSection";
import CVPreview from "./components/CVPreview";
import { FaPrint } from "react-icons/fa";
import './App.css'

function App() {
  const [personal, setPersonal] = useState({});
  const [education,setEducation] = useState({});
  const [skills,setSkills] = useState(new Set());
  const [experience,setExperience] = useState({});
  function handlePersonal(ppersonal) {
    setPersonal(ppersonal);
  }
  function handleEducation(eeducation){
    setEducation(eeducation);
  }
  function handleSkills(skillss){
    setSkills(skillss);
  }
  function handleExperience(exp){
    setExperience(exp);
  }
  
  return (
    <>
      <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",height:"100vh"}} id="container">
        <div className="left" style={{justifySelf:"center"}}>
          <PersonalSection change={handlePersonal} details={personal} />
          <ExperienceSection change={handleExperience} details={experience}/>
          <SkillSection change ={handleSkills} details={skills}/>
          <EducationSection change={handleEducation} details={education}/>
          <button onClick={print} style={{marginTop:"10px"}}>Print <FaPrint /></button>
        </div>
      <CVPreview personal={personal} education={education} experience={experience} skills={skills}/>
      </div>
    </>
  );
}

export default App;

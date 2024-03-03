import { useState } from "react";

const SkillSection = ({change,details}) => {
  // const [skills, change] = useState(new Set());
  const [addVisible, setAddVisible] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSkill.trim() !== "") {
      const updatedSkills = new Set(details);
      updatedSkills.add(newSkill);
      change(updatedSkills);
      setNewSkill("");
    }
    setAddVisible(false);
  };

  const handleDelete = (skill) => {
    const updatedSkills = new Set(details);
    updatedSkills.delete(skill);
    change(updatedSkills);
  };

  return (
    <div className="SkillSection" style={{ width: "400px" }}>
      <form onSubmit={handleSubmit}>
        <h3>Skill Section</h3>
        {!addVisible ? (
          <button
            style={{ width: "100%" }}
            onClick={() => setAddVisible(true)}
          >
            Add
          </button>
        ) : (
          <section className="nameSection" style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="skill">Add Skills</label>
            <ul>
              {[...details].map((skill) => (
                <li key={skill}>
                  {skill}{" "}
                  <button onClick={() => handleDelete(skill)}>X</button>
                </li>
              ))}
            </ul>
            <input
              type="text"
              name="skill"
              id="skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button type="submit">Add</button>
          </section>
        )}
      </form>
    </div>
  );
};

export default SkillSection;

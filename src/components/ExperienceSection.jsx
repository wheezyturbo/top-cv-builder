import { useState } from "react";

const ExperienceSection = ({ change, details }) => {
  const [addVisible, setAddVisible] = useState(false);
  const handleRoleChange = (e) => {
    change({ ...details, role: e.target.value });
  };

  const handleExperienceChange = (e) => {
    change({ ...details, experience: e.target.value });
  };

  const handleCompanyChange = (e) => {
    change({ ...details, company: e.target.value });
  };

  const handleCancel = () => {
    // change({ ...details });
    setAddVisible(false);
  };

  return (
    <div className="ExperienceSection" style={{ width: "400px" }}>
      <h3>Experience Section</h3>
      {!addVisible ? (
        <button onClick={() => setAddVisible(true)} style={{width:"400px"}}>Add</button>
      ) : (
        <form>
          <section
            className="nameSection"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={details.role}
              onChange={handleRoleChange}
            />
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              name="experience"
              id="experience"
              value={details.experience}
              onChange={handleExperienceChange}
            />
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              id="company"
              value={details.company}
              onChange={handleCompanyChange}
            />
            <button type="button" onClick={handleCancel}>
              Add
            </button>
          </section>
        </form>
      )}
    </div>
  );
};

export default ExperienceSection;

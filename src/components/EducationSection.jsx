import { useState } from "react";

const EducationSection = ({ change, details }) => {
  // const [details, setDetails] = useState({});
  const [addVisible, setAddvisible] = useState(false);

  function handleQualififcation(e) {
    change({ ...details, qualification: e.target.value });
    // console.log((details)=>details);
  }
  function handleInstitution(e) {
    change({ ...details, institution: e.target.value });
  }
  function handleFrom(e) {
    change({ ...details, from: e.target.value });
  }
  function handleTo(e) {
    change({ ...details, to: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(details);
    setAddvisible(false);
    change(details);
  }
  return (
    <div className="EducationSection" style={{ width: "400px" }}>
      <form onSubmit={handleSubmit}>
        <h3>Education Section</h3>
        {!addVisible ? (
          <button
            style={{ width: "100%" }}
            onClick={() => {
              setAddvisible(true);
            }}
          >
            Add
          </button>
        ) : (
          <section
            className="nameSection"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="qualification">Highest qualification</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              onChange={handleQualififcation}
              value={details.qualification}
            />
            <label htmlFor="institution">Institution</label>
            <input
              type="text"
              name="institution"
              id="institution"
              onChange={handleInstitution}
              value={details.institution}
            />
            <div className="duration" style={{ display: "flex" }}>
              <div className="from">
                <label htmlFor="from">from</label>
                <input
                  type="date"
                  name="from"
                  id="from"
                  onChange={handleFrom}
                  value={details.from}
                />
              </div>
              <div className="to">
                <label htmlFor="to">to</label>
                <input
                  type="date"
                  name="to"
                  id="to"
                  onChange={handleTo}
                  value={details.to}
                />
              </div>
            </div>
            <button type="submit">Add</button>
          </section>
        )}
      </form>
    </div>
  );
};

export default EducationSection;

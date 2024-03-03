import { useState } from "react";

const PersonalSection = ({change,details}) => {
  // const [details,setDetails] = useState({})
  const [addVisible,setAddvisible] = useState(false);

  function handleName(e) {
    change({...details,name:e.target.value});
    // console.log((details)=>details);
  }
  function handleMail(e){
    change({...details,email:e.target.value});
  }
  function handlePlace(e){
    change({...details,place:e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    // console.log(details);
    setAddvisible(false);
    change(details); 
  }
  return (
    <div className="PersonalSection" style={{width:"400px"}}>
      <form onSubmit={handleSubmit}>
        <h3>Personal Section</h3>
      {!addVisible ? <button style={{width:"100%"}} onClick={()=>{setAddvisible(true)}}>Add</button> :(
        <section className="nameSection" style={{display:"flex",flexDirection:"column"}}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleName} value={details.name}/>
          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" id="email" onChange={handleMail} value={details.email}/>
          <label htmlFor="place">Place</label>
          <input type="text" name="place" id="place" onChange={handlePlace} value={details.place}/>
          <button type="submit">Add</button>  
        </section>)}
      </form>
    </div>
  );
};

export default PersonalSection;

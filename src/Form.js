import React, { useState } from "react";

// pull in props
const Form = (props) => {
  // useState
  const [member, setMember] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: "",
  });
  // create event and prevent default
  console.log(member);
  const changeHandler = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  return (
    // create form
    // onSubmit for button on form
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setMember({ name: "", email: "", role: "" })
        props.addnewMember(member);
      }}
    >
<label htmlFor = "name">Name:</label>
<textarea name = "name" placeholder = "Add team member" value = {member.name} onChange = {changeHandler}/>

      <label htmlFor='role'>Role:</label>
      <textarea
        name='Role'
        placeholder='Role'
        value={member.role}
        onChange={changeHandler}
      />

      <button> Submit </button>
    </form>
  );
};

export default Form;

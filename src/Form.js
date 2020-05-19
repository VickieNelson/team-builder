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

    <div className='form-container'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setMember({ name: "", email: "", role: "" });
          props.addnewMember(member);
        }}
      >
        {/* name field */}
        <label htmlFor='name'>Name:</label>
        <textarea
          name='name'
          placeholder='Add team member'
          value={member.name}
          onChange={changeHandler}
        />
        {/* email field */}

        <label htmlFor='email'>Email:</label>
        <textarea
          name='email'
          placeholder='Please enter valid email'
          value={member.email}
          onChange={changeHandler}
        />

        {/* Role Dropdown */}
        <label htmlFor='role'>Role:</label>
        <textarea
          name='Role'
          placeholder='Role'
          value={member.role}
          onChange={changeHandler}
        />
        {/* submit button */}
        <button className='btn'> Submit </button>
      </form>
    </div>
  );
};

export default Form;

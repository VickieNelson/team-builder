import React from "react";

const Form = (props) => {
  const [member, setMember] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: "",
  });

  console.log(member);
};

export default Form;

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { v4 as uuid } from "uuid";
import Form from "./Form";
import MemberCard from "./MemberCard";
import Headline from "./Headline";

/* <<<<<< MVP ------ TO DO >>>>>>>>>>>>
//✅declare variable and set an initial value : name email and role... do we need id here?????

//You will have to decide which component is responsible for maintaining the state of the form (Form itself, or its parent App). Each approach has advantages and disadvantages.

//Render your Form component in App. The App component should hand down through props any callback(s) needed for Form to do its job (adding new members to your team members state on submit).
*/

const initialTeamList = [
  {
    id: uuid(),
    name: "Vickie",
    email: "vickie-nelson@lambdastudents.com",
    role: "TL",
  },
];

// useState//

function App() {
  const [member, setMember] = useState([]);

  const addnewMember = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
    };
    setMember([...member, newMember]);
  };

  return (
    <div className='App'>
      <Headline />
      <Form addnewMember={addnewMember} />
      <MemberCard member={member} />
    </div>
  );
}

export default App;

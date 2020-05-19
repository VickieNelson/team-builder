import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { v4 as uuid } from "uuid";

/* <<<<<< MVP ------ TO DO >>>>>>>>>>>>
//declare variable and set an initial value : name email and role... do we need id here?????
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

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

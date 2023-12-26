import React, { useState } from "react";
import "./Form.css";

import Modal from "./modal";
// import Card from "./Card";

const Form = (props) => {
  const [Username, setName] = useState("");
  const [Age, setAge] = useState("");
  const [error, setErr] = useState();
  let id = Math.random();


  const UserData = {
    id: id,
    Username: Username,
    Age: Age,
  };

  const Submit = (e) => {
    e.preventDefault();
    if (Age < 0) {
      setErr({ show: "enter a valid age" });
      return;
    } else if (Age.trim().length === 0 || Username.trim().length === 0) {
      setErr({ show: "Please enter a valid value." });
      return;
    }

    props.func(UserData);
    setAge("");
    setName("");
  };
  const namehandler = (e) => setName(e.target.value);

  const Agehandler = (e) => setAge(e.target.value);

  const closeHandler = () => {
    setErr(false);
  };
  return (
    <div>
      {error && <Modal msg={error} toggle={closeHandler} />}
      <div className="form-content">
        <label >User name</label>
        <br />
        <input
          type="text"
          placeholder="Username"
          value={Username}
          onChange={namehandler}
        />
        <br/>
        <label> Age (year)</label>
        <input
          type="number"
          placeholder="Age"
          value={Age}
          onChange={Agehandler}
        />
        <br></br>

        <button onClick={Submit}>Add User</button>
      </div>
    </div>
  );
};
export default Form;

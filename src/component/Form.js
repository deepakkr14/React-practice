import React, { useState } from "react";
import "./Chart.css";

const Form = (props) => {
  const [Username, setTitle] = useState("");
  const [Age, setAmount] = useState("");
  let id = Math.random();

  const namehandler = (e) => setTitle(e.target.value);

  const Agehandler = (e) => setAmount(e.target.value);
  const UserData = {
    id: id,
    Username: Username,
    Age: Age,
  };
  const makechange = () => {
    if (Age<0) {
      props.error({msg:'enter a valid age'});
    }
    else if(Age.trim().length===0 || Username.trim().length===0){
      props.error({msg:'please enter a valid value'});
    }
    // console.log(UserData);
    // console.log(props.)
   else{ props.func(UserData)
    setAmount("");
    setTitle("");}
    //  props.onaddExpense(UserData)
  };

  //   const cancel=()=>{
  // props.cancel(false)
  //   }
  return (
    <div className="expenses-list">
     <label >User name</label> 
      <input
        type="text"
        placeholder="Username"
        value={Username}
        onChange={namehandler}
      />
      <br></br>
     <label> Age (year)</label>
      <input
        type="number"
        placeholder="Age"
        value={Age}
        onChange={Agehandler}
      />
      <br></br>
      <button onClick={makechange}>Add User</button>

     {/* <div><Users  /></div>  */}
    </div>
  );
};
export default Form;

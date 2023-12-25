import React from "react";
import "./Chart.css";

const Users = (props) => {
 return (
    <div className="user-list">
      {props.data.map((each) => (
        <div key={each.id} className="user-block">
          {each.Username} {each.Age} years old
        </div>
      ))}
    </div>
  );
};

export default Users;

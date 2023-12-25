import "./App.css";

import Form from "./component/Form";
import Users from "./component/Users";

import { useState } from "react";

const App = () => {
  const [UserData, setData] = useState([]);

  const status = (data) => {
    setData((pdata) => {
      return [...pdata, data];
    });

    console.log(UserData);
  };
  const err = (data) => {
    alert(data.msg);
  };
  return (
    <div>
      <Form func={status} error={err} />

      <Users data={UserData} />
    </div>
  );
};

export default App;

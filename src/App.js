import React from 'react';
import Logout from "./Components/Logout";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./Features/userSlice";
import "./App.css";

function App() {

  const user = useSelector(selectUser);

  return (
    <div>
       { user ? <Logout /> : <Login />}
    </div>
  )
}

export default App;


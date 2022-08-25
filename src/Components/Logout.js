import React from 'react';
import { useDispatch } from "react-redux";
import { logout } from "../Features/userSlice";
import "./Logout.css";

function Logout() {
      
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
  return (
    <div className="logout">
      <h1> Welcome <span className="username">User</span>
      </h1>
      <br />
      <button className="logoutbtn" onClick= {(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout;

import React from "react";
import { Navigate } from 'react-router-dom';
import { useState } from "react";


const Logout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('userid');
  localStorage.removeItem('email');

  const [willRedirect, setWillRedirect] = useState(false)
  localStorage.setItem("isLogged", false)
  return(
    <div className="Login">
    {
      
      (willRedirect) ?
        <Navigate to="/login" />
        :
        ""
    }
    </div>
   )
};
 

export default Logout;
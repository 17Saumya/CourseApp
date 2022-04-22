//import React from "react";
import Register from "./Register";
import React, { useState } from "react";

import { Link } from "react-router-dom";
const Navbar=()=>{


  //function Form() {
    

    return(
        <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">Course App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

        <li class="nav-item">
        <Link to="/home" a class="nav-link" aria-current="page"
        >Home</Link>
        </li>

        <li class="nav-item">
        <Link to="/courses" a class="nav-link" aria-current="page"
        >Courses</Link>
         {/*} <a class="nav-link" aria-current="page" href="/courses">Courses</a>*/}
        </li>

        <li class="nav-item">
        <Link to="/about" a class="nav-link" aria-current="page"
        >About</Link>
          {/*<a class="nav-link" aria-current="page" href="/about">About</a>*/}
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Contact</a>
        </li>
        
        <div class="d-grid gap-4 d-md-flex justify-content-md-end">
        <Link to="/register" className="btn btn-warning me-md-10" 
        >Register</Link>
        <Link to="/login" className="btn btn-warning me-md-10" 
        >Login</Link>
       <Link to="/cart" className="btn btn-primary me-md-10" 
        >Cart</Link>
        
    </div>

      </ul>
      
    </div>
  </div>
</nav>


        </div>
    );
}
export default Navbar;
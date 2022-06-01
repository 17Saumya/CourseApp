import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Navigate } from 'react-router-dom';
import base_url from "../api/bootapi";
import { toast } from 'react-toastify';

function AdminLogin() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [willRedirect, setWillRedirect] = useState(false)

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("data", email, password);
    axios.get(`${base_url}/admins`)
      // axios.get(`${base_url}/admins`)
      .then((res) => {
        let data = res.data.filter((e) => e.email == email && e.password == password)
        if (data.length > 0) {
          setWillRedirect(true)
          toast.success("login successfull")
          localStorage.setItem("isLogged", true)
          localStorage.setItem("userid", data[0]._id)
        } else {
          toast.warn("No user found with these credentials!Please try again.")
        }
      })
  }

  return (

    <div className="Login">
      {
        
        (willRedirect) ?
          <Navigate to="/adminhome" />
          :
          ""
      }
      {/* function App() { */}
      {/* return (
      <div
        class="bg_image"
      >
        <h1>This is Text on top</h1>
      </div>
  ); */}

      {/* <div>
       <img src="/assets/home.jpg" class="card-img" alt="background image" />
        </div> */}
      <Form onSubmit={handleSubmit}>
        <br></br>
        <h3>Admin Login</h3>
        <br></br>
        <Form.Group size="lg" controlId="email">

          <Form.Label>Email</Form.Label>

          <Form.Control

            autoFocus

            type="email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label>Password</Form.Label>

          <Form.Control

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>

        <br>
        </br>


        <Button type="submit" >Submit</Button>
        <br></br>
        {/* <Link to="/register" block size="lg" type="submit" disabled={!validateForm()}>
        New User? Register
         </Link> */}
      </Form>

    </div>

  );

}


export default AdminLogin;
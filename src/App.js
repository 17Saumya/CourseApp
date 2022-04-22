import React from "react";
import logo from './logo.svg';
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap"; 
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {BrowserRouter ,Routes,Route, Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Home1 from "./components/Home1";

import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";



////
function App() {
    
  const btnHandle=()=>{
  
    toast.success("success",{position: "bottom-center"});
  
  }
    return (
      <div>
        
        <ToastContainer /> 
        {/*<Home/>
        <Allcourses></Allcourses>
        <AddCourse></AddCourse> */}
      <Container>
          <Navbar/>
          
          {/*<Header/>*/}
          {/*<Row>
            <Col md = {4}>
             {/*} <Menus/>}
            </Col>*/}
            {/*<Col md ={8}>
              <Home/>*/}
             
              <Routes>
              <Route path="/home"exact element={<Home1/>} />
                
              {/*  <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<Allcourses />} />
                <Route path="/add-faculty" element={<AddFaculty />} />
      <Route path="/view-faculty" element={<Allfaculties />} />*/}
                 <Route path="/courses" element={<Courses />} />
                 {/* <Route path="/home" element={<Home1 />} /> */}
                 <Route path="/about" element={<About />} />
                 <Route path="/register" element={<Register />} />
                 <Route path="/login" element={<Login />} />
                 <Route path="/cart" element={<Cart />} />
              </Routes>
              
              {/*</Col>
          </Row>*/}
        </Container>



      
  
      </div>
    );
    
  }

 
 






export default App;
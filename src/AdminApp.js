import React from "react";
import logo from './logo.svg';
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap"; 
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {BrowserRouter ,Routes,Route, Router} from "react-router-dom";
import Course from './components/Course';
import Allcourses from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/Menus";
import AddFaculty from "./components/AddFaculty";
import Faculty from "./components/Faculty";

import Allfaculties from "./components/Allfaculties";
import Home from "./components/Home";

function AdminApp() {
    
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
            
            
            <Header/>
            <Row>
              <Col md = {4}>
                <Menus/>
              </Col>
              <Col md ={8}>
                <Home/>
               <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home/>} />
                  
                  <Route path="/add-course" element={<AddCourse />} />
                  <Route path="/view-courses" element={<Allcourses />} />
                  <Route path="/add-faculty" element={<AddFaculty />} />
                    <Route path="/view-faculty" element={<Allfaculties />} />
                  
                   {/*<Route path="/courses" element={<Courses />} />
                   <Route path="/home" element={<Home1 />} />
                   <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />*/}
                </Routes>
                </BrowserRouter>
                </Col>
            </Row>
          </Container>
    
        </div>
      );
      
    }
  export default AdminApp;
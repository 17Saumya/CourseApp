import React from "react";
import logo from './logo.svg';
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import UserHome from "./components/UserHome";
import AdminHome from "./components/AdminHome";
// import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import CourseSelected from "./components/CourseSelected";
/////
import StudenPurchase from "./components/StudenPurchase";
import Course from './components/Course';
import Allcourses from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/Menus";
import AddFaculty from "./components/AddFaculty";
import Faculty from "./components/Faculty";
import Allfaculties from "./components/Allfaculties";
import AdminLogin from "./components/AdminLogin";
import Footer from "./components/Footer";
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import UpdateCourse from "./components/updatecourse";
import Logout from "./components/Logout";
function App() {
  // const [willRedirect, setWillRedirect] = useState(false)


  // const btnHandle = () => {

  //   toast.success("success", { position: "bottom-center" });

  // }
  localStorage.setItem("isLogged", false)
  return (


    <div>
      <ToastContainer />

      <Container style={{maxWidth: "100%", padding: 0}} >
        <Navbar />

        {/*<Header/>*/}


        <Routes>

          <Route path="/menus" exact element={<Menus />} />
          <Route path="/adminhome" exact element={<AdminHome />} />
          <Route path="/adminlogin" exact element={<AdminLogin />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/view-courses" element={<Allcourses />} />
          <Route path="/add-faculty" element={<AddFaculty />} />
          <Route path="/view-faculties" element={<Allfaculties />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/" exact element={<UserHome />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course/:id" element={<CourseSelected />} />
          <Route path="/studentpurchase" element={<StudenPurchase />} />
          <Route path="/update-course/:id" element={<UpdateCourse />} />
        </Routes>

        {/* <Row>
            <Login/>
            </Row> */}
       
        <Footer />
      </Container>
    </div>
  );

}
export default App;
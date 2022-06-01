import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';

import { Col, Row } from "reactstrap";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
  CardImg,
  CardLink

} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { ListGroup, ListGroupItem } from "reactstrap";

//import React, {useState,useEffect} from "react";




const Courses = () => {
  const [course, setCourse] = useState({});
  const username = localStorage.getItem('username')
  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log("res in courses", response);
        console.log("success");
        toast.success("Course Loaded successfully");
        setCourse({ userid: "", FacultyName: "", CourseDuration: "" });
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.success(" Something Went Wrong");
      }
    )
  };
  const pathname = "course/"
  const handleForm = () => {
    // console.log(course);
    // postDataToServer(course);
    //setIsSelect(true)
  }
  const url = 'http://localhost:8080/courses'
  const [courses, setCourses] = useState(null)
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setCourses(response.data)
        console.log(JSON.stringify(response.data));
      })
  }, [])



  console.log("ls", localStorage.getItem("isLogged") == "true");

  return (
    <Row>
      <br></br>
      <h5>Welcome,  {username}</h5>
      <br></br>
      <br></br>
      <h4 style={{
        background: "pink",
        textAlign: "center"
      }}>We have List of Courses for you!</h4>

      {courses?.map((crs) =>
        <Col md={4} >
          {console.log({crs})}
          <Card >
            <div style={{
			          padding: 30
                	}}>

              {
                (localStorage.getItem("userid")) ?
                  "" : <Navigate to="/" />
              }

             
             
              
                <iframe width="380" height="315" src={crs.link} title="YouTube video player" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             
              {/* <CardImg variant="top" src="assets\tech.jpg" /> */}
              
              <ListGroup className="list-group-flush">
              <ListGroupItem><h6 style={{ fontWeight: 'bold' }}>Course Title :</h6>{crs.title}</ListGroupItem>
              <ListGroupItem><h6 style={{ fontWeight: 'bold' }}>Course Description :</h6>{crs.description}</ListGroupItem>
                {/* <ListGroupItem>CourseId:{crs.id}</ListGroupItem> */}
                <ListGroupItem><h6 style={{ fontWeight: 'bold' }}>Faculty Name:</h6>{crs.facultyName}</ListGroupItem>
                <ListGroupItem><h6 style={{ fontWeight: 'bold' }}>Faculty Email ID:</h6>  {crs.facultyEmailID}</ListGroupItem>
                {/* <ListGroupItem><h6 style={{fontWeight: 'bold'}}>Course Price:{crs.price}</h6></ListGroupItem> */}
                <ListGroupItem><h6 style={{ fontWeight: 'bold' }}>No. of Lectures:{crs.noOfLectures}</h6></ListGroupItem>
                <ListGroupItem><h6 style={{ fontWeight: 'bold' }}>Course Duration:{crs.duration}</h6></ListGroupItem>
                <Link to={`/course/${crs.id}`} onClick={handleForm} className="btn btn-warning me-md-10">Select Course</Link>
              </ListGroup>
              
            </div>

          </Card>
        </Col>


      )}
    </Row >
  );
}
export default Courses;
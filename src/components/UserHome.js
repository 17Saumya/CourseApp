import React from "react";
import { Navigate, Link } from "react-router-dom";
import { useState } from "react";
// import {
//     Card,
//     CardBody,
//     CardTitle,
//     CardSubtitle,
//     CardText,
//     CardFooter,
//     Button,
//     Container,
//     CardImg,
//     CardLink

//   } from "reactstrap";
//   import { ListGroup, ListGroupItem } from "reactstrap";
//   import { Col } from "reactstrap";
const UserHome = () => {

  return (
    <div classname="hero">
      <div class="card bg-dark text-white border-0">
        <img src="/assets/home1.webp" class="card-img" alt="background image"
          height="600px" />
        <div class="card-img-overlay">
          <h5 class="card-title">Welcome!</h5>
          <div class="d-grid gap-4 d-md-flex justify-content-md-end">
            <Link to="/register" className="btn btn-warning me-md-10"
            >Register</Link>
            <Link to="/login" className="btn btn-warning me-md-10"
            >Login</Link>
            {/* <Link to="/login" className="btn btn-primary me-md-10" 
        >logout</Link>  */}

          </div>
          <div>

            {/* {
              (localStorage.getItem("isLogged") == "true") ?
                "" : <Navigate to="/login" />
            }

            <br>
            </br>
            <br>
            </br>

            <CardImg variant="top" src="assets/home1.webp" />
            <CardBody>
              <CardTitle>Course Title</CardTitle>
              <CardText>Course Description </CardText>
            </CardBody>
            <ListGroup className="list-group-flush">
              {/* <ListGroupItem>CourseId:{crs.id}</ListGroupItem> 
              <ListGroupItem>Faculty Name</ListGroupItem>
              <ListGroupItem>Faculty Email ID: </ListGroupItem>
              <ListGroupItem>Course Price</ListGroupItem>
              <ListGroupItem>No. of Lectures</ListGroupItem>
              <ListGroupItem>Course Duration</ListGroupItem>

            </ListGroup>
            {/* <CardBody>
              <CardLink href="#">Course Link</CardLink>
              <br></br>
              <Link to={`/course/${crs.id}`}  onClick={handleForm} className="btn btn-warning me-md-10"
              >Select Course</Link>

            </CardBody> 
          </div> 
        
    
                    {/*<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>*/}
            {/* {
              (localStorage.getItem("isLogged") == "true") ?
                "" : <Navigate to="/login" />
            } */}
          </div>
        </div>

      </div>
    </div>

  )
}


export default UserHome;
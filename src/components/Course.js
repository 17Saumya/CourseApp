import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";
import { Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

const Course = ({ course, update }) => {
  const [modelOpenStatus, setModalOpenStatus] = useState(false)




  const deleteCourse = (id) => {
    axios.delete(`${base_url}/course/${id}`).then(
      (response) => {
        toast.success("Course deleted");
        update(id);
        setModalOpenStatus(false)

      },
      (error) => {
        toast.success("Course not deleted !!Server Problem");
      }
    )
  };


  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Course Title:</th>
            <th>Course Description:</th>
            <th>Course Duration:</th>
            <th>No oflectures:</th>
            <th>Faculty Name:</th>
            {/* <th>Course Pirce:</th> */}
            <th>Faculty Email ID:</th>
          </tr>
        </thead>
        <tbody>





          <tr>

            <td>{course.title}</td>
            <td>{course.description}</td>
            <td>{course.duration}</td>
            <td>{course.noOfLectures}</td>
            <td>{course.facultyName}</td>
            {/* <td>{course.price}</td> */}
            <td>{course.facultyEmailID}</td>
          </tr>
          <br></br>
          <Container className="text-center">
            <Button
              style={{ background: "red" }}
              className="btn btn-danger me-md-10"
              //  color="danger"
              onClick={() => {
         setModalOpenStatus(true)
              }}>
              Delete
            </Button>

            <Button
              style={{ background: "yellow" }}
              className="btn btn-warning me-md-10">
              <Link to={`/update-course/${course.id}`} color="warning ml-3">Update</Link>
            </Button>
          </Container>


        </tbody>
      </Table>
      <Modal
        isOpen={modelOpenStatus}
      // toggle={modelOpenStatus}
      >
        <ModalHeader toggle={() => setModalOpenStatus(false)}>
          
        </ModalHeader>
        <ModalBody>
          Are you sure you want to delete?
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
        onClick={() => {
              deleteCourse(course.id);
            }}
          // onClick={function noRefCheck() { }}
          >
            Yes, Delete
          </Button>
          {' '}
          <Button onClick={() => setModalOpenStatus(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </>



    // <card className="text-center">
    //     <CardBody>

    //         <CardSubtitle className="font-weight-bold">Course Title: {course.title}</CardSubtitle>
    //         <CardText>Course Description: {course.description} </CardText>
    //         <CardText>Course Duration: {course.duration} </CardText>
    //         <CardText>Course No. of lectures: {course.noOfLectures} </CardText>
    //         <CardText>Course Faculty Name: {course.facultyName} </CardText>
    //         <CardText>Course price: {course.price} </CardText>
    //         <CardText>Course Faculty Id: {course.facultyEmailID} </CardText>
    //         <Container className="text-center">
    //             <Button
    //                 color="danger"
    //                 onClick={() => {
    //                     deleteCourse(course.id);
    //                 }}>
    //                 Delete
    //             </Button>

    //             <Button className="btn btn-warning me-md-10">
    //             <Link to={`/update-course/${course.id}`} color="warning ml-3">Update</Link>
    //             </Button>
    //         </Container>
    //     </CardBody>
    // </card>
  )
}

export default Course;
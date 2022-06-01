import React from "react";
import {Table} from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import  { useEffect, useState } from "react"
import { toast } from "react-toastify";
import {
    useParams,
  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function StudenPurchase(){

  //go back
    const navigate = useNavigate();
    const[courses,setcourses]=useState([]);
    const fetchdata=async(data)=>{

            await axios.get(`${base_url}/allselects`).then(
                (response)=>{
                    //console.log(response);
                  setcourses(response.data)  
                },
                (error)=>{
                    // console.log(error);
                    // console.log("error");
                    toast.success(" Something Went Wrong");
                }
            )
        };
      useEffect(() => {
             fetchdata()
      },[])


    return(

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>User Email Id</th>
          <th>Course ID</th>
          <th>Course Name</th>
          <th>Course Faculty Name</th>
          <th>Course Duration</th>
          <th>Date of Registration</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course)=>{
          return  <tr key={course?._id}>
            <td>{course?.userid}</td>
          <td>{course?.courseid}</td>
          <td>{course?.coursetitle}</td>
          <td>{course?.facultyname}</td>
          <td>{course?.courseduration}</td>
          <td>{course?.dateOfPurchase}</td>
        </tr> 
        })}
      </tbody>
      <br></br>
      <Button color="primary" onClick={ () => navigate(-1) }> Back</Button>
    </Table>
    
    )
      }


export default StudenPurchase;
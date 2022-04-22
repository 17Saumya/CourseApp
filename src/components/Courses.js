import axios from "axios";
import React, { useEffect, useState } from "react";

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
import { ListGroup, ListGroupItem } from "reactstrap";

//import React, {useState,useEffect} from "react";

const Courses = () => {
 
  const url='http://localhost:8080/courses'
  const[courses,setCourses]=useState(null)
  useEffect(()=>{
    axios.get(url)
    .then(response=>{
        setCourses(response.data)
       
    })
  } , [])
    

    {/*const[data,setData]=useState([]);
    const[filter,setFilter]=useState(data);
    const[loading,setLoading]=useState(false);
    let componentMounted=true;


    useEffect(()=>{
        const getCourses=async()=>{
                setLoading(true);
                const response=await fetch();

                if (componentMounted){
                    setData(await response.clone().json)
                }
        }
        getCourses();
    },[])*/}

    return (

    <div>
    <br>
    </br>
    <br>
    </br>
   { courses?.map((crs)=> <Card style={{ width: '18rem' }}>
  <CardImg variant="top" src="assets\tech.jpg" />
  <CardBody>
    <CardTitle>Course Name:{crs.title}</CardTitle>
    <CardText>
    {crs.description}
    </CardText>
  </CardBody>
  <ListGroup className="list-group-flush">
    <ListGroupItem>CourseId:{crs.id}</ListGroupItem>
    <ListGroupItem>Faculty Name:{crs.facultyName}</ListGroupItem>
    <ListGroupItem>Course Price:{crs.price}</ListGroupItem>
    <ListGroupItem>No. of Lectures:{crs.nooflectures}</ListGroupItem>
    <ListGroupItem>Course Duration:{crs.duration}</ListGroupItem>
  </ListGroup>
  <CardBody>
    <CardLink href="#">Course Link</CardLink>
    {/*<CardLink href="#">Another Link</CardLink>*/}
  </CardBody>
</Card>)}


   

</div>

    );
}
export default Courses;
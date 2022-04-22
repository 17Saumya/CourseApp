import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
}from "reactstrap";

const Course=({course ,update})=>{

    const deleteCourse = (id) =>{
        axios.delete(`${base_url}/course/${id}`).then(
            (response)=>{
                toast.success("Course deleted");
                update(id);
            },
            (error)=>{
                toast.success("Course not deleted !!Server Problem");
            }
        )
};

    return (
        <card  className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description} </CardText>
                <Container className="text-center">
                    <Button 
                        color="danger" 
                        onClick={()=>{
                            deleteCourse(course.id);
                    }}>
                        Delete
                    </Button>
                    <Button color="warning ml-3">Update</Button>    
                </Container>          
            </CardBody>
        </card>
    )
}

export default Course;
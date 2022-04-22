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

const Faculty=({faculty ,update})=>{

    const deleteFaculty = (id) =>{
        axios.delete(`${base_url}/faculty/${id}`).then(
            (response)=>{
                toast.success("Faculty deleted");
                update(id);
            },
            (error)=>{
                toast.success("Faculty not deleted !!Server Problem");
            }
        )
};

    return (
        <card  className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold"><p>Faculty Name:: {faculty.name}</p></CardSubtitle>
                <CardText><p>Faculty Department:: {faculty.department} </p></CardText>
                <Container className="text-center">
                    <Button 
                        color="danger" 
                        onClick={()=>{
                            deleteFaculty(faculty.id);
                    }}>
                        Delete
                    </Button>
                    <Button color="warning ml-3">Update</Button>    
                </Container>          
            </CardBody>
        </card>
    )
}

export default Faculty;
import React, {useEffect ,Fragment, useState } from "react";
import { Container, Form, FormGroup,Input } from "reactstrap";
import { Button } from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
  const AddCourse=()=>{

    useEffect(()=>{
        document.title="Add Course||CourseRegistration";
    },[]);

    const[course,setCourse]=useState({});
    
    //form handler
    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    const postDataToServer=(data)=>{
        axios.post(`${base_url}/course`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
                setCourse({id:"",title:"",description:""});
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.success("OOPS! Something Went Wrong");
            }
        )
    };

      return(
           <Fragment>
               <h1 className="text-center my-3"></h1>
                <Form onSubmit={handleForm}>
                    <FormGroup>
                        <label for="userId">Course Id</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="userId"
                            id="userId"
                            onChange={(e)=>{
                                setCourse({...course,id:e.target.value});
                            }}
                           />
                   </FormGroup> 

                   <FormGroup>
                        <label for="title">Title</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="title"
                            id="title"
                            onChange={(e)=>{
                                setCourse({...course,title:e.target.value});
                            }}
                           />
                   </FormGroup> 
                   <FormGroup>
                        <label for="price"> Course Price</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="price"
                            id="price"
                            onChange={(e)=>{
                                setCourse({...course,price:e.target.value});
                            }}
                           />
                    </FormGroup> 

                    <FormGroup>
                        <label for="facultyName"> Faculty Name</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="facultyName"
                            id="facultyName"
                            onChange={(e)=>{
                                setCourse({...course,facultyName:e.target.value});
                            }}
                           />
                    </FormGroup> 

                   <FormGroup>
                        <label for="duration"> Course Duration</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="duration"
                            id="duration"
                            onChange={(e)=>{
                                setCourse({...course,duration:e.target.value});
                            }}
                           />
                   </FormGroup> 

                   <FormGroup>
                        <label for="description">Course Description</label>
                        <Input  
                            type="textarea" 
                            placeholder="Enter here" 
                            name="description"
                            id="description"
                            onChange={(e)=>{
                                setCourse({...course,description:e.target.value});
                            }}
                            style={{height:100}}
                           />
                   </FormGroup> 
                   <Container className="text-center">
                       <Button type="submit" color="success">
                           Add Course
                        </Button>
                       <Button  
                            type="reset"
                            onClick={()=>{
                            setCourse({id:"",title:"",description:"",price:"",facultyName:"",
                                duration:""
                        });
                       }}
                            color="warning ml-2">
                         Clear
                       </Button>
                   </Container>
                </Form>
          
          </Fragment>

      );
  };

  export default AddCourse;
import React, {useEffect ,Fragment, useState } from "react";
import { Container, Form, FormGroup,Input } from "reactstrap";
import { Button } from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
  const AddFaculty=()=>{

    useEffect(()=>{
        document.title="Add Faculty||CourseRegistration";
    },[]);

    const[faculty,setFaculty]=useState({});
    
    //form handler
    const handleForm=(e)=>{
        console.log(faculty);
        postDataToServer(faculty);
        e.preventDefault();
    }

    const postDataToServer=(data)=>{
        axios.post(`${base_url}/faculty`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Faculty added successfully");
                setFaculty({id:"",facultyname:"",department:""});
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
                        <label for="facultyId">Faculty Id</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="facultyId"
                            id="facultyId"
                            onChange={(e)=>{
                                setFaculty({...faculty,id:e.target.value});
                            }}
                           />
                   </FormGroup> 

                   <FormGroup>
                        <label for="facultyname">Faculty Name</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="facultyname"
                            id="facultyname"
                            onChange={(e)=>{
                                setFaculty({...faculty,facultyname:e.target.value});
                            }}
                           />
                   </FormGroup> 

                   <FormGroup>
                        <label for="department">Faculty Department</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="fdept"
                            id="fdept"
                            onChange={(e)=>{
                                setFaculty({...faculty,department:e.target.value});
                            }}
                            style={{height:100}}
                           />
                   </FormGroup> 
                   <Container className="text-center">
                       <Button type="submit" color="success">
                           Add Faculty
                        </Button>
                       <Button  
                            type="reset"
                            onClick={()=>{
                            setFaculty({id:"",facultyname:"",department:""});
                       }}
                            color="warning ml-2">
                         Clear
                       </Button>
                   </Container>
                </Form>
          
          </Fragment>

      );
  };

  export default AddFaculty;
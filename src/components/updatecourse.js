import React from "react";
import { toast } from "react-toastify";
import {useEffect ,Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, FormGroup,Input } from "reactstrap";
import { Button } from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
const UpdateCourse=()=>{
    // const [course,setCurrentCourse] = useState()
    const[course,setCourse]=useState({});
    const{id} = useParams()
    const getCourse = async () => {
        try {
            const {data} = await axios.get(`${base_url}/course/${id}`)
            setCourse(data)
            
        } catch (err) {
            console.log(err);
            
        }
    }
    useEffect(()=>{

        document.title="Update Course||CourseRegistration";
        getCourse()
    },[]);

    
    
    //form handler
    const handleForm=(e)=>{
        console.log({course});
        postDataToServer(course);
        e.preventDefault();
    }
    //go back
    const navigate = useNavigate();

   const postDataToServer=async(postData)=>{
        try {
          const {data}= await axios.put(`${base_url}/course`,{...postData})
            toast.success("Course updated successfully");
            setCourse(data);
        } catch (error) {
            console.log(error);
                    console.log("error");
                    toast.success("Something Went Wrong. Course not updated");
        }
        
    };

      return(
           <Fragment>
               <h1 className="text-center my-3"></h1>
                <Form onSubmit={handleForm}>
                    {/* {/* <FormGroup>
                        <label for="userId">Course Id</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="userId"
                            id="userId"
                            onChange={(e)=>{
                                setCourse({...course,id:e.target.value});
                            }}
                           /> *
                   </FormGroup>  */}
                    <h3>Update Course</h3>
                   <FormGroup>
                        <label for="title">Course Name</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="title"
                            id="title"
                            value={course?.title}
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
                            value={course?.price}
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
                            value={course?.facultyName}
                            onChange={(e)=>{
                                setCourse({...course,facultyName:e.target.value});
                            }}
                           />
                    </FormGroup> 
                    
                    <FormGroup>
                        <label for="facultyName"> Faculty Email ID</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="facultyEmailID"
                            value={course?.facultyEmailID}

                            id="facultyEmailID"
                            onChange={(e)=>{
                                setCourse({...course,facultyEmailID:e.target.value});
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
                            value={course?.duration}

                            onChange={(e)=>{
                                setCourse({...course,duration:e.target.value});
                            }}
                           />
                   </FormGroup> 
                    
                   <FormGroup>
                        <label for="noOfLectures">Number of Lectures</label>
                        <Input  
                            type="text" 
                            placeholder="Enter here" 
                            name="noOfLectures"
                            id="noOfLectures"
                            value={course?.noOfLectures}

                            onChange={(e)=>{
                                setCourse({...course,noOfLectures:e.target.value});
                            }}
                            // style={{height:100}}
                           />
                   </FormGroup> 
                   <FormGroup>
                        <label for="description">Course Description</label>
                        <Input  
                            type="textarea" 
                            placeholder="Enter here" 
                            name="description"
                            id="description"
                            value={course?.description}

                            onChange={(e)=>{
                                setCourse({...course,description:e.target.value});
                            }}
                            style={{height:100}}
                           />
                   </FormGroup> 
                   
                   
                   <Container className="text-center">
                       <Button type="submit" color="success">
                           Update Course
                        </Button>
                       <Button  
                            type="reset"
                            onClick={()=>{
                            setCourse({id:"",title:"",description:"",price:"",facultyName:"",
                                duration:"",noOfLectures:""
                        });
                       }}
                            color="warning ml-2">
                         Clear
                       </Button>
                       <br></br>
                       <br></br>
    {/* <Button type="submit" onClick={history.goBack} color="primary">
                           Back
                        </Button> */}
    <Button color="primary" onClick={ () => navigate(-1) }> Back</Button>      
                   </Container>
                </Form>
          
          </Fragment>

      );
  };




export default UpdateCourse;

import React, { useEffect, Fragment, useState } from "react";
import { Container, Form, FormGroup, Input } from "reactstrap";
import { Button } from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';

const AddCourse = () => {
    const [willRedirect, setWillRedirect] = useState(false)
    useEffect(() => {
        // const adminId = "example@gmail.com"
        // const userId = localStorage.getItem.id
        // if (userId !== adminId) {

            <div className="container">
                {
                    (willRedirect) ?
                        <Navigate to="/login" />
                        :
                        ""
                }
            </div>

        
        document.title = "Add Course||CourseRegistration";
    }, []);

    const [course, setCourse] = useState({link: "https://player.vimeo.com/video/"});

    //form handler
    const handleForm = (e) => {
        console.log({ course });
        postDataToServer(course);
        e.preventDefault();
    }
    //go back
    const navigate = useNavigate();

    const postDataToServer = async (data) => {
        try {
            console.log({ data })
            const response = await axios.post(`${base_url}/course`, { ...data })
            console.log(response);
            console.log("success");
            toast.success("Course added successfully");
            localStorage.setItem("isLogged", true)
            setCourse({ id: "", title: "", description: "", facultyName: "", price: "", duration: "" });
        } catch (error) {
            console.log(error);
            console.log("error");
            toast.success("OOPS! Something Went Wrong");
        }

    };

    console.log("ls", localStorage.getItem("isLogged") == "true");
    return (
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
                <h3>Add Course</h3>
                <FormGroup>
                    <label for="title">Course Name</label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="title"
                        id="title"
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }}
                    />
                </FormGroup>
                {/* <FormGroup>
                    <label for="price"> Course Price</label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="price"
                        id="price"
                        onChange={(e) => {
                            setCourse({ ...course, price: e.target.value });
                        }}
                    />
                </FormGroup> */}

                <FormGroup>
                    <label for="facultyName"> Faculty Name</label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="facultyName"
                        id="facultyName"
                        onChange={(e) => {
                            setCourse({ ...course, facultyName: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="facultyName"> Faculty Email ID</label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="facultyEmailID"
                        id="facultyEmailID"
                        onChange={(e) => {
                            setCourse({ ...course, facultyEmailID: e.target.value });
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
                        onChange={(e) => {
                            setCourse({ ...course, duration: e.target.value });
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
                        onChange={(e) => {
                            setCourse({ ...course, noOfLectures: e.target.value });
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
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }}
                        style={{ height: 100 }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="courselink">Course link</label>
                    <Input
                        type="textarea"
                        placeholder="Enter here"
                        name="link"
                        id="link"
                        value={course.link}
                        onChange={(e) => {
                            setCourse({ ...course, link: e.target.value });
                        }}
                        style={{ height: 100 }}
                    />
                </FormGroup>


                <Container className="text-center">
                    <Button type="submit" color="success">
                        Add Course
                    </Button>
                    <Button
                        type="reset"
                        onClick={() => {
                            setCourse({
                                id: "", title: "", description: "", price: "", facultyName: "",
                                duration: "", noOfLectures: ""
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
                    <Button color="primary" onClick={() => navigate(-1)}> Back</Button>
                </Container>
            </Form>

        </Fragment>

    );
};

export default AddCourse;
import React, { useEffect, useState } from "react"
import { Alert, Container, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Button } from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Fragment } from "react";
import { useLocation } from 'react-router-dom'
import { useParams, } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import confirm from "antd/lib/modal/confirm";
import { Card } from "reactstrap";
import { useNavigate } from "react-router-dom";

function CourseSelected() {
    const [modelOpenStatus,setModalOpenStatus] = useState(false)

    //go back
    const navigate = useNavigate();

    const [courseselected, setCourse] = useState({});
    console.log(courseselected);
    //function coursePurchased(){
    const coursePurchased = async (data) => {

        await axios.post(`${base_url}/course/:id/${id}`).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course Registered successfully");
                setCourse(response.data);
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.success(" Something Went Wrong");
            }
        )
    };



    //form handler
    const handleForm = (course_title) => {
        console.log(courseselected);
        // postDataToServer(courseselected);
        // e.preventDefault();
        // AlertDismissible(course_title) ;
    }

    const { id } = useParams();
    // const {courseId} = useParams();
    console.log("My id is", id);

    const postDataToServer = async (data) => {

        await axios.get(`${base_url}/course/${id}`).then(
            (response) => {
                console.log(response);
                console.log("success");
                // toast.success("success");
                setCourse(response.data);
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.success(" Something Went Wrong");
            }
        )
    };
    const handleSubmit = async () => {
        //console.log({id,courseselected})
        //DD/MM/YY meet pe add karo
        const today = new Date()
        const todayFormat = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        console.log(todayFormat)
        const postData = {

            courseid: courseselected.id,
            userid: localStorage.getItem("email"),
            coursetitle: courseselected.title,
            coursedescription: courseselected.description,
            facultyname: courseselected.facultyName,
            courseduration: courseselected.duration,
            price: courseselected.price,
            dateOfPurchase: todayFormat

        }
        console.log({ postData });
        const { data } = await axios.post(`${base_url}/courseselect`, postData)
        console.log({ data });
        setModalOpenStatus(false)
        toast.success("Course Registered successfully!");
    }
    useEffect(() => {
        postDataToServer()
    }, [id])
    return (
        // {courses?.map((crs) =>}
        <Fragment>
            <h3 className="text-center my-3">You are selecting this course</h3>
            <Form >
                {/* <FormGroup>
                       <label for="userId">Course Id: </label>
                       
                  </FormGroup>  */}

                <FormGroup>
                    <label for="title"><h4>Title:{courseselected?.title}</h4></label>

                </FormGroup>
                {/* <FormGroup>
                    <label for="price"> Course Price:{courseselected?.price}</label>

                </FormGroup> */}

                <FormGroup>
                    <label for="facultyName"> Faculty Name: {courseselected?.facultyName}
                    </label>

                </FormGroup>

                <FormGroup>
                    <label for="duration"> Course Duration: {courseselected?.duration}</label>

                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description: {courseselected?.description}</label>

                </FormGroup>
                {/* <FormGroup>
                    <label for="dateOfPurchase">Date of Purchasing: {courseselected?.dateOfPurchase}</label>

                </FormGroup> */}
                <Container className="text-center">
                    <Button 
                     onClick={() => setModalOpenStatus(true)}
                    
                    // onClick={handleSubmit}
                        color="success">
                        Register
                    </Button>
                    <Button color="primary" onClick={() => navigate(-1)}>
                        Go Back
                    </Button>

                    {/* <Link to={`/course/:id/${courseselected.id}`} onClick={(courseselected?.title)}  className="btn btn-warning me-md-10"
              >Submit</Link> */}
                </Container>
                <div>
                    {/* <Button
                        color="danger"
                        onClick={function noRefCheck() { }}
                    >
                        Click Me
                    </Button> */}
                    <Modal
                    isOpen={modelOpenStatus}
                        // toggle={modelOpenStatus}
                    >
                        <ModalHeader toggle={function noRefCheck() { }}>
                           
                        </ModalHeader>
                        <ModalBody>
                            Are you sure you want to register?
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={handleSubmit}
                                // onClick={function noRefCheck() { }}
                            >
                                Register
                            </Button>
                            {' '}
                            <Button onClick={() => setModalOpenStatus(false)}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </Form>

        </Fragment>
    )
}




export default CourseSelected;






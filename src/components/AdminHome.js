import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Header from './Header';
import Menus from './Menus';
import { Row, Col } from "reactstrap";
import { Navigate } from 'react-router-dom';
import { useState } from 'react'
const AdminHome = () => {
    const [willRedirect, setWillRedirect] = useState(false)
    useEffect(() => {
        // const adminId = "example@gmail.com"
        // const userId = localStorage.getItem.id
        // if (userId !== adminId) {
            // redirect to home
            <div className="container">
                {
                    (willRedirect) ?
                        <Navigate to="/login" />
                        :
                        ""
                }
            </div>
        
        document.title = "Home||CourseRegistration";
    }, []);

    return (
        <div class="jumbotron text-center bg-success">
            <Header />
            <h3>Expand your career opportunities </h3>
            <p>
                Developed by Saumya Dadhich for basic understanding of web development.
            </p>
            {/* <div class="container">
                    <Button  
                    color="warning" outline>
                    Start Using</Button>
                </div> */}
            <Row>
                <Col md={4}>
                    <Menus />
                </Col>
            </Row>

        </div>
    );
}
export default AdminHome;




import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';



const Home = () => {
    
   /* const shoot = () => {
        //alert("Great Shot!");
        const history = useHistory();
  
    shoot = () =>{ 
    let path = `Menus`; 
    history.push(path);
  }*/
        
      
    useEffect(()=>{
        document.title="Home||CourseRegistration";
    },[]);

    return (
        <div class="jumbotron text-center bg-success">
            
                <h3>Expand your career opportunities </h3>
                <p> 
                Developed by Saumya Dadhich for basic understanding of react
                </p>
                <div class="container">
                    <Button  
                    color="warning" outline>
                    Start Using</Button>
                </div>
        </div>



    );
    }


export default Home;








/*import React from "react";
import { Form } from "reactstrap";
import {Jumbotron} from "reactstrap";

const Home=()=>{
    return (
    <div>
        <Jumbotron>
            <h1>
                Learn with Saumya
            </h1>
            <p>
                This project contains React Js as a front end and
                Java With Backend.
            </p>
        </Jumbotron>
    </div>
    );
};
export default Home;*/
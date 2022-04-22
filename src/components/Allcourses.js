import React, { useState,useEffect } from "react";
import Course from "./Course"
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses=()=>{

    useEffect(()=>{
        document.title="All Courses||CourseRegistration";
    },[]);

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success message 
                //console.log(response);
                console.log(response.data);
                toast.success("courses has been loaded");
                setCourses(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.success("Something went wrong");
            }
        )
    };

//calling loading course function
useEffect(()=>{
    getAllCoursesFromServer();
} ,[]);

    const[courses,setCourses]=useState([]);
        
    const UpdateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id !=id));

    }
    return(
        <div>
            <h1> All Course</h1>
            <p>List of all courses are as follows</p>

            {
                courses.length>0 ?
                 courses.map((item)=> <Course key={item.id} course={item} update={UpdateCourses}/>)
                 :"No Courses"
}
        </div>
    );
}
export default Allcourses;
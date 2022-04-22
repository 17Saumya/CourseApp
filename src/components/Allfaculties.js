import React, { useState,useEffect } from "react";

import Faculty from "./Faculty";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allfaculties=()=>{

    useEffect(()=>{
        document.title="All Faculties||CourseRegistration";
    },[]);

    const getAllFacultiesFromServer=()=>{
        axios.get(`${base_url}/faculties`).then(
            (response)=>{
                //success message 
                //console.log(response);
                console.log(response.data);
                toast.success("Faculties has been loaded");
                setFaculties(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.success("Something went wrong");
            }
        )
    };

//calling loading faculty function
useEffect(()=>{
    getAllFacultiesFromServer();
} ,[]);

    const[faculties,setFaculties]=useState([]);
        
    const UpdateFaculties=(id)=>{
        setFaculties(faculties.filter((c)=>c.id !=id));

    }
    return(
        <div>
            <h1> All Faculties</h1>
            <p>List of all faculties are as follows</p>

            {
                faculties.length>0 ?
                 faculties.map((item)=> <Faculty key={item.id} faculty={item} update={UpdateFaculties}/>)
                 :"No Faculties"
}
        </div>
    );
}
export default Allfaculties;
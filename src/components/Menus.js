import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";





const Menus=()=>{
    return(
        <ListGroup>
          <ListGroupItem>     
            {/* <Link a   to="/logout" action>
              logout  
            </Link> */}
            </ListGroupItem> 

            <ListGroupItem>
            <Link a   to="/add-course" action>
              Add Course 
            </Link>
            </ListGroupItem>

            <ListGroupItem>
            <Link a  to="/view-courses" action >
              View Courses 
            </Link>
            </ListGroupItem>


            {/* <ListGroupItem>
            <Link a className="List-group-item list-group-action"  to="/add-faculty" action >
              Add Faculty
            </Link>
            </ListGroupItem>

            <ListGroupItem>
            <Link a className="List-group-item list-group-action"  to="/view-faculties" aria-current="page" action >
              View Faculties 
            </Link>
            </ListGroupItem> */}

            <ListGroupItem>
            <Link a className="List-group-item list-group-action"  to="/studentpurchase" aria-current="page" action >
              Student Register Details
            </Link>
            </ListGroupItem>
        </ListGroup>

        
    );
}
export default Menus;
 



{/*const Menus=()=>{
    return(

      
      <ListGroup>
              
            {/*<ListGroupItem  className="List-group-item list-group-action"  tag="a" href="/Form" action>
              Sign up
            </ListGroupItem>*/}
        {/*   <ListGroupItem  className="List-group-item list-group-action"  tag="a" href="/" action>
              Home  
          </ListGroupItem>

            <ListGroupItem  className="List-group-item list-group-action" tag="a" href ="/add-course" action>
              Add Course 
            </ListGroupItem>
            

            <ListGroupItem className="List-group-item list-group-action" tag="a" href ="/view-courses" action >
              View Courses 
            </ListGroupItem>
            <br/>
            <br/>
            <ListGroupItem className="List-group-item list-group-action" tag="a" href="/add-faculty" action>
              Add Faculty
            </ListGroupItem>
            <ListGroupItem className="List-group-item list-group-action" tag="a" href="/view-faculty" action>
              View Faculty
            </ListGroupItem>
        
            <ListGroupItem className="List-group-item list-group-action" tag="a" href="orders" action>
              Orders 
            </ListGroupItem>




         {/*<ListGroupItem className="List-group-item list-group-action" tag="a" href="#" action>
            About
            </ListGroupItem>

            <ListGroupItem className="List-group-item list-group-action" tag="a" href="#" action>
              Contact  
            </ListGroupItem>*/}
    {/*}  </ListGroup>
        
    )
};*/}




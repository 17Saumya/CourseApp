import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";





/*const Menus=()=>{
    return(
        <ListGroup>      
            <Link className="List-group-item list-group-action" tag="a"  to="/" action>
              Home  
            </Link>

            <Link className="List-group-item list-group-action" tag="a" to="/add-course" action>
              Add Course 
            </Link>
            

            <Link className="List-group-item list-group-action" tag="a" to="/view-courses" action >
              View Courses 
            </Link>
            <Link className="List-group-item list-group-action" tag="a" to="#" action>
              About  
            </Link>

            <Link className="List-group-item list-group-action" tag="a" to="#" action>
              Contact  
            </Link>
        </ListGroup>

        
    );
}*/

 



const Menus=()=>{
    return(

      
      <ListGroup>
              
            {/*<ListGroupItem  className="List-group-item list-group-action"  tag="a" href="/Form" action>
              Sign up
            </ListGroupItem>*/}
           <ListGroupItem  className="List-group-item list-group-action"  tag="a" href="/" action>
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
      </ListGroup>
        
    )
};


export default Menus;

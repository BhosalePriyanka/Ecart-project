import React from 'react';
import { AiOutlineShoppingCart} from "react-icons/ai";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar , Container, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import {useNavigate} from 'react-router-dom';

export const NavBar = () => {
const item = useSelector(state => state.item);

const userDetails = JSON.parse(localStorage.getItem("user"));

const navigate = useNavigate();


function logout(){
   localStorage.clear();
   navigate("/Login", { replace: true });
}
return(
<> 

<Navbar bg="dark" variant="dark" expand="lg" fixed="top" className = "text-uppercase h4">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" variant="primary" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link> 
        <Link to = {`./ProductListing`}>Home</Link>
        </Nav.Link>
      { userDetails ? '' :
        <Nav.Link>    
         <Link to = {`./Login`}> Login </Link>
        </Nav.Link>
       
      }
        <Nav.Link>
        <Link to = {`./Cart`}> <AiOutlineShoppingCart/>{item.length} </Link>
        </Nav.Link>
       

    { userDetails ? 
        <NavDropdown title={ userDetails && userDetails.username} id="basic-nav-dropdown">
          <NavDropdown.Item onClick = {logout}>Logout</NavDropdown.Item>
          </NavDropdown>
          : ''}
         </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>

</>
)
}

export default NavBar;
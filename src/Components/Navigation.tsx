import React, {useState} from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handletoggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Navbar color="dark" className="myNavBar" fluid dark expand="md">
          <NavbarBrand href="/">Quizee</NavbarBrand> 
          <NavbarToggler onClick={handletoggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="#">Home</NavLink>
            </NavItem> 

            <NavItem>
                <NavLink href="#quizes">Our Quizes</NavLink>
            </NavItem> 

            <NavItem>
                <NavLink href="#about">About</NavLink>
            </NavItem>            

            </Nav>
          </Collapse>
        </Navbar>            
        </>
    )
}

export default Navigation

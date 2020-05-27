import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>

             <NavLink className="d-inline p-2 bg-dark text-white"
            to="/customer">Customer</NavLink> 
            <br />
            <NavLink className="d-inline p-2 bg-dark text-white"
            to="/washer">Washer</NavLink> 
            <br />
            <NavLink className="d-inline p-2 bg-dark text-white"
            to="/orderManagament">Order Management</NavLink> 
            <br />
            </Nav>
            </Navbar.Collapse>
            </Navbar>

        );
    }
}


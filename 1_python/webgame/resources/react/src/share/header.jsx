import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
    constructor() {
        super();
    }

    getNavbarContent(authenticated) {
        return (
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Games" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/othello">Othello</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        );
    }

    render() {
        let navbarContent = this.getNavbarContent();

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">WebGame</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {navbarContent}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById("header")
);
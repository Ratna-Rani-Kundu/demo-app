import React from 'react';
import { Form, FormControl, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Nevigation = () => {
    return (
        <div>
            <Navbar bg="warning" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
     <Stack direction="horizontal" gap={3}>
     <NavLink
        to="/home"
        activeStyle={{
        fontWeight: "bold",
          color: "red"
        }}
>
  Home
</NavLink>
     <NavLink
        to="/Employee"
        activeStyle={{
        fontWeight: "bold",
          color: "red"
        }}
>
  Emolyee
</NavLink>
</Stack>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Nevigation;
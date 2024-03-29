import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Nanna() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Sir Ki Dukaan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">All</Nav.Link>
            <Nav.Link href="/bappilehari">Jewelery</Nav.Link>
            <Nav.Link href="/electronic">Electronic</Nav.Link>
            <Nav.Link href="/aadmikakapda">Men's Clothing</Nav.Link>
            <Nav.Link href="/auratlogokakapda">Women's Clothing</Nav.Link>
            <Nav.Link href="/postItem">Post Data</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

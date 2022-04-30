import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom"

export const Payment = () => {
        return (
        <div className='container'>
  <Navbar bg="light" variant="light">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/" activeClassName="active">Credit/Debit Card</Nav.Link>
      <Nav.Link as={Link} to="/BankTransfer">Bank Transfer</Nav.Link>
      <Nav.Link as={Link} to="/Paypal">Paypal</Nav.Link>
    </Nav>
  </Navbar>
        </div>
    )
}

export default Payment;

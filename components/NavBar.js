/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function NavBar() {
  const { user } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand className="title">SPICES AT YOUR DOCK</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/products">
              <Nav.Link>Products</Nav.Link>
            </Link>
            <Link passHref href="/categories">
              <Nav.Link>Categories</Nav.Link>
            </Link>
            <Link passHref href={`/sellerDash/${user.id}`}>
              <Nav.Link>Seller Dashboard</Nav.Link>
            </Link>
            <Link passHref href="/sellers">
              <Nav.Link>Sellers</Nav.Link>
            </Link>
            <Link passHref href={`/customerOrder/${user.id}`}>
              <Nav.Link>Customer Orders</Nav.Link>
            </Link>
            <Link passHref href={`/cart/${user.id}`}>
              <Nav.Link>Cart</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

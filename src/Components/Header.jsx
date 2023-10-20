/* eslint-disable react/no-unescaped-entities */
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="p-1">
        <Navbar.Brand href="#home">
          <img src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog1.png?alt=media&token=7c4cd48b-8c13-44e3-a171-ce5b0b7ea895" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-3 m-auto my-3">
            <Link to="/home" className="mt-2">Home</Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <ul>
                <li className="my-2 " style={{marginLeft: '-10px'}}>
                  <Link to="/about">About Us</Link>
                </li>
                <li className="my-2 " style={{marginLeft: '-10px'}}>
                  <Link to="OurTeam">Our Team</Link>
                </li>
                <li className="my-2 " style={{marginLeft: '-10px'}}>
                  <Link to="faq">FAQ'S</Link>
                </li>
                <li className="my-2 " style={{marginLeft: '-10px'}}>
                  <Link to="booking">Booking</Link>
                </li>
                <li className="my-2 " style={{marginLeft: '-10px'}}>
                  <Link to="error">Error 404</Link>
                </li>
                <li style={{marginLeft: '-10px'}}>
                  <Link to="login">Login / Resgister</Link>
                </li>
              </ul>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Service Detail
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="contact" className="mt-2">Contact Us</Link>

            <Button
              style={{
                background: "#5256c6",
                border: "none",
                width: "fit-content",
              }}
              onClick={handleShow}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Search</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-100 border-0 "
                />
              </Modal.Body>
            </Modal>

            {useMediaQuery("(min-width: 1200px)") && (
              <Nav.Link href="#phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-telephone-fill mx-1"
                  viewBox="0 0 16 16"
                  style={{color: '#5256c6'}}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>{" "}
                <span style={{color: '#565acf'}}>
                
                0111111111
                </span>
              </Nav.Link>
            )}
          </Nav>
          <Button style={{ background: "#5256c6", border: "none" }}>
            <Link to="contact">
              <span style={{ color: "#fff" }}>CONTACT US</span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right-square-fill ms-3"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
            </svg>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

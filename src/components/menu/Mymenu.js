import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { motion, AnimatePresence } from "framer-motion";

import Home from "../Home";
import About from "../About";
import Online from "../Online";
import Offline from "../Offline";
import Contact from "../Contact";
import LocateUs from "../LocateUs";
import Test from "../Test";
import logo from "../../img/logo.png";
//import Mymenu from './components/menu/Mymenu';

import { ArrowDown } from "react-bootstrap-icons";

function Mymenu() {
  const location = useLocation();

  return (
    <div>
      {/* <Router basename="/"> */}

      <Navbar bg="white" expand="sm">
        <Container fluid>
          <Navbar.Brand to="/">
            {" "}
            <img src={logo} alt="RagersVille" style={{ maxHeight: 50 }} /> .
            {/* Add Logo  */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"   />

          <Navbar.Collapse id="navbarScroll" className="justify-content-end me-5">
          <div >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
            
              <Nav.Link as={Link} to={"/"} className="text-primary fs-6">
                Home
              </Nav.Link>
              {/* <Nav.Link to={`/About`}>About</Nav.Link> */}

              <Nav.Link as={Link} to={"/About"} className="text-warning fs-6">
                About
                <div className="d-block w-100"></div>
              </Nav.Link>

              <NavDropdown
                title={
                  <span className="text-primary ">
                    Discover <ArrowDown color="royalblue" size={12} />{" "}
                  </span>
                }
                id="navbarScrollingDropdown"
                className="fs-6"
              >
                <NavDropdown.Item
                  as={Link}
                  to={"/About"}
                  className="text-success"
                >
                  About RagersVille
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to={"/"}
                  className="text-primary"
                >
                  Mission & Vision
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={"/Contact"}>
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>

{/* nav link start contact */}

<NavDropdown
                title={
                  <span className="text-primary ">
                    Reach Us <ArrowDown color="royalblue" size={12} />{" "}
                  </span>
                }
                id="navbarScrollingDropdown"
                className="fs-6"
              >
                <NavDropdown.Item
                  as={Link}
                  to={"/Contact"}
                  className="text-success"
                >
                  Contact us
                </NavDropdown.Item>
                <NavDropdown.Divider />
               
                <NavDropdown.Item as={Link} to={"/LocateUs"}>
                  Locate Us
                </NavDropdown.Item>
              </NavDropdown>


{/* nav link contact end */}


              <NavDropdown.Item
                  as={Link}
                  to={"/Contact"}
                  className="text-success"
                >
                  Contact Us
                </NavDropdown.Item>

              {/* <Nav.Link as={Link} to={"/Test"} disabled>
                Test
              </Nav.Link> */}
            </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />

            <Route path="/Online" element={<Online />} />
            <Route path="/Offline" element={<Offline />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Locateus" element={<LocateUs />} />
            <Route path="/Test" element={<Test />} />
          </Routes>
        </AnimatePresence>
      </div>

      {/* </Router>  */}
    </div>
  );
}

export default Mymenu;

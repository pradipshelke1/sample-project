import React from "react";
import { NavLink } from "react-router-dom";
import { removeLogin } from "../redux/actions/LoginCreators";
import { connect } from "react-redux";
import { MdVideoSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
// import {Container,NavLink,Nav} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/cgpi-logo.png";
const Navigation = (props) => {
  function handleLogOut() {
    props.removeLogin();
  }
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={NavLink} to={"/videos"}>
            <img src={logo} width="90" height="65" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                to={"/videos"}
                className="font-weight-bold"
              >
                Videos
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to={"/profile"}
                className="font-weight-bold"
              >
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeLogin: () => dispatch(removeLogin()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

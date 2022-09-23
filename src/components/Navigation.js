import React from "react";
import { NavLink } from "react-router-dom";
import { removeLogin } from "../redux/actions/LoginCreators";
import { connect } from "react-redux";
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
          <Navbar.Brand as={NavLink} to={"/videos"} className="ml-auto" style={{marginLeft:"550px"}}>
            <img src={logo} width="90" height="65" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
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

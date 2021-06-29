import React, { Component } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <div className="d-flex align-items-center">
            <Navbar.Brand as={Link} to="/">
              <img className="blog-navbar-brand" alt="logo" src={logo} />
            </Navbar.Brand>
            <Button
              as={Link}
              to="/authors"
              className="menu-button"
              size="lg"
            >
              Authors
            </Button>
            <Button
              as={Link}
              to="/email"
              className="menu-button"
              size="lg"
            >
              Check Email
            </Button>
          </div>

          <Button
            as={Link}
            to="/post/new"
            className="blog-navbar-add-button bg-dark"
            size="lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg>
            Post Article
          </Button>
        </Container>
      </Navbar>
    );
  }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light nav-white fixed-top">
        <Link className="navbar-brand" to="/">
          <h3>My Garage</h3>
        </Link>
        <Button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </Button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                to="/#services"
              >
                About
              </Link>
            </li>
            <li className="nav-item js-scroll-trigger">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;

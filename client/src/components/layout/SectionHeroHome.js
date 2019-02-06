import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import {  Button, Form, Label, Input, FormGroup } from "reactstrap";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return(
            <div className="hero-home hero-2">
                    <div className="container-m">
                        <div className="app-hero">
                            <div className="intro-block">
                                <h4>MyGarage</h4>
                                <h1>Manage all your car information in just one place.</h1>
                                {/* <p>Best in class will render your huge chunks into
                                meaningful data. Login to the app now.</p> */}
                            </div>
                            <div className="hero-img wow fadeInUp">
                            <img src="https://s3.amazonaws.com/garage-images-app/car.png" alt="Hero Image"/>
                          </div>
                    </div>
                </div>
            </div>
            )
    }

}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    // errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));
  
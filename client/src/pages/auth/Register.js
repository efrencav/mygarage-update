import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Container, Button, Form, Label, Input, Col, Row, FormGroup } from "reactstrap";
import "./style.css";


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

    return (
      
      <Container className="hero-img">
      <div className="form-group">
        <Row className="padding-top-150-px">
          <Col md="8" className="signup-form">
            <Link to="/" className="btn-flat waves-effect">
              <i className="fa-long-arrow-left"></i> Back to
              home
            </Link>
            <Col md="12">
              <h4 className="mt-3">
                <b>Register</b> below
              </h4>
              <p className="mt-3">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </Col>
            <Form noValidate onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name" className="signup-form" placeholder="Enter Your Name..." >Your Name</label>
                <span className="text-danger">{errors.name}</span>
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <Label htmlFor="email" className="signup-form" placeholder="Enter Your Email..." >Email</Label>
                <span className="text-danger">{errors.email}</span>
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <Label htmlFor="password" className="signup-form" placeholder="Enter Your Password..." >Password</Label>
                <span className="text-danger">{errors.password}</span>
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <Label htmlFor="password2" className="signup-form" placeholder="Enter Your Email..." >Password Confirmation</Label>
                <span className="text-danger">{errors.password2}</span>
              </FormGroup>
              <Col md="12">
                <Button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn mt-3"
                >
                  Sign up
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
        </div>  
      </Container>
    );
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

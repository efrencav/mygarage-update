import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Container, Form, Button, Label, Input, Col, Row, FormGroup  } from "reactstrap";
// import Jumbotron from "../../components/Jumbotron";
import "./style.css";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <Container className="hero-img">
        <div className="form-group">
        <Row className="padding-top-150-px">
          <Col md="8" className="signup-form">
          <Button>
            <Link to="/">
              Back to home
            </Link>
            </Button>
            <Col md="12">
              <h4 className="mt-3">
                <b>Login</b> below <br />
              </h4>
              <p className="mt-3">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </Col>
            <Form noValidate onSubmit={this.onSubmit}>
              <FormGroup className="input-field">
                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <Label htmlFor="email" className="mt-3">Email</Label>
                <span className="text-danger">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <Label htmlFor="password" className="mt-3">Password</Label>
                <span className="text-danger">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
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
                  className="btn"
                >
                  Login
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

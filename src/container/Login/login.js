import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Container, Navbar, NavbarBrand, Nav } from 'reactstrap';
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/authAction';
import classes from '../Login/login.module.css';


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
    }
    handleUserName(event) {
        this.setState({ userName: event.target.value })
    }

    handlePassword(event) {
        this.setState({ password: event.target.value })
    }
    onSubmitHandler(event) {
        event.preventDefault();
        this.props.onAuth(this.state.userName, this.state.password)
        this.setState({ userName: "" })
        this.setState({ password: "" })

    }

    render() {
        let message = this.props.mess
        if (this.props.stat === 200) {
            this.props.history.replace('/show_ride')
        }
        return (
            <div>
                <Navbar color="dark" >
                    <Nav className="container-fluid">
                        <div style={{ color: "white" }} >
                            <NavbarBrand>Car Pool App</NavbarBrand>
                        </div>
                    </Nav>
                </Navbar>
                <Container className={classes.App}>
                    <Form onSubmit={this.onSubmitHandler.bind(this)} className={classes.form}>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">UserName</Label>
                                <Input type="text" name="UserName" id="exampleEmail" placeholder="UserName" value={this.state.userName} onChange={this.handleUserName.bind(this)} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password" value={this.state.password} onChange={this.handlePassword.bind(this)} required />
                                <div className={classes.fade}>
                                    {this.props.isAuth ? null : message}
                                </div>
                            </FormGroup>
                        </Col>

                        <Button>Login</Button>
                    </Form >
                </Container >
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mess: state.authen.message,
        stat: state.authen.status,
        isAuth: state.authen.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (userName, password) => dispatch(authActions.auth(userName, password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(login);
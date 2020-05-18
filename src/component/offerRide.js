import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, Navbar, Nav, NavbarBrand } from 'reactstrap';
import axios from 'axios';
import classes from './offerride.module.css';

class OfferRide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formValues: {},
            message: null,
            success: false,
            formIsValid: true,
            error: ""
        }
    }
    onChange = (event) => {
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;
        formValues[name] = value;
        this.setState({ formValues })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.formIsValid) {
            const data = {
                name: this.state.formValues.Name,
                car: this.state.formValues.Car,
                seatsLeft: this.state.formValues.SeatsAvailable,
                pickUp: this.state.formValues.StartLocation,
                destination: this.state.formValues.Destination
            }
            axios.post("http://localhost:5000/offer_ride", data)
                .then(res => {
                    console.log(res.data)
                    this.setState({ message: res.data.message })
                    this.setState({ success: true })
                    console.log(this.state.message)
                }).catch(err => {
                    console.log(err)
                })
        }
        document.getElementById("theForm").reset()
    }
    goback() {
        this.props.history.replace('/show_ride')
    }
    render() {
        let success = this.state.success;
        return (
            <div>
                <Navbar color="dark" >
                    <Nav className="container-fluid" className="ml-auto">
                        <NavbarBrand href="/">Logout</NavbarBrand>
                    </Nav>
                </Navbar>

                < Form onSubmit={this.onSubmit.bind(this)} id="theForm" className={classes.App}>
                    <FormGroup>
                        <Label for="exampleText">Name</Label>
                        <Input type="text" name="Name" id="exampleText" value={this.state.formValues.name} onChange={this.onChange.bind(this)} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Start Location</Label>
                        <Input type="text" name="StartLocation" id="exampleText" value={this.state.formValues.name} onChange={this.onChange.bind(this)} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Destination</Label>
                        <Input type="text" name="Destination" id="exampleText" value={this.state.formValues.name} onChange={this.onChange.bind(this)} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Car</Label>
                        <Input type="text" name="Car" id="exampleText" value={this.state.formValues.name} onChange={this.onChange.bind(this)} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Seats Available</Label>
                        <Input type="number" name="SeatsAvailable" id="exampleText" value={this.state.formValues.name} onChange={this.onChange.bind(this)} required />
                        {success ? null : this.state.error}
                        <div className={classes.button}>
                            <Button className={classes.button1}>Submit</Button>
                            <Button className={classes.button1} onClick={() => this.goback()}>Go Back</Button>
                        </div>
                    </FormGroup>
                    <div style={{ color: "Green" }}>
                        {success ? this.state.message : null}
                    </div>
                </Form >
            </div>
        )
    }
}

export default (OfferRide);
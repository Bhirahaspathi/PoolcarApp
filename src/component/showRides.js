import React from 'react';
import { connect } from 'react-redux';
import Table from '../container/table';
import ToInfo from '../container/toInfotable';
import FromInfo from '../container/fromInfotable';
import * as fromInfoAction from '../store/actions/index';
import * as toInfoAction from '../store/actions/index';
import * as showallAction from '../store/actions/index';
import classes from '../component/showride.module.css';
import {
  Card, CardText, CardBody, Button, CardHeader, Row, Col, Navbar, NavbarBrand, Nav
} from 'reactstrap';

class Showrides extends React.Component {
  navigateToOffer() {
    this.props.history.replace('/offer_ride')
  }
  render() {
    let button;
    if (this.props.ride) {
      button = <React.Fragment>
        <Button className={classes.button1} color="primary" size="sm" id="From Infosys" onClick={this.props.onfromInfo}>From Infosys</Button>
        <Button className={classes.button1} color="primary" size="sm" id="To Infosys" onClick={this.props.ontoInfo}>To Infosys</Button>
      </React.Fragment>
    }
    let table, table1;
    if (this.props.fromin) {
      table = <FromInfo tab={this.props.ride} />
    }
    if (this.props.toin) {
      table = <ToInfo tab={this.props.ride} load={this.props.loading} />
    }
    if (this.props.show) {
      table1 = <Table tab={this.props.ride} load={this.props.load} />
    }
    return (
      <div>
        <Navbar color="dark" >
          <Nav className="container-fluid" className="ml-auto">
            <NavbarBrand href="/">Logout</NavbarBrand>
          </Nav>
        </Navbar>
        < div className={classes.App} >
          <Row >
            <Col>
              <Card>
                <CardHeader tag="p" className="text-left">Book a ride</CardHeader>
                <CardBody>
                  <CardText>car Pool is an online application which enables users to share ride with others.you can either book a ride or offer a ride.</CardText>
                  <div className={classes.button}>
                    <Button className={classes.button1} color="primary" size="sm" onClick={this.props.onshowRide}>Show All Rides</Button>
                    {button}
                    <div style={{ padding: "10px" }}>
                      {table}
                      {table1}
                    </div>
                  </div>
                  <Button className={classes.button1} color="primary" size="sm" onClick={() => this.navigateToOffer()}>Offer a ride</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div >
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    ride: state.redu.offersList,
    data: state.redu.datas,
    isAuth: state.authen.isAuthenticated,
    fromin: state.redu.fromInfo,
    toin: state.redu.toInfo,
    show: state.redu.showAll
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onshowRide: () => dispatch(showallAction.showall()),
    onfromInfo: () => dispatch(fromInfoAction.frominfo()),
    ontoInfo: () => dispatch(toInfoAction.toinfo())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Showrides);
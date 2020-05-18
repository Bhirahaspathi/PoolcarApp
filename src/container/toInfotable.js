import React, { Component } from 'react';
import { Table, Card, CardTitle } from 'reactstrap';
import classes from '../container/table.module.css';
import { connect } from 'react-redux';
import * as showRideActions from '../store/actions/index';

class toInfotable extends Component {
    rideDetail = () => {
        let rideDetails = []
        if (this.props.Inride) {
            let data = this.props.Inride;
            rideDetails.push(<tr key={Math.random()}>
                {<td key={data.name}>{data.name}</td>}
                <td key={data.pickUp}>{data.pickUp}</td>
                <td key={data.destination}>{data.destination}</td>
                <td key={data.car}>{data.car}</td>
                <td key={data.seatsLeft}>{data.seatsLeft}</td>
            </tr>);
        }
        return rideDetails;
    }
    rideDetailHeader = () => {
        let res = []
        if (this.props.Inride) {
            let data = this.props.Inride;
            let items = Object.keys(data)
            res.push(<th key={items[1]}>{items[1]}</th>)
            res.push(<th key={items[4]}>{items[4]}</th>)
            res.push(<th key={items[5]}>{items[5]}</th>)
            res.push(<th key={items[2]}>{items[2]}</th>)
            res.push(<th key={items[3]}>{items[3]}</th>)
        }
        return res;
    }
    generateHeader() {
        let res = [];
        if (this.props.tab) {
            for (let i = 0; i < this.props.tab.length - 1; i++) {
                let obj = this.props.tab[i]
                let items = Object.keys(obj)
                if (res.length < 3) {
                    res.push(<th key={items[4]}>{items[4]}</th>)
                    res.push(<th key={items[5]}>{items[5]}</th>)
                    res.push(<th key={items[3]}>{items[3]}</th>)
                }
            }
            return res;
        }
    }
    generateBody() {
        let res = [];
        if (this.props.tab) {
            for (let i = 0; i < this.props.tab.length; i++) {
                let obj = this.props.tab[i]
                if (obj.destination === "Infosys") {
                    res.push(<tr key={i}>
                        <td key={obj.pickUp} onClick={() => this.props.onselectData(obj)}>{obj.pickUp}</td>
                        <td key={obj.destination}>{obj.destination}</td>
                        <td key={obj.seatsLeft}>{obj.seatsLeft}</td>
                    </tr>);
                }
            }
        }
        return res;
    }
    render() {
        let card;
        if (this.props.Inride) {
            card = <Card>
                <CardTitle>Ride Details</CardTitle></Card>
        }
        return (
            <div>
                <Table bordered hover className={classes.table}>
                    <thead>
                        <tr >
                            {this.generateHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.generateBody()}
                    </tbody>
                </Table>

                {card}
                <Table bordered hover className={classes.table}>
                    <thead>
                        <tr>
                            {this.rideDetailHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.rideDetail()}
                    </tbody>
                </Table>
            </div>);
    }

}
const mapStateToProps = state => {
    return {
        Inride: state.redu.datas,
        load: state.redu.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onselectData: (data) => dispatch(showRideActions.setRides(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(toInfotable);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import VehicleReview from '../VehicleReview/VehicleReview.jsx';


class MyOrder extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MY_ORDER' });
    }

    render() {
        return (
            <div>
                <h2>Vehicles you booked</h2>
                {this.props.reduxState.myOrderReducer.map(order => {
                    if(order.status === 'Declined') {
                        return (
                            <div key={order.id}>
                                Your request for {order.make} {order.model} on <br />
                                <Moment format='MM/DD/YYYY'>{order.start_date}</Moment> to <Moment format='MM/DD/YYYY'>{order.end_date}</Moment>
                                <br />
                                is Declined
                            </div>
                        )
                    } else if(order.status === 'Approved' || order.status === 'Pending') {
                        return(
                            <div key={order.id}>
                                Your request for {order.make} {order.model} on <br />
                                <Moment format='MM/DD/YYYY'>{order.start_date}</Moment> to <Moment format='MM/DD/YYYY'>{order.end_date}</Moment>
                                <br />
                                is {order.status}
                                <br />
                                <VehicleReview carRate={order.vehicle_id} />
                            </div>
                        )
                    }
                    // return (
                    //     <div key={order.id}>
                    //             Your request for {order.make} {order.model} on <br />
                    //             <Moment format='MM/DD/YYYY'>{order.start_date}</Moment> to <Moment format='MM/DD/YYYY'>{order.end_date}</Moment>
                    //             <br />
                    //             is {order.status}
                    //             <br/>
                    //             <VehicleReview carRate={order.vehicle_id} />
                    //     </div>
                    // )
                })}
            </div>
            
        )
    }
}


const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}


export default connect(mapStateToProps)(MyOrder);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';


class MyOrder extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MY_ORDER' });
    }

    render() {
        return (
            <div>
                <h2>Vehicles you booked</h2>
                {this.props.reduxState.myOrderReducer.map(order => {
                    return (
                        <div key={order.id}>
                            <p>
                                Your request for {order.make} {order.model} on <br />
                                <Moment format='MM/DD/YYYY'>{order.start_date}</Moment> to <Moment format='MM/DD/YYYY'>{order.end_date}</Moment>
                                <br />
                                is {order.status}
                            </p>
                        </div>
                    )
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
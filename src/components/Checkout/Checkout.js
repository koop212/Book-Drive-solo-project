import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {




    handleSubmit = () => {
        // event.preventDefault();
        // if(this.state.isClicked) {
        //     alert('Are you sure you want to checkout this car?')
        //     console.log('is clicked');
        //     this.props.dispatch({ type: 'ADD_ORDER', payload: this.props.dates })
        // }
        this.props.dispatch({ type: 'ADD_ORDER', payload: {start_date: this.props.startDate, end_date: this.props.endDate, vehicle_id: this.props.carId} })
    }

    render() {
        console.log('dates showing from checkout component', this.props.startDate, this.props.endDate);
        return(
            <button className="checkoutButton" onClick={this.handleSubmit}>Checkout</button>
        )
    }
}

export default connect()(Checkout);
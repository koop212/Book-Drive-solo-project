import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {

    state = {
        // isClicked: true,
        start_date: this.props.startDate,
        end_date: this.props.endDate,
        vehicle_id: this.props.carId,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // if(this.state.isClicked) {
        //     alert('Are you sure you want to checkout this car?')
        //     console.log('is clicked');
        //     this.props.dispatch({ type: 'ADD_ORDER', payload: this.props.dates })
        // }
        this.props.dispatch({ type: 'ADD_ORDER', payload: this.state })
    }

    render() {
        console.log('dates showing from checkout component', this.props.dates);
        
        return(
            <button onClick={this.handleSubmit}>Checkout</button>
        )
    }
}

export default connect()(Checkout);
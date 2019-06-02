import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('is clicked');
        this.props.dispatch({type: 'ADD_ORDER', payload: this.props.dates})
    }

    render() {
        console.log('dates showing from checkout component', this.props.dates);
        
        return(
            <button onClick={this.handleSubmit}>Checkout</button>
        )
    }
}

export default connect()(Checkout);
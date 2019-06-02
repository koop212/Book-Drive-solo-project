import React, { Component } from 'react';


class Checkout extends Component {

    handleSubmit = () => {
        console.log('is clicked');
    }

    render() {
        return(
            <button onClick={this.handleSubmit}>Checkout</button>
        )
    }
}

export default Checkout;
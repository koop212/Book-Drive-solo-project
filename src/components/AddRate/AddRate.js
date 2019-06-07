import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddRate extends Component {

    submitRate = () => {
        this.props.dispatch({ type: 'ADD_RATES', payload: { rates: this.props.rate, comment: this.props.comment, vehicle_id: this.props.carRating } })
    }

    render() {
        return(
            <p onClick={this.props.click}><button onClick={this.submitRate}>Submit</button></p>
        )
    }
}


export default connect()(AddRate);
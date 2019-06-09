import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

class AddRate extends Component {

    submitRate = () => {
        Swal.fire({
            type: 'success',
            title: 'Thank you for your review!',
            showConfirmButton: false,
            timer: 2000
        })
        this.props.dispatch({ type: 'ADD_RATES', payload: { rates: this.props.rate, comment: this.props.comment, vehicle_id: this.props.carRating } })
    }

    render() {
        return(
            <p onClick={this.props.click}><button onClick={this.submitRate}>Submit</button></p>
        )
    }
}


export default connect()(AddRate);
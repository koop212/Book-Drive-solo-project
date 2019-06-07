import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { withRouter } from 'react-router-dom'


class Checkout extends Component {


    handleSubmit = () => {
        Swal.fire({
            title: 'Are you sure you want to book this car?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, book it!'
        }).then((result) => {
            if (result.value) {
                this.props.dispatch({ type: 'ADD_ORDER', payload: { start_date: this.props.startDate, end_date: this.props.endDate, vehicle_id: this.props.carId } });
                this.props.history.push('/activity')
                Swal.fire(
                    'Booked!',
                    'Your request has been sent!',
                    'success'
                )
            }
        })
    }

    render() {
        console.log('dates showing from checkout component', this.props.startDate, this.props.endDate);
        return(
            <button className="checkoutButton" onClick={this.handleSubmit}>Checkout</button>
        )
    }
}

export default withRouter(connect()(Checkout));
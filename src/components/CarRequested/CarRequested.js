import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import '../CarRequested/CarRequested.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


class CarRequested extends Component {

    state = {
        approveStatus: 'Approved',
        declineStatus: 'Declined',
        returnedStatus: 'Returned'
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_REQUESTED_CAR' });
    }

    handleApprove = (orderId) => {
        Swal.fire({
            title: 'Are you want to approve the request?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, approve!'
        }).then((result) => {
            if (result.value) {
                this.props.dispatch({ type: 'UPDATE_STATUS', payload: { status: this.state.approveStatus, id: orderId } });
                Swal.fire(
                    'Approved!',
                    'You have approved the request for your vehicle.',
                    'success'
                )
            }
        })
    }

    handleDecline = (id) => {
        Swal.fire({
            title: 'Are you want to decline the request?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, decline!'
        }).then((result) => {
            if (result.value) {
                this.props.dispatch({ type: 'UPDATE_STATUS', payload: { status: this.state.declineStatus, id: id } });
                Swal.fire(
                    'Declined!',
                    'You have declined the request for your vehicle.',
                    'success'
                )
            }
        })
    }

    handleReturned = (id) => {
            Swal.fire({
                title: 'Are you sure the car has been returned?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, it is returned!'
            }).then((result) => {
                if (result.value) {
                    this.props.dispatch({ type: 'UPDATE_STATUS', payload: { status: this.state.returnedStatus, id: id } });
                    Swal.fire(
                        'Returned!',
                        'Your car has been returned.',
                        'success'
                    )
                }
            })
        }
    



    render() {        
        return(
            <div>
                <h2 className="request">Requests for your vehicle</h2>
                {this.props.requestedCar.map(request => {
                    if (request.status === 'Pending') {
                        return (
                            <div key={request.id}>
                                <p><span className="username">{request.username}</span> would like to book your <br />
                                    {request.make} {request.model} for ${request.price} per day <br />
                                    on <Moment format='MM/DD/YYYY'>{request.start_date}</Moment> to <Moment format='MM/DD/YYYY'>{request.end_date}</Moment></p>
                                <button className="twoButtons" onClick={() => this.handleApprove(request.id)}>Approve</button>
                                <button className="twoButtons" onClick={() => this.handleDecline(request.id)}>Decline</button>
                            </div>
                            )
                    } else if (request.status === 'Approved') {
                        return (
                            <div key={request.id}>
                                <p>
                                    <span className="username">{request.username}</span> would like to book your <br />
                                    {request.make} {request.model} for ${request.price} per day <br />
                                    on <Moment format='MM/DD/YYYY'>{request.start_date}</Moment> to <Moment format='MM/DD/YYYY'>{request.end_date}</Moment>
                                    <br/>
                                    {request.status}
                                    <br/>
                                    <button onClick={() => this.handleReturned(request.id)}>Car returned</button>
                                </p>
                            </div>
                        )
                    } else if (request.status === 'Declined' || request.status === 'Returned') {
                        return (
                            <div key={request.id}>
                                <p>
                                    <span className="username">{request.username}</span> would like to book your <br />
                                    {request.make} {request.model} for ${request.price} per day <br />
                                    on <Moment format='MM/DD/YYYY'>{request.start_date}</Moment> to <Moment format='MM/DD/YYYY'>{request.end_date}</Moment>
                                    <br />
                                    {request.status}
                                </p>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return {
        requestedCar: reduxState.requestedCarReducer
    }
}


export default connect(mapStateToProps)(CarRequested);
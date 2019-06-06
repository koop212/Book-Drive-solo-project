import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

class AccountPage extends Component {

    state = {
        email: '',
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_OWNER_VEHICLE' });
    }

    handleChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'UPDATE_EMAIL', payload: {email: this.state.email, id: this.props.reduxState.user.id}})
        console.log('In handleSubmit');
    }


    // Delete vehicle belonging to logged in user
    deleteVehicle = (carId) => {
        Swal.fire({
            title: 'Are you sure you want to delete this car?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.props.dispatch({ type: 'DELETE_VEHICLE', payload: { id: carId } });
                Swal.fire(
                    'Deleted!',
                    'Your car has been deleted.',
                    'success'
                )
            }
        })
        console.log('deleteVehicle function', carId);
    }



    render() {
        return(
            <div>
                <label>Email</label>
                <input placeholder="Update Email" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Update</button>
                <h2>Your Vehicle Listed</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Your Vehicle</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {this.props.reduxState.vehicleOwnerReducer.map((car, i) => {
                                return (
                                    <tr key={i}>
                                        <td key={i}>{car.make} {car.model}</td>
                                        <td><button className="deleteBtn" onClick={() => this.deleteVehicle(car.id)}>Remove</button></td>
                                    </tr>
                                    )  
                            })}
                        
                    </tbody>
                </table>
                <div>
                    <LogOutButton />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(AccountPage);
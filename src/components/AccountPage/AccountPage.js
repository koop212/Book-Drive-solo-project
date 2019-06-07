import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
const styles = {
    carList: {
        justifyContent: 'center',
        width: '400px',
    },
    table: {
        textAlign: 'center',
    }
}

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
        this.refs.clear.value = '';
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
                <input placeholder="Update Email" ref="clear" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Update</button>
                <Grid container >
                    <Grid item>
                        <Paper className={this.props.classes.carList}>
                            <h2>Your Vehicle Listed</h2>
                            
                            <Table className={this.props.classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Your Vehicle</TableCell>
                                        <TableCell>Remove</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    
                                        {this.props.reduxState.vehicleOwnerReducer.map((car, i) => {
                                            return (
                                                <TableRow key={i}>
                                                    <TableCell key={i}>{car.make} {car.model}</TableCell>
                                                    <TableCell><button className="deleteBtn" onClick={() => this.deleteVehicle(car.id)}>Remove</button></TableCell>
                                                </TableRow>
                                                )  
                                        })}
                                    
                                </TableBody>
                            </Table>
                            
                        </Paper>
                    </Grid>
                </Grid>
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

export default withStyles(styles)(connect(mapStateToProps)(AccountPage));
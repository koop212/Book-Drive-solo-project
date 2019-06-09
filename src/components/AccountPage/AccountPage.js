import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
const styles = {
    carList: {
        width: '600px',
        textAlign: 'center',
        marginTop: '80px',
        padding: '30px',
    },
    table: {
        textAlign: 'center',
        width: '600px',
    },
    logOut: {
        margin: '50px',
        textAlign: 'center',
    }
}

class AccountPage extends Component {

    state = {
        email: '',
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_OWNER_VEHICLE' });
        window.scrollTo(0, 0)
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
    }



    render() {
        return(
            <div>
                <Grid container justify="center">
                    <Grid item>
                        <Paper className={this.props.classes.carList}>
                            <h2>Your Vehicle List</h2>
                            <div className={this.props.classes.table}>
                            <Table >
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
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <div className={this.props.classes.logOut}>
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
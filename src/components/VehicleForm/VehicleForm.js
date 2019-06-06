import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../VehicleForm/VehicleForm.css';
import { TextField, Button, Grid, FormGroup, 
        FormControlLabel, Checkbox } from '@material-ui/core';
import { CheckboxOutlineIcon, CheckboxIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import CarFeatures from '../CarFeatures/CarFeatures';

const styles = {
    root: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '500px'
    },
    addButton: {
        margin: '10px'
    }
}


class VehicleForm extends Component {

    state = {
        year: 0,
        make: '',
        model: '',
        description: '',
        price: 0,
        city: '',
        state: '',
        zip: '',
        image_url: '',  
        all_wheel_drive: false,
        pet_friendly: false,
        heated_seats: false,
        convertible: false,
        sunroof: false,
        automatic: false,
        manual: false,
        electric: false,
        gas: false,
        hybrid: false, 
    }

    //Get value of inputs
    handleChangeFor = (propertyName) => (event) => {
        this.setState({
                ...this.state,
                [propertyName]: event.target.value
        })
    }

    handleChange = (name) => (event) => {
        console.log('checkbox clicked')
        this.setState({
            ...this.state,
            [name]: !this.state[name],
        })
    }


    //Submit informations of vehicle
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        let car = this.state;
        if(car.year === '' && car.make === '' && car.model === '' && car.description === '' 
        && car.price === '' && car.city === '' && car.state === '' && car.zip === '' && car.image_url === '') {
            return alert('Please fill in the blank')
        } else {
            this.props.dispatch({type: 'ADD_VEHICLE', payload: this.state});
        }
    }
    

    render() {
        console.log('In vehicleForm', this.props.reduxState.featureReducer)
        return(
            <div>
                <h2 className="formHeader">Tell me about your car</h2>
                <Grid container justify="center">
                <form className={this.props.classes.root} noValidate autoComplete="on">
                    <TextField
                        id="outlined-name"
                        label="Year"
                        fullWidth
                        onChange={this.handleChangeFor('year')}
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Make"
                        fullWidth
                        onChange={this.handleChangeFor('make')}
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Model"
                        fullWidth
                        onChange={this.handleChangeFor('model')}
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Description"
                        fullWidth
                        onChange={this.handleChangeFor('description')}
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Price per day"
                        fullWidth
                        onChange={this.handleChangeFor('price')}
                        margin="dense"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                    <TextField
                        id="outlined-name"
                        label="City"
                        fullWidth
                        onChange={this.handleChangeFor('city')}
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="State"
                        fullWidth
                        onChange={this.handleChangeFor('state')}
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Zip Code"
                        fullWidth
                        onChange={this.handleChangeFor('zip')}
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Add a photo"
                        fullWidth
                        onChange={this.handleChangeFor('image_url')}
                        margin="dense"
                        variant="outlined"
                    />
                    <CarFeatures handleChangeFeatures={this.handleChange} state={this.state} />
                    <Grid container justify="space-around">
                        <Button className={this.props.classes.addButton} onClick={this.handleSubmit} variant="contained" color="primary">Add Vehicle</Button>
                    </Grid>
                </form>
                </Grid>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withStyles(styles)(connect(mapStateToProps)(VehicleForm));
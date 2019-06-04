import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../VehicleForm/VehicleForm.css';
import { TextField, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'



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
        image_url: ''
    }

    //Get value of inputs
    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value
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
        return(
            <div>
                <h2 className="formHeader">Tell me about your car</h2>
                {/* <form>
                    <input onChange={this.handleChangeFor('year')} placeholder="Year" />
                    <input onChange={this.handleChangeFor('make')} placeholder="Make" />
                    <input onChange={this.handleChangeFor('model')} placeholder="Model" />
                    <input onChange={this.handleChangeFor('description')} placeholder="Description" />
                    <input onChange={this.handleChangeFor('price')} placeholder="Price Per Day" />
                    <input onChange={this.handleChangeFor('city')} placeholder="City" />
                    <input onChange={this.handleChangeFor('state')} placeholder="State" />
                    <input onChange={this.handleChangeFor('zip')} placeholder="Zip" />
                    <input onChange={this.handleChangeFor('image_url')} placeholder="Add image url" />
                    <button onClick={this.handleSubmit}>Add Vehicle</button>
                </form> */}
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
                </form>
                </Grid>
                <Grid container justify="space-around">
                    <Button className={this.props.classes.addButton} onClick={this.handleSubmit} variant="contained" color="primary">Add Vehicle</Button>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(connect()(VehicleForm));
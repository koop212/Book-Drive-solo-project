import React, { Component } from 'react';
import { connect } from 'react-redux';

class VehicleForm extends Component {

    state = {
        year: 0,
        make: '',
        model: '',
        description: '', 
        price: 0,
        city: '',
        state: '',
        zip: ''
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        let car = this.state;
        if(car.year == '' && car.make == '' && car.model == '' && car.description == '' 
        && car.price == '' && car.city == '' && car.state == '' && car.zip == '') {
            return alert('Please fill in the blank')
        } else {
            this.props.dispatch({type: 'ADD_VEHICLE', payload: this.state});
        }
    }

    render() {
        return(
            <div>
                <h2>Tell me about your car</h2>
                <form>
                    <input onChange={this.handleChangeFor('year')} placeholder="Year" />
                    <input onChange={this.handleChangeFor('make')} placeholder="Make" />
                    <input onChange={this.handleChangeFor('model')} placeholder="Model" />
                    <input onChange={this.handleChangeFor('description')} placeholder="Description" />
                    <input onChange={this.handleChangeFor('price')} placeholder="Price Per Day" />
                    <input onChange={this.handleChangeFor('city')} placeholder="City" />
                    <input onChange={this.handleChangeFor('state')} placeholder="State" />
                    <input onChange={this.handleChangeFor('zip')} placeholder="Zip" />
                    <button onClick={this.handleSubmit}>Add Vehicle</button>
                </form>
            </div>
        )
    }
}

export default connect()(VehicleForm);
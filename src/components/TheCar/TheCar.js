import React, { Component } from 'react';
import '../TheCar/TheCar.css';
import StartEndDate from '../StartEndDate/StartEndDate';
class TheCar extends Component {
    render() {
        const carInfo = this.props.car
        return(
            <div>
                <div>
                    <h4>The Car: {carInfo.make} {carInfo.model} {carInfo.year}</h4>
                    <h4>Hosted By: {carInfo.first_name}</h4>
                    <h4>Descripton: {carInfo.description}</h4>
                </div>
                <div>
                    <p className="price">${carInfo.price}/Day</p>
                </div>
                <div>
                    <StartEndDate />
                </div>
                
            </div>
        )
    }
}

export default TheCar;
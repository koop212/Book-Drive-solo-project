import React, { Component } from 'react';
import '../TheCar/TheCar.css';
import StartDate from '../StartDate/StartDate';
// import EndDate from '../EndDate/EndDate';
import Checkout from '../Checkout/Checkout';


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
                    {/* <label>Start Date</label> */}
                    <StartDate />
                    {/* <label>End Date</label> */}
                    {/* <EndDate /> */}
                    {/* <Checkout /> */}
                </div>
                
            </div>
        )
    }
}

export default TheCar;
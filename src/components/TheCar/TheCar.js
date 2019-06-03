import React, { Component } from 'react';
import '../TheCar/TheCar.css';
import StartEndDate from '../StartEndDate/StartEndDate';
import { Grid, Paper} from '@material-ui/core'



class TheCar extends Component {
    render() {
        const carInfo = this.props.car;
        return(
            <div>
                <Grid className="firstContainer" container direction="row" justify="space-around">
                    <Grid item sm={6}>
                        <h4>The Car {carInfo.make} {carInfo.model} {carInfo.year}</h4>
                        <h4>Hosted By {carInfo.first_name}</h4>
                        <h4>Descripton {carInfo.description}</h4>
                    </Grid>
                    <Grid item className="price" justify="flex-end" sm={6}>
                        <p>${carInfo.price}<span className="perDay">/Day</span></p>
                    </Grid>
                </Grid> 
                    <Grid className="dates" container justify="flex-end">
                        <StartEndDate carId={this.props.carId} />
                    </Grid>
                
                {/* <div className="container">
                    <div className="description">
                        <h4>The Car {carInfo.make} {carInfo.model} {carInfo.year}</h4>
                        <h4>Hosted By {carInfo.first_name}</h4>
                        <h4>Descripton {carInfo.description}</h4>
                    </div>
                    <div className="price">
                        <p>${carInfo.price}<span className="perDay">/Day</span></p>
                    </div>
                </div>
                    <div className="date">
                        <StartEndDate />
                </div>*/}
            </div>
        )
    }
}

export default TheCar;
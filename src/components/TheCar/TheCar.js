import React, { Component } from 'react';
import '../TheCar/TheCar.css';
import StartEndDate from '../StartEndDate/StartEndDate';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        justifyContent: 'center', 
        // direction: 'column',
        flexDirection: 'row',
        // alignItems: 'center',
        display: 'flex',
    },
    price: {
        alignItems: 'center',
        fontSize: '40px',
        paddingLeft: '250px',
        justifyContent: 'space-around',
    },
    day: {
        fontSize: '20px',
    },
    carInfo: {
        fontSize: '30px',
    },
    description: {
        paddingLeft: '200px',
    },
    date: {
        fontSize: '20px;'
    }
    
}


class TheCar extends Component {
    render() {
        const carInfo = this.props.car;
        const style = this.props.classes;
        return(
            <div className={style.root}>
                <Grid container sm={12}>
                    <Grid className={style.description} item sm={6}>
                        <h4>The Car: <br/><span className={style.carInfo}>{carInfo.make} {carInfo.model} {carInfo.year}</span></h4>
                        <h4>Hosted By: <br/>{carInfo.first_name}</h4>
                        <h4>Descripton: <br/>{carInfo.description}</h4>
                    </Grid>
                    <Grid item sm={6} className={style.price}>
                        <p>${carInfo.price}<span className={style.day}>/Day</span></p>
                        <div className={style.date}>
                            <StartEndDate carId={this.props.carId} />
                        </div>
                    </Grid>
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

export default withStyles(styles)(TheCar);
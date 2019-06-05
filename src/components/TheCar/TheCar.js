import React, { Component } from 'react';
import '../TheCar/TheCar.css';
import StartEndDate from '../StartEndDate/StartEndDate';
import { Grid, Paper, GridList } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DisplayRating from '../DisplayRating/DisplayRating';
import DisplayComments from '../DisplayComments/DisplayComments';

const styles = {
    root: {
        justifyContent: 'center', 
        // flexDirection: 'row',
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
        paddingTop: '30px',
    },
    date: {
        fontSize: '20px',
    },
    rating: {
        paddingBottom: '20px',
    },
    comment: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '600px',
        paddingLeft: '80px'
    },
    commentHeader: {
        justifyContent: 'center',
    }
    
}


class TheCar extends Component {
    render() {
        const carInfo = this.props.car;
        const style = this.props.classes;
        return(
            <div>
                <div className={style.root}>
                    <Grid container sm={12}>
                        <Grid className={style.description} item sm={6}>
                            <h3 className={style.rating}><DisplayRating /></h3>
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
                </div>
                
                <Grid container className={style.commentHeader}>
                    <h2>Comments</h2>
                </Grid>
                <Grid container className={style.comment}>
                    <Paper className={style.paper}>
                        <DisplayComments carId={this.props.carId} />
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(TheCar);
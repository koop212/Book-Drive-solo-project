import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../CarCard/CarCard.css';
import { Card, CardContent } from '@material-ui/core';
// import OneImage from '../OneImage/OneImage';


class CarCard extends Component {

   

    handleClick = (event) => {
        event.preventDefault();
        this.props.history.push('/carinfo')
    }


    render() {
        console.log('vehicle id number',this.state)
        return(
            <div className="mainCard" onClick={this.handleClick}>
                <Card className="carCard">
                    {this.props.reduxState.imageReducer.map((image) => {
                        if (this.props.car.id === image.vehicle_id) {
                            return <img className="carImg" src={image.image_url} />
                        }
                    })}
                </Card>
                <p className="carInfo">{this.props.car.year} {this.props.car.make} {this.props.car.model} ${this.props.car.price}/Day</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}


export default withRouter(connect(mapStateToProps)(CarCard));
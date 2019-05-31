import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../CarCard/CarCard.css';
import { Card } from '@material-ui/core';


class CarCard extends Component {

    // Route to Car info page when clicking on car image
    handleClick = (id) => {
        this.props.history.push(`/cardetails/${id}`)
    }


    render() {
        return(
            <div className="mainCard" onClick={() => this.handleClick(this.props.car.id)}>
                <Card className="carCard">
                    {this.props.reduxState.imageReducer.map((image, i) => {
                        if (this.props.car.id === image.vehicle_id) {
                            return <img key={i} className="carImg" src={image.image_url} alt={this.props.car.model}/>
                        }
                        return null;
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
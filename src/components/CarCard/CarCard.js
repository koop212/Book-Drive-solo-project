import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../CarCard/CarCard.css';
import { Card } from '@material-ui/core';


class CarCard extends Component {

    state = {
        vehicle_id: 0,
    }

    componentDidMount() {
        this.setState({
            vehicle_id: this.props.car.id
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.history.push('/carinfo')
        this.setState({
            vehicle_id: event.target.value
        })
    }


    render() {
        console.log('vehicle id number',this.state)
        return(
            <Card onClick={this.handleClick}>
                {this.props.reduxState.imageReducer.map((image) => {
                    if (this.props.car.id === image.vehicle_id)
                        return <img className="carImg" src={image.image_url} />
                })}
                <p>{this.props.car.year} {this.props.car.make} {this.props.car.model} ${this.props.car.price}/Day</p>
            </Card>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}


export default withRouter(connect(mapStateToProps)(CarCard));
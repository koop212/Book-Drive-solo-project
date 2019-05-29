import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_VEHICLE'})
        this.props.dispatch({type: 'FETCH_IMAGE'})
    }

    render() {
        return(
            <div>
                <div>
                    {this.props.reduxState.vehicleReducer.map((car, i) => {
                        return <p key={i}>{car.year},{car.make},{car.model}</p>
                    })}
                </div>
                <div>
                    {this.props.reduxState.imageReducer.map((image) => {
                        return <img src={image.image_url} />
                    })}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(CarList);
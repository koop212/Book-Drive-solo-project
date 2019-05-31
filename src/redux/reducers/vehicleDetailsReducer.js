
// Set details of vehicle
const vehicleDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_VEHICLE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default vehicleDetailsReducer;
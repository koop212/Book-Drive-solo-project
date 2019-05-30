const vehicleOwnerReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_OWNER_VEHICLE':
            return action.payload;
        default:
            return state;
    }
}

export default vehicleOwnerReducer;
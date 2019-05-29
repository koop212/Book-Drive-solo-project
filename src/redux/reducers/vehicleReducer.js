const vehicleReducer = (state = [], action) => {
        switch (action.type) {
            case 'SET_VEHICLE':
                return action.payload;
            default:
                return state;
        }
}

export default vehicleReducer;
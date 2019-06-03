const requestedCarReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_REQUESTED_CAR':
            return action.payload;
        default:
            return state;
    }
}

export default requestedCarReducer;
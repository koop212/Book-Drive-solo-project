const myOrderReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MY_ORDER':
            return action.payload;
        default:
            return state;
    }
}

export default myOrderReducer;
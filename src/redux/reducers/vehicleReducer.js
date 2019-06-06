
// let vehicleState = {
//     all_wheel_drive: false,
//     pet_friendly: false,
//     heated_seats: false,
//     convertible: false,
//     sunroof: false,
//     automatic: false,
//     manual: false,
//     electric: false,
//     gas: false,
//     hybrid: false, 
//     year: 0,
//     make: '',
//     model: '',
//     description: '',
//     price: 0,
//     city: '',
//     state: '',
//     zip: '',
//     image_url: '', 
// }
// Set list of all vehicles
const vehicleReducer = (state = [], action) => {
        switch (action.type) {
            case 'SET_VEHICLE':
                return action.payload
            default:
                return state;
        }
}

export default vehicleReducer;
import ratesReducer from './ratesReducer';

test('Should set rates', () => {
    let action = {
        type: 'SET_RATES'
    }
    let returnedState = ratesReducer(undefined, action);
    expect(returnedState).toBe(action.payload)
});
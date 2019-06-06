import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFeatures() {
    try {
        let response = yield axios.get('/api/rate/features');
        console.log('in fetchFeature,',response);
        yield put({ type: 'SET_FEATURES', payload: response.data })
    } catch (error) {
        console.log('Error in fetchFeatures');
    }
}

function* featureSaga() {
    yield takeLatest('FETCH_FEATURES', fetchFeatures);
}

export default featureSaga;
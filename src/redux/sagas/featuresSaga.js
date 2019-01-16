import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_FEATURES" actions
function* fetchFeatures() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' }, // ensures that app is looking for JSON
            withCredentials: true,
        };

        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return shelf information
        // from the server session (req.user)
        
        const response = yield axios.get('api/features', config);
        // the session has given us a shelf object
        // with an id, url, and description set the client-side shelf object
        yield put({ type: 'SET_FEATURES', payload: response.data });
        console.log(response.data);
        
    } catch (error) {
        console.log('Shelf get request failed', error);
    }
}

function* updateFeatures(action) {
    try{
        yield call(axios.put, `/api/features/${action.payload}`);
        yield put({type: 'FETCH_FEATURES'});
    } catch(error){
        console.log(error);
    }
}

function* updateParks(action){
    try{
        yield call(axios.put, `/api/features/update/${action.payload}`);
        yield put({type: 'FETCH_FEATURES'});
    } catch(error){
        console.log(error);
    }
}

function* featuresSaga() {
    yield takeEvery('FETCH_FEATURES', fetchFeatures);
    yield takeEvery('UPDATE_FEATURES', updateFeatures);
    yield takeEvery('UPDATE_PARKS', updateParks)
}

export default featuresSaga;
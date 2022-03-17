import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { takeEvery} from 'redux-saga/effects';

function* fetchStartTask(action) {

    try {
        console.log(action.payload);
        const tasks = yield axios.get(`/api/tasks/${action.payload}`)
      
        yield put({ type: 'SET_START_TASK', payload: tasks.data });
        console.log(tasks.data);
        

    } catch {
        console.log('Get all error');


    }
}

function* startTaskSaga() {
    yield takeEvery('GET_START_TASK', fetchStartTask)
}

export default startTaskSaga;
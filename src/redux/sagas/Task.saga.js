import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { takeEvery} from 'redux-saga/effects';

function* fetchTasks() {

    try {
        const tasks = yield axios.get('/api/tasks')
        // console.log('get all:', shelf.data);
        yield put({ type: 'SET_TASKS', payload: tasks.data });
        // console.log('after reducer is called, still in saga');

    } catch {
        console.log('Get all error');


    }
}

function* tasksSaga() {
    yield takeEvery('FETCH_TASKS', fetchTasks)
}

export  default tasksSaga;
import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* editComplete(action) {
// console.log(action.payload);

    try{
        console.log(action.payload.isCompleted);
        yield axios.put(`/api/tasks/${action.payload.id}`, action.payload.isCompleted);
        // yield put({type: 'FETCH_TASKS'}) //
    }catch (error){
        console.log('Error editing tasks', error);
    }
}

function* editCompleteSaga() {
    yield takeEvery('EDIT_COMPLETE_STATUS', editComplete);
}

export default editCompleteSaga;
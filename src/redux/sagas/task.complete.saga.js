import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* editComplete(action) {
// console.log(action.payload);

    try{
        console.log(action.payload.isCompleted);
        yield axios.put(`/api/tasks/taco/${action.payload.id}`,  action.payload);
        yield put({type: 'FETCH_TASKS'}) //
    }catch (error){
        console.log('Error editing tasks', error);
    }
}

function* editCompleteSaga() {
    yield takeEvery('EDIT_COMPLETE_STATUS', editComplete);
}

export default editCompleteSaga;
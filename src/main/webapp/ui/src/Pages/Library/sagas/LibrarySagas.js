import { take, put, call, takeEvery } from "redux-saga/effects";
import * as LibraryActions from "../actions/LibraryActions";
import * as LibraryApis from "../apis/LibraryApis";


function* handleGetCoursesRequest(action) {
    try {
        const {headers, data, statusText} = yield call(LibraryApis.getCourses); 
        // console.log(data);
        // if (statusText === "OK") {
            yield put(LibraryActions.getCoursesSuccess(data));
        // }

    } catch (error) {
        // console.log("reached", error);
        yield put(LibraryActions.getCoursesError(action.payload));
    }
}


function* getCoursesRequest() {
    yield takeEvery(LibraryActions.GET_COURSES_REQUEST, handleGetCoursesRequest);
}


export default {
    getCoursesRequest
}   

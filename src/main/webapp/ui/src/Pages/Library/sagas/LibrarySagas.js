import { take, put, call, takeEvery } from "redux-saga/effects";
import * as LibraryActions from "../actions/LibraryActions";
import * as LibraryApis from "../apis/LibraryApis";


function* handleGetCoursesRequest(action) {
    try {
        const {headers, data, statusText} = yield call(LibraryApis.getCourses); 
        // if (statusText === "OK") {
            yield put(LibraryActions.getCoursesSuccess(data));
        // }

    } catch (error) {
        // console.log("reached", error);
        yield put(LibraryActions.getCoursesError(error));
    }
}


function* getCoursesRequest() {
    yield takeEvery(LibraryActions.GET_COURSES_REQUEST, handleGetCoursesRequest);
}

function* handlePostCoursesRequest(action) {
    try {
        const {headers, data, statusText} = yield call(LibraryApis.postCourseDetail, action); 
        // if (statusText === "OK") {
            yield put(LibraryActions.postCoursesSuccess(data));
        // }

    } catch (error) {
        // console.log("reached", error);
        yield put(LibraryActions.postCoursesError(error));
    }
}


function* postCoursesRequest() {
    yield takeEvery(LibraryActions.POST_COURSES_REQUEST, handlePostCoursesRequest);
}

function* handleGetCourseDetailRequest(action) {
    try {
        const {headers, data, statusText} = yield call(LibraryApis.getCourseDetail, action.payload); 
        // if (statusText === "OK") {
            yield put(LibraryActions.getCourseDetailSuccess(data));
            // console.log(data);
        // }

    } catch (error) {
        // console.log("reached", error);
        yield put(LibraryActions.getCourseDetailError(error));
    }
}


function* getCourseDetailRequest() {
    yield takeEvery(LibraryActions.GET_COURSE_DETAIL_REQUEST, handleGetCourseDetailRequest);
}


export default {
    getCoursesRequest,
    getCourseDetailRequest,
    postCoursesRequest
}   

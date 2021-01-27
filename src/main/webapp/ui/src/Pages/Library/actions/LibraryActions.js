export const GET_COURSES_REQUEST = "GET_COURSES_REQUEST";
export const GET_COURSES_SUCCESS = "GET_COURSES_SUCCESS";
export const GET_COURSES_ERROR = "GET_COURSES_ERROR";
export const GET_COURSE_DETAIL_REQUEST = "GET_COURSE_DETAIL_REQUEST";
export const GET_COURSE_DETAIL_SUCCESS = "GET_COURSE_DETAIL_SUCCESS";
export const GET_COURSE_DETAIL_ERROR = "GET_COURSE_DETAIL_ERROR";

export const getCoursesRequest = (payload) => ({
    type: GET_COURSES_REQUEST,
    payload
})

export const getCoursesSuccess = (payload) => ({
    type: GET_COURSES_SUCCESS,
    payload
})

export const getCoursesError = (error) => ({
    type: GET_COURSES_ERROR,
    payload: error
})


export const getCourseDetailRequest = (courseId) => ({
    type: GET_COURSE_DETAIL_REQUEST,
    payload: courseId
})

export const getCourseDetailSuccess = (data) => ({
    type: GET_COURSE_DETAIL_SUCCESS,
    payload: data
})

export const getCourseDetailError = (error) => ({
    type: GET_COURSE_DETAIL_ERROR,
    payload: error
})
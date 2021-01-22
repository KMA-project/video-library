export const GET_COURSES_REQUEST = "GET_COURSES_REQUEST";
export const GET_COURSES_SUCCESS = "GET_COURSES_SUCCESS";
export const GET_COURSES_ERROR = "GET_COURSES_ERROR";

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
export const GET_COURSES_REQUEST = "GET_COURSES_REQUEST";
export const GET_COURSES_SUCCESS = "GET_COURSES_SUCCESS";
export const GET_COURSES_ERROR = "GET_COURSES_ERROR";
export const POST_COURSES_REQUEST = "POST_COURSES_REQUEST";
export const POST_COURSES_SUCCESS = "POST_COURSES_SUCCESS";
export const POST_COURSES_ERROR = "POST_COURSES_ERROR";
export const GET_COURSE_DETAIL_REQUEST = "GET_COURSE_DETAIL_REQUEST";
export const GET_COURSE_DETAIL_SUCCESS = "GET_COURSE_DETAIL_SUCCESS";
export const GET_COURSE_DETAIL_ERROR = "GET_COURSE_DETAIL_ERROR";
export const POST_COURSES_GRADE_REQUEST = "POST_COURSES_GRADE_REQUEST";
export const POST_COURSES_GRADE_REQUEST_SUCCESS = "POST_COURSES_GRADE_REQUEST_SUCCESS";
export const POST_COURSES_GRADE_REQUEST_ERROR = "POST_COURSES_GRADE_REQUEST_ERROR";
export const POST_VIDEO = "POST_VIDEO";
export const POST_VIDEO_SUCCESS = "POST_VIDEO_SUCCESS";
export const POST_VIDEO_ERROR = "POST_VIDEO_ERROR";


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


export const postCoursesDetailGradeRequest = (payload) => ({
    type: POST_COURSES_GRADE_REQUEST,
    payload
})

export const postCoursesDetailGradeSuccess = (payload) => ({
    type: POST_COURSES_GRADE_REQUEST_SUCCESS,
    payload
})

export const postCoursesDetailGradeError = (error) => ({
    type: POST_COURSES_GRADE_REQUEST_ERROR,
    payload: error
})


export const postCoursesRequest = (id, payload) => ({
    type: POST_COURSES_REQUEST,
    id,
    payload
})

export const postCoursesSuccess = (payload) => ({
    type: POST_COURSES_SUCCESS,
    payload
})

export const postCoursesError = (error) => ({
    type: POST_COURSES_ERROR,
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


export const postVideoRequest = (payload) => ({
    type: POST_VIDEO,
    payload
})

export const postVideoSuccess = (payload) => ({
    type: POST_VIDEO_SUCCESS,
    payload
})

export const postVideoError = (error) => ({
    type: POST_VIDEO_ERROR,
    payload: error
})
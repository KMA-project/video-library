// import * as LoginActions from "../actions/LoginActions";

var initialState = {
  courses: [],
  courseDetail: {}
};

const getCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COURSES_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_COURSES_SUCCESS":
      return {
        ...state,
        courses: action.payload,
        isLoading: false,
      };
    case "GET_COURSES_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case "POST_COURSES_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "POST_COURSES_SUCCESS":
      return {
        ...state,
        courseDetail: action.payload,
        isLoading: false,
      };
    case "POST_COURSES_ERROR":
      return {
        ...state,
        isLoading: false,
      };
      case "POST_COURSES_GRADE_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "POST_COURSES_GRADE_REQUEST_SUCCESS":
      return {
        ...state,
        courses: action.payload,
        isLoading: false,
      };
    case "POST_COURSES_GRADE_REQUEST_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_COURSE_DETAIL_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_COURSE_DETAIL_SUCCESS":
      return {
        ...state,
        courseDetail: action.payload,
        isLoading: false,
      };
    case "GET_COURSE_DETAIL_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getCoursesReducer;

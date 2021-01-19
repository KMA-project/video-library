// import * as LoginActions from "../actions/LoginActions";

var initialState = {
    courses: []
};

const getCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COURSES_REQUEST":
            return {
                ...state,
                // isLoading: true,
            }
        case "GET_COURSES_SUCCESS":
            return {
                ...state,
                courses: action.payload
                // isLoading: false,
            };
        case "GET_COURSES_ERROR":
            return {
                ...state,
                // isLoading: false,
            };
        default:
            return state;
    }
}

export default getCoursesReducer;
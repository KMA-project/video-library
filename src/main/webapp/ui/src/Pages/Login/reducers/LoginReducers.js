// import * as LoginActions from "../actions/LoginActions";

var initialState = {
    isLoading: false,
    isAuthenticated: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_ACCOUNT_REQUEST":
            return {
                ...state,
                isLoading: true,
                isAuthenticated: false
            }
        case "LOGIN_ACCOUNT_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true
            };
        case "LOGIN_ACCOUNT_ERROR":
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false
            };
        default:
            return state;
    }
}

export default loginReducer;
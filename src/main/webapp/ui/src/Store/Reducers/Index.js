import { combineReducers } from "redux";
import loginReducer from "../../Pages/Login/reducers/LoginReducers";
import getCoursesReducer from "../../Pages/Library/reducers/LibraryReducers";

const rootReducer = combineReducers({
    loginReducer,
    getCoursesReducer
})

export default rootReducer
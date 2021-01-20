import { take, put, call, takeEvery } from "redux-saga/effects";
import * as LoginActions from "../actions/LoginActions";
import * as LoginApis from "../apis/LoginApis";


function* handleLoginAccountRequest(action) {
    const { accountName, password } = action.payload;

    try {
        const {headers, data, statusText} = yield call(LoginApis.loginAccount, {accountName, password}); 
        const token = headers.authorization.split(" ")[1];
        sessionStorage.setItem("token_id", token);
        sessionStorage.setItem("account", JSON.stringify(data));
        // console.log("reached");
        // if (statusText === "OK") {
            yield put(LoginActions.loginAccountSuccess(action.payload));
        // }

    } catch (error) {
        console.log("reached", error);
        yield put(LoginActions.loginAccountError(action.payload));
    }
}


function* loginAccountRequest() {
    yield takeEvery(LoginActions.LOGIN_ACCOUNT_REQUEST, handleLoginAccountRequest);
}


export default {
    loginAccountRequest
}   

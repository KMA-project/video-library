import { call } from "redux-saga/effects";
import callAPI from "../../../axios";


export const loginAccount = (payload) => {
    return callAPI("auth", "POST", {accountName: payload.accountName, password: payload.password})
}
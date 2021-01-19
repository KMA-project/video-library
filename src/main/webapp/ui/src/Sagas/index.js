import { all, fork } from "redux-saga/effects";
import { flatten } from 'lodash/array';
import { values } from 'lodash/object';
import LoginSaga from "../Pages/Login/sagas/LoginSagas";
const sagaList = [
    LoginSaga
]

export default function* () {
    yield all(
        flatten(sagaList.map(sagas => values(sagas))).map(saga => fork(saga))
    )
}

// function* rootSaga () {
//     yield [
//         fork(saga1), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
//         fork(saga2),
//     ];
// }

// export default function* rootSaga() {
//     yield all([
//         loginAccountRequest()
//     ])
//   }
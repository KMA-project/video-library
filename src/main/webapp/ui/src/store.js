import {createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./Store/Reducers/Index";
import rootSaga from "./Sagas/index";

const sagasMiddleware = createSagaMiddleware();

const middlewares = [sagasMiddleware];


export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    )
    sagasMiddleware.run(rootSaga)
    return { store }
}


// export default (initialState = {}) => {
//     const store = createStore(
//         initialState,
//         rootReducer
//         )
//         return { store }
//     }
// sagasMiddleware.run(Saga)

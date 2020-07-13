import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';

import MovieReducer from "../store/reducers/MovieReducer";

const rootReducer = combineReducers({
    Movie: MovieReducer
});

let middleware;
if (__DEV__) {
    middleware = applyMiddleware(thunk, createLogger());
} else {
    middleware = applyMiddleware(thunk);
}

const store = createStore(rootReducer, middleware);

export default store;
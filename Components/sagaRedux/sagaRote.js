import { all } from "@redux-saga/core/effects";
import { waitforcall } from "./sagaRedux";

export function* rootSaga(){
    yield all([waitforcall])
}
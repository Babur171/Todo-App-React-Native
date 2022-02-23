import { takeEvery, put,call } from "@redux-saga/core/effects";
export function* fetchData=()=>{
   const data=yield call();
   yield put();
}
 export function* waitforcall=()>{
    yield takeEvery('FETCH_DATA',fetchData)
}
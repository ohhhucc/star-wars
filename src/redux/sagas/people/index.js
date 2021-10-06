import {call, apply, put, takeEvery, take, select, fork} from "redux-saga/effects";
import {LOAD_PEOPLE, LOAD_PEOPLE_SUCCESS} from "../../reducers/people/actions";
import {LOCATION_CHANGE} from "connected-react-router";
import {selectPeople} from "../../reducers/people/selectors";

export function* fetchPeopleDetails() {

}

export function* fetchPeopleList({payload}) {
    const {page, search} = payload;
    const request = yield call(fetch, `https://swapi.dev/api/people?page=${page}&search=${search}`)
    const data = yield apply(request, request.json);
    yield put({
        type: LOAD_PEOPLE_SUCCESS,
        payload: data
    })
}

export function* fetchPeopleOnRoute() {
    while (true) {
        const action = yield take(LOCATION_CHANGE);
        if (action.payload.location.pathname === '/') {
            const state = yield select(selectPeople);
            const {page, search} = state;
            yield put({
                type: LOAD_PEOPLE,
                payload: {
                    page, search
                }
            })
        }
    }
}

export default function* peopleSaga() {
    yield fork(fetchPeopleOnRoute);
    yield takeEvery(LOAD_PEOPLE, fetchPeopleList);
}
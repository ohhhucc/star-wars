import {call, apply, put, takeLatest, take, select, fork} from "redux-saga/effects";
import {matchPath} from "react-router";
import {LOAD_PEOPLE, LOAD_PEOPLE_FAILURE, LOAD_PEOPLE_SUCCESS} from "../../reducers/people/actions";
import {LOAD_DETAILS, LOAD_DETAILS_FAILURE, LOAD_DETAILS_SUCCESS} from "../../reducers/details/actions";
import {LOCATION_CHANGE} from "connected-react-router";
import {selectPeople} from "../../reducers/people/selectors";
import {DETAILS_ROUTE, getConfig, APP_ROUTE} from "../../../routes";


export function* fetchDetails({payload}) {
    try {
        const {id} = payload;
        const request = yield call(fetch, `https://swapi.dev/api/people/${id}`)
        const data = yield apply(request, request.json);
        yield put({
            type: LOAD_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        yield put({
            type: LOAD_DETAILS_FAILURE,
            payload: error
        })
    }

}

export function* fetchPeople({payload}) {
    try {
        const {page, search} = payload;
        const request = yield call(fetch, `https://swapi.dev/api/people?page=${page}&search=${search}`)
        const data = yield apply(request, request.json);
        yield put({
            type: LOAD_PEOPLE_SUCCESS,
            payload: data
        })
    } catch (error) {
        yield put({
            type: LOAD_PEOPLE_FAILURE,
            payload: error
        })
    }

}

export function* fetchOnRoute() {
    while (true) {
        const action = yield take(LOCATION_CHANGE);
        const mainPage = matchPath(action.payload.location.pathname, getConfig(APP_ROUTE));
        const detailsPage = matchPath(action.payload.location.pathname, getConfig(DETAILS_ROUTE));
        if (mainPage) {
            const state = yield select(selectPeople);
            const {page, search} = state;
            yield put({
                type: LOAD_PEOPLE,
                payload: {
                    page, search
                }
            })
        }
        if (detailsPage) {
            const {id} = detailsPage.params;

            if(id) {
                yield put({
                    type: LOAD_DETAILS,
                    payload: {
                        id
                    }
                })
            }
        }
    }
}

export default function* peopleSaga() {
    yield fork(fetchOnRoute);
    yield takeLatest(LOAD_PEOPLE, fetchPeople);
    yield takeLatest(LOAD_DETAILS, fetchDetails);
}
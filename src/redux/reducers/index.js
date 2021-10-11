import {combineReducers} from "redux";
import {createBrowserHistory} from "history";
import {connectRouter} from "connected-react-router";
import peopleReducer from "./people";
import detailsReducer from "./details";

export const history = createBrowserHistory();

const initialState = {}

export function appReducer(state = initialState, action) {
    return state;
}

const rootReducer = combineReducers({
    app: appReducer,
    people: peopleReducer,
    details: detailsReducer,
    router: connectRouter(history)
})

export default rootReducer;
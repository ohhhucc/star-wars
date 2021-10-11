import {LOAD_DETAILS, LOAD_DETAILS_SUCCESS, LOAD_DETAILS_FAILURE} from "./actions";

const initialState = {
    loading: false,
    data: null,
    error: null,
}

export default function detailsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_DETAILS: {
            return {
                ...state,
                loading: true
            }
        }
        case LOAD_DETAILS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        }
        case LOAD_DETAILS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
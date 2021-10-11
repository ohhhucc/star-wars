import {LOAD_PEOPLE, LOAD_PEOPLE_FAILURE, LOAD_PEOPLE_SUCCESS} from "./actions";

const initialState = {
    page: 1,
    search: '',
    loading: false,
    data: null,
    error: null
}

export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PEOPLE: {
            const {page, search} = action.payload;
            return {
                ...state,
                loading: true,
                page,
                search
            }
        }
        case LOAD_PEOPLE_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        }
        case LOAD_PEOPLE_FAILURE: {
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
import {PAGE_NAMES} from "../../constants";
import {CHANGE_PAGE} from "../actionTypes";
import {combineReducers} from "redux";

const defaultState = PAGE_NAMES.INFO;

const selectedPage = (state = defaultState, action: any) => {
    switch (action.type) {
        case CHANGE_PAGE: {
            return state.replace(state, action.id)
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({selectedPage})
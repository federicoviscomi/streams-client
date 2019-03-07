import {
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    CREATE_STREAM,
    FETCH_STREAMS,
    SIGN_IN,
    SIGN_OUT
} from '../actions/types.js';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS: {
            return {...state, ..._.mapKeys(action.payload, 'id')};
        }
        case EDIT_STREAM:
        case FETCH_STREAM:
        case CREATE_STREAM: {
            return {...state, [action.payload.id]: action.payload};
        }
        case DELETE_STREAM: {
            return _.omit(state, action.payload);
        }
        default: {
            return state;
        }
    }
};
import _ from 'lodash';
const _INIT_STATE = {};

export default (state = _INIT_STATE, action) => {
    switch(action.type){
        case 'CREATE_STREAM':
            return { ...state, [action.payload.id]:action.payload};
        case 'FETCH_STREAMS':
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case 'FETCH_STREAM':
            return { ...state, [action.payload.id]:action.payload};
        case 'EDIT_STREAMS':
            return { ...state, [action.payload.id]:action.payload};
        case 'DELETE_STREAM':
            return _.omit(state, action.payload);
        default:
            return state;
    }
};
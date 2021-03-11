import { Switch } from 'react-router-dom';
import { initState } from './initState';
import * as actionTypes from './actionTypes';

const rootReducer = (state = initState, action)=>{
    switch (action.type) {
        case actionTypes.GET_NEWS:
            return state;
        case actionTypes.SET_HEADLINES:
            state.headLines = action.payload;
            return state;
        case actionTypes.SET_LOCAL_NEWS:
            return state.headLines || []
        default:
            return state;
    }
}
export default rootReducer;
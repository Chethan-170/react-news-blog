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
            state.local = action.payload;
            return state;
        case actionTypes.SET_SCIENCE_NEWS:
            state.science = action.payload;
            return state;
        case actionTypes.SET_TECH_NEWS:
            state.technology = action.payload;
            return state;
        case actionTypes.SET_ENTERTAINMENT_NEWS:
            state.entertainment = action.payload;
            return state;
        case actionTypes.SET_SPORTS_NEWS:
            state.sports = action.payload;
            return state;
        case actionTypes.HIDE_HEADLINE_NEWS:
            let tempArr = state.headLines.filter((news,newsID)=> newsID != action.payload);
            state.headLines = tempArr;
            console.log(state);
            return {...state};
        default:
            return state;
    }
}
export default rootReducer;
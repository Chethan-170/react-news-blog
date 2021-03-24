import { initState } from './initState';
import * as actionTypes from './actionTypes';

const rootReducer = (state = initState, action)=>{
    switch (action.type) {
        case actionTypes.GET_NEWS:
            return state;
        case actionTypes.SET_HEADLINES:
            const { headLines, ...otherThanHL} = state;
            return { headLines:action.payload, ...otherThanHL};
        case actionTypes.SET_LOCAL_NEWS:
            const { local, ...otherThanLocal} = state;
            return { local:action.payload, ...otherThanLocal};
        case actionTypes.SET_SCIENCE_NEWS:
            const { science, ...otherThanScience} = state;
            return { science:action.payload, ...otherThanScience};
        case actionTypes.SET_TECH_NEWS:
            const { technology, ...otherThanTech} = state;
            return { technology:action.payload, ...otherThanTech};
        case actionTypes.SET_ENTERTAINMENT_NEWS:
            const { entertainment, ...otherThanEntnt} = state;
            return { entertainment:action.payload, ...otherThanEntnt};
        case actionTypes.SET_SPORTS_NEWS:
            const { sports, ...otherThanSports} = state;
            return { sports:action.payload, ...otherThanSports};
        case actionTypes.HIDE_HEADLINE_NEWS:
            let tempArr = state.headLines.filter((news,newsID)=> newsID != action.payload);
            const { headLines: prevHeadLines ,...prevState } = state;
            return {headLines:tempArr,...prevState};
        default:
            return state;
    }
}
export default rootReducer;
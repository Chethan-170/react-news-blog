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
        case actionTypes.HIDE_NEWS:
            if(action.payload.newsType === "headLines"){
                let tempArr = state.headLines.filter((news,newsID)=> newsID !== action.payload.newsID);
                const { headLines: prevHeadLines ,...prevState } = state;
                return {headLines:tempArr,...prevState};
            }else if(action.payload.newsType === "localNews"){
                let tempArr = state.local.filter((news,newsID)=> newsID !== action.payload.newsID);
                const { local: prevLocalNews ,...prevState } = state;
                return {local:tempArr,...prevState};
            }else if(action.payload.newsType === "scienceNews"){
                let tempArr = state.science.filter((news,newsID)=> newsID !== action.payload.newsID);
                const { science: prevScienceNews ,...prevState } = state;
                return {science:tempArr,...prevState};
            }else if(action.payload.newsType === "technologyNews"){
                let tempArr = state.technology.filter((news,newsID)=> newsID !== action.payload.newsID);
                const { technology: prevTechNews ,...prevState } = state;
                return {technology:tempArr,...prevState};
            }else return state;
        default:
            return state;
    }
}
export default rootReducer;
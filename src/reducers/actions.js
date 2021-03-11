import * as actionTypes from './actionTypes';
export const getHeadLines = () =>({
    type : actionTypes.GET_NEWS
});
export const setHeadLines = (news = []) =>({
    type : actionTypes.SET_HEADLINES,
    payload : news
});
export const setLocalNews = (news = []) =>({
    type : actionTypes.SET_LOCAL_NEWS,
    payload : news
});
export const setScienceNews = (news = []) =>({
    type : actionTypes.SET_SCIENCE_NEWS,
    payload : news
});
export const setTechNews = (news = []) =>({
    type : actionTypes.SET_TECH_NEWS,
    payload : news
});
export const setEntertainmentNews = (news = []) =>({
    type : actionTypes.SET_ENTERTAINMENT_NEWS,
    payload : news
});
export const setSportsNews = (news = []) =>({
    type : actionTypes.SET_SPORTS_NEWS,
    payload : news
});

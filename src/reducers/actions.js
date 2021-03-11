import * as actionTypes from './actionTypes';
export const getHeadLines = () =>({
    type : actionTypes.GET_NEWS
});
export const setHeadLines = (headLines = []) =>({
    type : actionTypes.SET_HEADLINES,
    payload : headLines
});

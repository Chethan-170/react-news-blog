import { Fragment } from "react";
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar";
import Home from  './components/Home';
import { Loader } from './components/Loader';

const newsApiUrl = "https://newsapi.org/v2/";
const apiKey = "054806b4784d43afbbef42274196588d";

const getHeadLines = async ()=>{
  let url = newsApiUrl+"top-headlines?sources=bbc-news&language=en&apiKey="+apiKey;
  return makeAxiosRequest(url);
}

const getIndianNews = async ()=>{
  let url = newsApiUrl+"top-headlines?country=in&sortBy=popularity&apiKey="+apiKey;
  return makeAxiosRequest(url);
}
const getEntertainmentNews = async ()=>{
  let url = newsApiUrl+"top-headlines?language=en&category=entertainment&apiKey="+apiKey;
  return makeAxiosRequest(url);
}

const getTechnologyNews = async ()=>{
  let url = newsApiUrl+"top-headlines?language=en&category=technology&apiKey="+apiKey;
  return makeAxiosRequest(url);
}

const getScienceNews = async ()=>{
  let url = newsApiUrl+"top-headlines?language=en&category=science&apiKey="+apiKey;
  return makeAxiosRequest(url);
}

const getSportsNews = async ()=>{
  let url = newsApiUrl+"top-headlines?language=en&category=sports&apiKey="+apiKey;
  return makeAxiosRequest(url);
}


const makeAxiosRequest = async (url)=>{
  const options = {
    method: 'GET',
    url: url
  };
  return axios.request(options).then(function (response) {
      return response;
  }).catch(function (error) {
      return "ERROR_404";
  });
}

function App() {
  const [appState, setAppState] = useState(true);
  useEffect(()=>{    
    getSportsNews().then(response=>console.log(response))
  });
  return (
    <Fragment>
        {
          (appState)
          ?
          <BrowserRouter>
            <Navbar/>
            <Home/>
          </BrowserRouter>
          :
          <Loader/>

        }
    </Fragment>
  );
}

export default App;

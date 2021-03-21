import { Fragment, useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import Navbar from "./components/Navbar";
import Home from  './components/Home';
import { Loader } from './components/Loader';
import store from './reducers/store';
import * as actions from './reducers/actions';

console.log("initial:",store.getState());

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

const getScienceNews = async ()=>{
  let url = newsApiUrl+"top-headlines?language=en&category=science&apiKey="+apiKey;
  return makeAxiosRequest(url);
}

const getTechnologyNews = async ()=>{
  let url = newsApiUrl+"top-headlines?language=en&category=technology&apiKey="+apiKey;
  return makeAxiosRequest(url);
}

const getEntertainmentNews = async ()=>{
  let url = newsApiUrl+"top-headlines?language=en&category=entertainment&apiKey="+apiKey;
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
  const [appState, setAppState] = useState(false);
  useEffect(()=>{    
    getHeadLines().then(response=>{
      store.dispatch(actions.setHeadLines(response.data.articles));
      console.log("headlines");
    }).then(()=>{
      getIndianNews().then(response=>{
        store.dispatch(actions.setLocalNews(response.data.articles));
        console.log("local news");
      }).then(()=>{
        getScienceNews().then(response=>{
          store.dispatch(actions.setScienceNews(response.data.articles));
          console.log("science news");
        }).then(()=>{
          getTechnologyNews().then(response=>{
            store.dispatch(actions.setTechNews(response.data.articles));
            console.log("tech news");
          }).then(()=>{
            getEntertainmentNews().then(response=>{
              store.dispatch(actions.setEntertainmentNews(response.data.articles));
              console.log("entertainment news");
            }).then(()=>{
              getSportsNews().then(response=>{
                store.dispatch(actions.setSportsNews(response.data.articles));
                console.log("sports news");
              }).then(()=>{
                console.log('final:',store.getState());
                setAppState(true);
              })
            })
          })
        })
      })
    })
  },[]);
  return (
    <Fragment>
        {
          (appState)
          ?
          <BrowserRouter>
            <Provider store={store}>
              <Navbar/>
              <Home/>
            </Provider>
          </BrowserRouter>
          :
          <Loader/>

        }
    </Fragment>
  );
}

export default App;

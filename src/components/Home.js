import { useState,useEffect } from 'react';
import axios from 'axios';
import { Loader } from './Loader';

const Home = ()=>{
    const [latestNews,setLatestNews] = useState([]);
    const [loadingStatus,setLoadingStatus] = useState(1);
    useEffect(()=>{
        var url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=054806b4784d43afbbef42274196588d';
        const options = {
            method: 'GET',
            url: url
        };
        axios.request(options).then(function (response) {
            setLatestNews(response.data.articles);
            setLoadingStatus(0);
            console.log(response.data.articles)
        }).catch(function (error) {
            console.error(error);
        });
    },[]);
    return(
        (loadingStatus)
        ? <Loader/>
        : 
        <div className="mainContent">        
            <h1>hooo</h1>
        </div>
    );
}
export default Home;
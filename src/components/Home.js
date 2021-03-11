import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Loader } from './Loader';
const flexContainer = {
    display : "flex",
    flexWrap : "wrap",
}
const flexItem = {

}
const Home = (props)=>{
    const [activeButton, setActiveButton] = useState('headlines');
    console.log(props);
    const onTabClick = (tab)=>{
        console.log("tab:",tab);
    }
    useEffect(()=>{
        /*var url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=054806b4784d43afbbef42274196588d';
        const options = {
            method: 'GET',
            url: url
        };
        axios.request(options).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.error(error);
        });*/
    },[]);
    return(
        <Fragment>
           <div className="card">
                <div className="card-header" style={flexContainer}>
                    <button type="button" onClick={()=>{onTabClick('headlines')}} className="btn btn-outline-primary m-2" style={flexItem}>Headlines</button>
                    <button type="button" onClick={console.log(this)} className="btn btn-outline-primary m-2" style={flexItem}>Local News</button>
                    <button type="button" className="btn btn-outline-primary m-2" style={flexItem}>Science</button>
                    <button type="button" className="btn btn-outline-primary m-2" style={flexItem}>Technology</button>
                    <button type="button" className="btn btn-outline-primary m-2" style={flexItem}>Entertainment</button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </Fragment>
    );
}

export default (Home);
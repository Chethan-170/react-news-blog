import { useState, useEffect, Fragment } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import axios from 'axios';
import { Loader } from './Loader';
const flexContainer = {
    display : "flex",
    flexWrap : "wrap",
}
const flexItem = {

}
const Home = (props)=>{
    console.log(props);
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
                    <NavLink exact to="/" type="button" className="btn btn-outline-primary m-2" style={flexItem}>Headlines</NavLink>
                    <NavLink to="/local" type="button" className="btn btn-outline-primary m-2" style={flexItem}>Local News</NavLink>
                </div>
                <div className="card-body">                    
                    <Switch>
                        <Route exact path={['/','/headlines']}>
                            <h1>Headlines</h1>
                        </Route>  
                        <Route exact path='/local'>
                            <h1>Local lines</h1>
                        </Route>      
                    </Switch>   
                </div>
            </div>

        </Fragment>
    );
}

export default (Home);
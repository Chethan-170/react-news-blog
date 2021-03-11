import { useState, useEffect, Fragment } from 'react';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import show404 from './news/404';

//import axios from 'axios';
//import { Loader } from './Loader';
const flexContainer = {
    display : "flex",
    flexWrap : "wrap",
}
const flexItem = {

}
const Home = (props)=>{
    //console.log(props);
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
           <div className="card m-2">
                <div className="card-header p-1" style={flexContainer}>
                    <NavLink exact to="/" type="button" className="btn btn-outline-primary m-2" style={flexItem}>Headlines</NavLink>
                    <NavLink to="/local" type="button" className="btn btn-outline-secondary m-2" style={flexItem}>Local News</NavLink>
                    <NavLink exact to="/entertainment" type="button" className="btn btn-outline-danger m-2" style={flexItem}>Entertainment</NavLink>
                    <NavLink to="/technology" type="button" className="btn btn-outline-warning m-2" style={flexItem}>Technology</NavLink>
                    <NavLink exact to="/science" type="button" className="btn btn-outline-success m-2" style={flexItem}>Science</NavLink>  
                </div>
                <div className="card-body">                    
                    <Switch>
                        <Route exact path={['/','/headlines']}>
                            <h1>Headlines</h1>
                        </Route>  
                        <Route path='/local'>
                            <h1>Local lines</h1>
                        </Route>
                        <Route path="/viewNews/:newsID"><h1>hii</h1></Route>
                        <Route path="*" component={show404}/>
                    </Switch>   
                </div>
            </div>

        </Fragment>
    );
}

export default withRouter(Home);
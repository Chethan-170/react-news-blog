import { Fragment } from 'react';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import show404 from './news/404';
import HeadLines from './news/Headlines';
import * as news from './news'

const flexContainer = {
    display : "flex",
    flexWrap : "wrap",
}
const Home = (props)=>{
    return(
        <Fragment>
           <div className="card m-2">
                <div className="card-header p-1" style={flexContainer}>
                    <NavLink exact to="/" type="button" className="btn btn-outline-primary m-2">Headlines</NavLink>
                    <NavLink to="/local" type="button" className="btn btn-outline-secondary m-2">Indian News</NavLink>
                    <NavLink exact to="/science" type="button" className="btn btn-outline-success m-2">Science</NavLink>  
                    <NavLink to="/technology" type="button" className="btn btn-outline-warning m-2">Technology</NavLink>
                    <NavLink exact to="/entertainment" type="button" className="btn btn-outline-danger m-2">Entertainment</NavLink>
                    <NavLink exact to="/sports" type="button" className="btn btn-outline-info m-2">Sports</NavLink>  
                </div>
                <div className="card-body">                    
                    <Switch>
                        <Route exact path={['/','/headlines']} component={ HeadLines }/>
                        <Route path='/local' component={news.LocalNews}/>
                        <Route path='/entertainment' component={news.EntertainmentNews}/>
                        <Route path='/technology' component={news.TechnologyNews}/>
                        <Route path='/science' component={news.ScienceNews}/>
                        <Route path="/viewNews/:newsID"><h1>hii</h1></Route>
                        <Route path="*" component={show404}/>
                    </Switch>   
                </div>
            </div>

        </Fragment>
    );
}
export default withRouter(Home);
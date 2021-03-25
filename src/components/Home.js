import { Fragment } from 'react';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import  { Provider } from 'react-redux';
import store from '../redux/store';
import show404 from './news/404';
import HeadLines from './news/Headlines';
import LocalNews from './news/LocalNews';
import Science from './news/Science';
import Technology from './news/Tech';
import ViewNews from './news/Viewnews';
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
                        <Route path='/local' component={ LocalNews }/>
                        <Route path='/entertainment' component={news.EntertainmentNews}/>
                        <Route path='/technology' component={ Technology }/>
                        <Route path='/science' component={ Science }/>
                        <Route path="/viewNews/:newsType/:newsID" render={(props)=> <Provider store={store}> <ViewNews {...props} /> </Provider>}/>
                        {/* <Provider store={store}>
                            <Route path="/viewNews/:newsType/:newsID" component={ ViewNews }/>
                        </Provider> */}
                        <Route path="*" component={show404}/>
                    </Switch>   
                </div>
            </div>
        </Fragment>
    );
}
export default withRouter(Home);
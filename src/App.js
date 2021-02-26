import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Home from  './components/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Home}/>          
        </Switch>   
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Home from  './components/Home';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar/>
        <Home/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

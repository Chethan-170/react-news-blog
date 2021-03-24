import { Link, withRouter } from 'react-router-dom';
const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{fontWeight:"bold"}}>
            <Link className="navbar-brand" to="/" style={{fontSize:30}}>World News Blog</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
                {/*<li className="nav-item active">
                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/">About</NavLink>
                </li>*/}
            </ul>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
    )
}
export default withRouter(Navbar)
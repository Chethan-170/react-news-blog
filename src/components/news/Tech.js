import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideNews } from '../../redux/actions';
import { Loader } from '../Loader';
import { NavLink } from 'react-router-dom';

const Technology = ({ technology, hideNews })=>{
    const handleHideClick = newsID =>{
        hideNews("technologyNews", newsID);
    }
    return(        
        (technology.length > 0)
        ?
        <div className="news-card-container">
            <div className="news-cards">
                {
                    technology.map(({ title, description, publishedAt, urlToImage },ind)=>{
                        
                            return <div key={ "news"+ind } className="news-card">
                                <NavLink to={"viewNews/technology/"+ind}>
                                    <span className="news-card-header" style={{backgroundImage: `url(${urlToImage})`}}>
                                        <span className="news-card-title">
                                            <h3>{ title }</h3>
                                        </span>
                                    </span>
                                    <span className="news-card-summary">
                                        { description }
                                    </span>
                                </NavLink>
                                <span className="news-card-meta">
                                    <span>{ publishedAt } <button onClick={()=>handleHideClick(ind)} style={{padding:"1px 8px"}} className="btn btn-sm btn-outline-dark float-right">Hide</button></span>
                                </span>
                            </div>
                        
                    })
                }
        </div>
    </div>
        :
            <Loader/>
        
    )
}

const mapStateToProps = state =>{
    const { technology } = state;
    return { technology }
}
const mapDispatchToProps = (dispatch)=> bindActionCreators({ hideNews }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Technology);
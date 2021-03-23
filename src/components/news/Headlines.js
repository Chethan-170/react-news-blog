import { containerStyle } from '../style';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideHeadline } from '../../reducers/actions';
import { useState, useEffect, Fragment } from 'react';
import { Loader } from '../Loader';
import { NavLink } from 'react-router-dom';

const HeadLines = (props)=>{
    const [headLines,setHeadLines] = useState([]);
    useEffect(()=>{
        setHeadLines(props.headLines);
        console.log("headlines fired",props);
    },[]);
    const handleHideClick = newsID =>{
        props.hideHeadline(newsID);
    }
    return(        
        (headLines.length > 0)
        ?
        <div className="news-card-container">
            <div className="news-cards">
                {
                    headLines.map(({ title, description, publishedAt, urlToImage, hiddenNews },ind)=>{
                        return (! hiddenNews) &&
                         (
                            <div key={ "news"+ind } className="news-card">
                                <NavLink to={"viewNews/"+ind}>
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
                        );
                    })
                }
        </div>
    </div>
        :
            <Loader/>
        
    )
}
function mapStateToProps(state){
    const { headLines } = state;
    return { headLines }
}
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({ hideHeadline }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadLines);
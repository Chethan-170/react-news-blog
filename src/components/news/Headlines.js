import { containerStyle } from '../style';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Loader } from '../Loader';
import { NavLink } from 'react-router-dom';

const HeadLines = (props)=>{
    const [headLines,setHeadLines] = useState([]);
    useEffect(()=>{
        setHeadLines(props.headLines);
        console.log("headlines fired");
    },[]);
    return(        
        (headLines.length > 0)
        ?
        <div className="news-card-container">
            <div className="news-cards">
                {
                    headLines.map(({ title, description, publishedAt, urlToImage },ind)=>{
                        return (
                            <NavLink key={ "news"+ind } className="news-card" to={"viewNews/"+ind}>
                                <span className="news-card-header" style={{backgroundImage: `url(${urlToImage})`}}>
                                    <span className="news-card-title">
                                        <h3>{ title }</h3>
                                    </span>
                                </span>
                                <span className="news-card-summary">
                                    { description }
                                </span>
                                <span className="news-card-meta">
                                    <span>{ publishedAt } <button style={{padding:"1px 8px"}} className="btn btn-sm btn-outline-dark float-right">Hide</button></span>
                                </span>
                            </NavLink>
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
export default connect(mapStateToProps)(HeadLines);
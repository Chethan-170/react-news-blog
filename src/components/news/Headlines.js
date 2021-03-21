import { containerStyle } from '../style';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Loader } from '../Loader';
import { NavLink } from 'react-router-dom';

const HeadLines = (props)=>{
    const [headLines,setHeadLines] = useState([]);
    useEffect(()=>{
        setHeadLines(props.headLines);
        console.log("headlinesstate",headLines);
    },[props.headLines, headLines]);
    return(        
        (headLines.length > 0)
        ?
        <div className="news-card-container">
            <div className="news-cards">
                <NavLink className="news-card" to="viewNews/21">
                    <span className="news-card-header" style={{backgroundImage: 'url(http://placeimg.com/400/200/animals)'}}>
                        <span className="news-card-title">
                            <h3>This is a title for a card</h3>
                        </span>
                    </span>
                    <span className="news-card-summary">
                        A summary will also be present. Usually two to three brief sentences about the content on the detail page.
                    </span>
                    <span className="news-card-meta">
                        Published: June 18th, 2015
                    </span>
                </NavLink>
                <NavLink className="news-card" to="viewNews/21">
                    <span className="news-card-header" style={{backgroundImage: 'url(http://placeimg.com/400/200/animals)'}}>
                        <span className="news-card-title">
                            <h3>This is a title for a card</h3>
                        </span>
                    </span>
                    <span className="news-card-summary">
                        A summary will also be present. Usually two to three brief sentences about the content on the detail page.
                    </span>
                    <span className="news-card-meta">
                        Published: June 18th, 2015
                    </span>
                </NavLink>
                <NavLink className="news-card" to="viewNews/21">
                    <span className="news-card-header" style={{backgroundImage: 'url(http://placeimg.com/400/200/animals)'}}>
                        <span className="news-card-title">
                            <h3>This is a title for a card</h3>
                        </span>
                    </span>
                    <span className="news-card-summary">
                        A summary will also be present. Usually two to three brief sentences about the content on the detail page.
                    </span>
                    <span className="news-card-meta">
                        Published: June 18th, 2015
                    </span>
                </NavLink>
                <NavLink className="news-card" to="viewNews/21">
                    <span className="news-card-header" style={{backgroundImage: 'url(http://placeimg.com/400/200/animals)'}}>
                        <span className="news-card-title">
                            <h3>This is a title for a card</h3>
                        </span>
                    </span>
                    <span className="news-card-summary">
                        A summary will also be present. Usually two to three brief sentences about the content on the detail page.
                    </span>
                    <span className="news-card-meta">
                        Published: June 18th, 2015
                    </span>
                </NavLink>
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
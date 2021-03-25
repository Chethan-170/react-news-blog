import { connect } from 'react-redux';

const ViewNews = ({ news }) =>{
    const dateArr = new Date(news.publishedAt).toDateString().split(' ');
    return (
        <div className="post-module hover">
            <div className="thumbnail">
                <div className="date">
                <div className="day">{ dateArr[2] }</div>
                <div className="month">{ dateArr[1] }</div>
                </div><img alt="Alt Img" src={news.urlToImage}/>
            </div>
            <div className="post-content">
                <div className="category">{ news.author || news.source.name }</div>
                <h1 className="title">{ news.title }</h1>
                <h2 className="sub_title">{ news.description }</h2>
                <p className="description">
                   { news.content }
                </p>
                <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-o"></i>
                    {Math.floor((Math.random() * 10) + 1)} mins ago</span><span className="comments"><i className="fa fa-comments"></i><a href="hi">{Math.floor((Math.random() * 100) + 1)} comments</a></span></div>
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps)=>{
    const newsType = ownProps.match.params.newsType;
    const newsID = ownProps.match.params.newsID;
    return { news: state[newsType][newsID]};
}
export default connect(mapStateToProps)(ViewNews);
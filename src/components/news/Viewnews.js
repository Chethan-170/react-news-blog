import { connect } from 'react-redux';

const ViewNews = ({ news }) =>{
    console.log(news);
    return (
        <h2>{ news.title }</h2>
    )
}
const mapStateToProps = (state, ownProps)=>{
    const newsType = ownProps.match.params.newsType;
    const newsID = ownProps.match.params.newsID;
    return { news: state[newsType][newsID]};
}
export default connect(mapStateToProps)(ViewNews);
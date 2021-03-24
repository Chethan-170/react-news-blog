const ViewNews = (props)=>{
    const newsType = props.match.params.newsType;
    const newsID = props.match.params.newsID;
    console.log(newsType,newsID);
    return (
        <h2>Here you  go</h2>
    )
}
export default ViewNews;
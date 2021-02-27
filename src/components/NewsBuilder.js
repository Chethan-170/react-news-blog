export const NewsBuilder = (props)=>{
    const { articles } = props;
    const bgColors = [
        "bg-primary","bg-secondary",
        "bg-success","bg-danger",
        "bg-warning","bg-info",
    ];
    const getRandomBG = ()=>{
        const randNum = Math.floor((Math.random() * 5) + 1);
        return bgColors[randNum];
    }
    return(
        <div className="mainContent">
            {
                articles.map((article,ind)=>{
                    if(article.urlToImage !==null && article.content !== null){
                        console.log(article);
                        const cardClasses  = "card text-white mb-3 " + getRandomBG();
                        return(
                            <div key={ind} className={cardClasses} >
                                <div className="card-header">
                                    <span>Source : {article.source.name || ""}</span>
                                    <span className="pl-2">Published At : {article.publishedAt || ""}</span>
                                    <button style={{float:"right"}} type="button" class="btn btn-outline-light">View</button>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{article.title || ""}</h5>
                                    <div className="newsContent">
                                        <img className="newsContentChild" src={article.urlToImage} alt="Article"
                                            style={{height:150,width:250}}
                                        />
                                        <p className="card-text newsContentChild">{article.content.slice(0,160)+"..." }</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
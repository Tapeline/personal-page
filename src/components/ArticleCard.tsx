import {Article} from "@/data/projectClasses.ts";

function ArticleCard({article}: { article: Article }) {
    return (<div className="
        flex justify-between my-7 gap-6
        flex-col-reverse md:flex-row
    ">
        <div>
            <p className="text-3xl t-font-serif my-2">{article.name}</p>
            <p className="t-font-sans my-2">{article.annotation}</p>
            <a href={article.link} className="font-light t-font-cond">Read</a>
        </div>
        <div className="t-project-thumb w-full min-w-full md:w-[40%] md:min-w-[40%]">
            <img src={article.thumbnail}/>
        </div>
    </div>)
}

export default ArticleCard;

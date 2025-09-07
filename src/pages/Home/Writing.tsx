import Navbar from "@/components/Navbar.tsx";
import YearDivider from "@/components/YearDivider.tsx";
import {Article} from "@/data/projectClasses.ts";
import Footer from "@/components/Footer.tsx";
import {articleList} from "@/data/articlesConf.tsx";
import ArticleCard from "@/components/ArticleCard.tsx";

export default function Writing() {
    return (<div className="min-h-dvh w-full px-5 md:px-[15%] xl:px-[25%] flex flex-col items-center">
        <div className="h-[50dvh] flex flex-col justify-start items-stretch w-full">
            <Navbar/>
            <div className="flex flex-col items-center gap-3 grow justify-center">
                <span className="block text-6xl t-font-serif">Writing</span>
                <span className="block text-md t-font-sans text-center">
                    Here you can explore my public articles on Habr and other resources.
                </span>
            </div>
        </div>
        {
            articleList.map((data, index) => {
                return <div key={index} className="mb-10">
                    <YearDivider year={data.year}/>
                    <div>{
                        data.articles.map((project: Article, index) => {
                            return <ArticleCard article={project} key={index}/>;
                        })
                    }</div>
                </div>;
            })
        }
        <Footer/>
    </div>);
}

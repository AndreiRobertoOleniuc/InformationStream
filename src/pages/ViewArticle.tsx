import React from 'react';
import { Article } from '../models/Article';
import ArticleComponent from '../components/Article';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state/Store';
import "../styles/Icons.scss"

const ViewArticle: React.FC = () => {
    const location = useLocation();
    const {  pathname } = location;
    const [article, setArticle] = React.useState<Article>({} as Article);
    const articles = useSelector((state: RootState) => state.news.articles);

    React.useEffect(() => {
        const articleId = +pathname.split("/")[2];
        console.log(articleId);
        const viewedArticle = articles.find((a,index) => index === articleId);
        if(!viewedArticle) return;
        setArticle(viewedArticle);
    }, [articles, pathname]);

    return (
        <div className="w-full py-4 flex-grow bg-slate-200 flex flex-col justify-between px-3 items-center lg:px-48 xl:px-96 2xl:px-128">
            <div className="w-full flex-col">
                <div>
                    <ArticleComponent article={article}  editMode={false}/>
                </div>
            </div>
        </div>
    )
}  

export default ViewArticle;
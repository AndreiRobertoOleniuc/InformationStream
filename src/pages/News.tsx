import React, { useEffect } from 'react';
import TopBar from '../components/TopBar';
import { useSelector } from 'react-redux';
import { selectArticles } from '../state/newsSlice';
import { Article } from '../models/Article';

export default function News() {
    const articles: Article[] = useSelector(selectArticles);

    useEffect(() => {
        console.log(articles);
    }, [articles]);

    return (
        <div className="min-h-full">
            <TopBar />
            <div>
                {articles?.map(article => (
                    <div key={article.title} className="">
                        <p>{article.title}</p>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
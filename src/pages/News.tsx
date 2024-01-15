import React, { useEffect } from 'react';
import TopBar from '../components/TopBar';
import { useSelector } from 'react-redux';
import { selectArticles } from '../state/newsSlice';
import { Article } from '../models/Article';
import { Link } from 'react-router-dom';

export default function News() {
    const articles: Article[] = useSelector(selectArticles);

    useEffect(() => {
        console.log(articles);
    }, [articles]);

    return (
        <div className="min-h-full">
            <TopBar />
            <div>
                {articles?.map((article,id) => (
                    <Link to={"/article/" + id.toString()} key={article.title} className="">
                        <p>{article.title}</p>
                    </Link>
                )
                )}
            </div>
        </div>
    )
}
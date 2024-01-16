import React from 'react';
import TopBar from '../components/TopBar';
import { useSelector } from 'react-redux';
import { selectArticles, selectSearchFilter } from '../state/newsSlice';
import { Article } from '../models/Article';
import { Link } from 'react-router-dom';
import "../styles/Icons.scss";

export default function News() {
    const articles: Article[] = useSelector(selectArticles);

    return (
        <div className="min-h-full">
            <TopBar withSearchAndFilter={true}/>
            <div className="flex flex-row px-4 pb-24 flex-wrap justify-between md:px-7 lg:px-10">
                {articles?.map((article,id) => (
                    <Link to={"/InformationStream/article/" + id.toString()} key={id} className=" w-full md:w-mediumScreenWidth lg:w-largeScrenWidth mt-5 flex flex-col">
                        <div className="meta flex flex-row items-center mb-2">
                            <span className="material-icons mr-1 mediumIcon">account_circle</span>
                            <p className="mr-1 text-sm">{article.author}</p>
                            <span className="material-icons verySmallIcon">fiber_manual_record</span>
                            <p className="ml-1 text-slate-500 text-sm">{article.publishedAt}</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col mr-3">
                                <h2 className="text-xl font-bold">{article.title}</h2>
                                <p className="text-slate-500 text-sm">{article.description}</p>
                            </div>
                            <div className="flex flex-col w-imgBig">
                                <img className="rounded-md w-full h-auto" src={article.heroImage} alt={article.title} />
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            {article.categories?.map((category, index) => (
                                <span key={index} className="text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 px-4 py-1 me-2 inline-flex items-center mb-1">
                                    {category}
                                </span>
                            )
                            )}
                        </div>
                    </Link>
                )
                )}
            </div>
        </div>
    )
}
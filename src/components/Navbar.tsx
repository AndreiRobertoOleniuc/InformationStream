import React from "react";
import {  Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="fixed bottom-0 left-0 w-full pt-2 pb-2 bg-slate-100 border-t-2 border-slate-200 flex flex-row justify-around">
            <Link to="/" className="flex flex-col justify-center items-center cursor-pointer">
                <span className="material-icons">feed</span>
                <p className="mt-2">News</p>
            </Link>
            <Link to="/create" className="flex flex-col justify-center items-center cursor-pointer">
                <span className="material-icons">add</span>
                <p className="mt-2">Artikel erstellen</p>
            </Link>
        </div>
    )
}
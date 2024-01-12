import React from "react";
import {  Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="w-full pt-2 pb-7 bg-slate-100 border-t-2 border-slate-200 fixed bottom-0 flex flex-row justify-around" >
            <Link to="/" className="flex flex-col justify-center items-center cursor-pointer">
                <span class="material-icons">feed</span>
                <p className="mt-2">News</p>
            </Link>
            <Link to="/create" className="flex flex-col justify-center items-center cursor-pointer">
                <span class="material-icons">add</span>
                <p className="mt-2">Create Article</p>
            </Link>
            <Link to="/profile" className="flex flex-col justify-center items-center cursor-pointer">
                <span class="material-icons">person</span>
                <p className="mt-2">Profile</p>
            </Link>
        </div>
    )
}
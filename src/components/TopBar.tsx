import React from "react";
import "./Topbar.scss"

export default function TopBar() {
    return (
        <div className=" w-full bg-blue-500 pr-2 pl-2 pt-5">
            <div className="w-full flex justify-between mb-4">
                <span className="w-10"></span>
                <p className="text-white text-lg">Informations Stream</p>
                <div className="flex flex-row justify-center items-center">
                    <span className="material-icons smallIcon text-white text-lg cursor-pointer mr-2">notifications</span>
                    <span className="material-icons bigIcon text-white text-lg cursor-pointer">
                        account_circle
                    </span>
                </div>
            </div>

            <form className="mb-5">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Search for news" required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                </div>
            </form>

            <ul className="flex max-w-full text-sm font-medium text-center text-gray-500  border-gray-200 overflow-x-hidden overflow-y-auto">
                <li className="me-2 w-2/5">
                    <a href="/" aria-current="page" className="flex flex-row  justify-center items-center p-2   text-white  border-blue-200 border-b-4 active w-full h-full text-xs">Following</a>
                </li>
                <li className="me-2  w-2/5">
                    <a href="/" className="flex flex-row  justify-center items-center p-2   hover:border-blue-300 hover:border-b-4 text-white w-full h-full bg-opacity-50 text-xs">
                        <span className="material-icons smallIcon mr-1 ">
                            star
                        </span>
                        For you
                    </a>
                </li>
                <li className="me-2  w-2/5">
                    <a href="/" className="flex flex-row  justify-center items-center  p-2  hover:border-blue-300 hover:border-b-4 text-white w-full h-full bg-opacity-50 text-xs">
                        <span className="material-icons smallIcon mr-1">
                            local_fire_department
                        </span>
                        Breaking news
                    </a>
                </li>
                <li className="me-2  w-2/5">
                    <a href="/" className="flex flex-row  justify-center items-center p-2  hover:border-blue-300 hover:border-b-4 text-white w-full h-full bg-opacity-50 text-xs ">
                        <span className="material-icons smallIcon mr-1">
                            trending_up
                        </span>
                        Treding news</a>
                </li>

            </ul>

        </div>
    )
}
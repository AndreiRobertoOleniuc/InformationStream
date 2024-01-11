import React from "react";

export default function NavBar() {
    return (
        <div className="w-full pt-2 pb-7 bg-slate-100 border-t-2 border-slate-200 fixed bottom-0 flex flex-row justify-around" >
            <div className="flex flex-col justify-center items-center cursor-pointer">
                <span class="material-icons">home</span>
                <p className="mt-2">Home</p>
            </div>
            <div className="flex flex-col justify-center items-center cursor-pointer">
                <span class="material-icons">bookmark</span>
                <p className="mt-2">Bookmarks</p>
            </div>
            <div className="flex flex-col justify-center items-center cursor-pointer">
                <span class="material-icons">person</span>
                <p className="mt-2">Profile</p>
            </div>
        </div>
    )
}
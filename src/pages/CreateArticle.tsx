import React, { useState } from 'react';
import "../styles/Icons.scss"
import { Section } from '../models/Section';

export default function CreateArticle() {
    const [categories, setCategories] = useState<string[]>([])
    const [category, setCategory] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const [sections, setSections] = useState<Section[]>([])
    
    let disableSection: boolean = true;

    const addCategory = ()=>{
        setCategories([...categories, category])
        setCategory("")
    }

    const canSectionsBeAdded = ()=>{
        disableSection = !(title!=="" && description!=="" && image!=="" && categories.length>0);
    }

    const canBePublished = ()=>{
        return disableSection && sections.length>0
    }
    return (
        <div className="w-full px-3 py-2 h-full bg-slate-200 flex flex-col justify-between">
            <div className="builder w-full flex-col">
                <h1 className="text-3xl font-semibold mb-2">Builder</h1>
                <div className="h-0.5 w-full bg-slate-300 opacity-50"></div>
                <p className="mt-5">First add Information about your Article here:</p>
                <div className="mt-5">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Title</label>
                    <input type="text" id="title" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Title" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="mt-5">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Description</label>
                    <textarea id="description" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Description" required value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="mt-5">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Hero Image URL</label>
                    <input type="text" id="image" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Image URL" required value={image} onChange={(e)=>setImage(e.target.value)}/>
                </div>
                <div className="mt-5">
                    {categories.map((category, index) => (
                        <span key={index} className="text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 px-4 py-2.5 me-2 inline-flex items-center">
                            {category}
                            <span className="material-icons smallIcon ml-2 cursor-pointer" onClick={()=>setCategories(categories.filter((cat, i)=>index!==i))}>
                                close
                            </span>
                        </span>
                    )
                    )}
                </div>
                <div className="mt-5">   
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only">category</label>
                    <div className="relative">
                        <input type="text" id="search" className="lock w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " 
                        placeholder="Category" 
                        required 
                        value={category} 
                        onChange={(e)=>setCategory(e.target.value)} />
                        <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                        onClick={addCategory}>Add</button>
                    </div>
                </div>
            </div>
            <div className="action-bar flex flex-row ">
                <button type="button" className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center me-2" onClick={canSectionsBeAdded}>
                    <span className="material-icons smallIcon mr-2">
                    save
                    </span>
                    Save Meta Info
                </button>
                <button type="button" className={` font-medium rounded-lg text-sm px-2.5  py-2.5 text-center inline-flex items-center me-2 ${disableSection ? "border-blue-300 border-2 text-black opacity-20" : "text-white bg-blue-500 hover:bg-blue-600"}`} disabled={!disableSection}>
                    <span className="material-icons smallIcon mr-2">
                    add
                    </span>
                    Add Section
                </button>
                <button type="button" className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-2.5  py-2.5 text-center inline-flex items-center me-2">
                    <span className="material-icons smallIcon mr-2">
                    publish
                    </span>
                    Publish Article
                </button>
            </div>
        </div>
    )
}
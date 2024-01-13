import React, { useState } from 'react';
import "../styles/Icons.scss"
import { Section } from '../models/Section';
import ArticleComponent from '../components/Article';

export default function CreateArticle() {
    const [categories, setCategories] = useState<string[]>(["Tutorial", "React", "News"])
    const [category, setCategory] = useState<string>("")
    const [title, setTitle] = useState<string>("How to use the Builder?")
    const [description, setDescription] = useState<string>("This is a Tutorial to show how to use the Builder")
    const [image, setImage] = useState<string>("https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png")
    const [sections, setSections] = useState<Section[]>([])

    const addCategory = ()=>{
        if(category==="") return;
        setCategories([...categories, category])
        setCategory("")
    }
    const canSectionsBeAdded = title!=="" && description!=="" && image!=="" && categories.length>0
    const canBePublished = canSectionsBeAdded && sections.length !== 0
    const [isInSectionMode, setIsInSectionMode] = useState<boolean>(true);

    const toggleSectionMode = ()=>{
        if(canSectionsBeAdded){
            setIsInSectionMode(!isInSectionMode);
        }
    }

    const addSection = ()=>{
        if(isInSectionMode){
            setSections([...sections, {
                id: sections.length,
                name: "Basic Section",
                contentBlocks: [
                    {
                        type: "text",
                        content: "Hello World",
                        mode: "edit"
                    }
                ],
            }])
            console.log(sections)
        }
    }

    return (
        <div className="w-full px-3 py-2 h-full bg-slate-200 flex flex-col justify-between">
            <div className="builder w-full flex-col">
                <h1 className="text-3xl font-semibold mb-2">Builder</h1>
                <div className="h-0.5 w-full bg-slate-300 opacity-50"></div>
                {isInSectionMode ? 
                <div>
                    <p className="mt-5 text-xl">Add Article Section here:</p>
                    <ArticleComponent article={
                        {
                            title: title,
                            description: description,
                            heroImage: image,
                            author:"default",
                            publishedAt: new Date(),
                            categories: categories,
                            sections: sections
                        }
                    }/>
                </div> : 
                <div>
                    <p className="mt-5">First add Information about your Article here:</p>
                    <div className="mt-5">
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Title</label>
                        <input type="text" 
                        id="title" 
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " 
                        placeholder="Title" 
                        required 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Description</label>
                        <textarea id="description" 
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " 
                        placeholder="Description" 
                        required 
                        value={description} 
                        onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Hero Image URL</label>
                        <input type="text" id="image" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " 
                        placeholder="Image URL" 
                        required 
                        value={image} 
                        onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        {categories.map((category, index) => (
                            <span key={index} className="text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 px-4 py-2.5 me-2 inline-flex items-center mb-1">
                                {category}
                                <span className="material-icons smallIcon ml-2 cursor-pointer" onClick={()=>setCategories(categories.filter((cat, i)=>index!==i))}>
                                    close
                                </span>
                            </span>
                        )
                        )}
                    </div>
                    <div className="mt-4">   
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
                }
            </div>
            <div className="flex flex-row">
                <button type="button" className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center me-2 cursor-pointer" onClick={toggleSectionMode}>
                    <span className="material-icons smallIcon mr-2">
                    save
                    </span>
                    {isInSectionMode ?  "Edit Meta Info":  "Save Meta Info"}
                </button>
                <button type="button" 
                    className={` font-medium rounded-lg text-sm px-2.5  py-2.5 text-center inline-flex items-center me-2 ${isInSectionMode  ?"text-white bg-blue-500 hover:bg-blue-600": "border-blue-300 border-2 text-black opacity-20 cursor-pointer" }`} 
                    disabled={!isInSectionMode} 
                    onClick={addSection}>
                    <span className="material-icons smallIcon mr-2">
                    add
                    </span>
                    Add Section
                </button>
                <button type="button" className={`font-medium rounded-lg text-sm px-2.5  py-2.5 self-end text-center inline-flex items-center me-2  ${canBePublished ? "text-white bg-blue-500 hover:bg-blue-600": "border-blue-300 border-2 text-black opacity-20 cursor-pointer" }`} disabled={!canBePublished}>
                    <span className="material-icons smallIcon mr-2">
                    publish
                    </span>
                    Publish Article
                </button>
            </div>
        </div>
    )
}
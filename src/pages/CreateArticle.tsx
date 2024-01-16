import React, { useState } from 'react';
import "../styles/Icons.scss"
import ArticleComponent from '../components/Article';
import { useDispatch } from 'react-redux';
import { addNews } from '../state/newsSlice';
import { useNavigate } from 'react-router-dom';

export default function CreateArticle() {
    const [categories, setCategories] = useState<string[]>([])
    const [category, setCategory] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [heroImage, setHeroImage] = useState<string>("")
    const [content, setContent] = useState<string>("")
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const addCategory = ()=>{
        if(category==="") return;
        setCategories([...categories, category])
        setCategory("")
    }
    const canSectionsBeAdded = title!=="" && description!==""  && categories.length>0;
    const isContentEmpty = content === "" || content === "<p><br></p>" || content === "<p><br></p><p><br></p>" || content === "<p><br></p><p><br></p><p><br></p>" ;
    const canBePublished = canSectionsBeAdded && !isContentEmpty
    const [isInSectionMode, setIsInSectionMode] = useState<boolean>(false);

    const formatDate = () => {
        const date = new Date()
        //Format my Date in the following way: Day Month(Written) Year in en-gb
        return date.toLocaleDateString("en-gb", { day: "numeric", month: "long", year: "numeric" })
    }

    const toggleSectionMode = ()=>{
        if(canSectionsBeAdded){
            setIsInSectionMode(!isInSectionMode);
        }
    }

    const publishArticle = ()=>{
        if(canBePublished){
            dispatch(addNews({
                title,
                description,
                heroImage,
                categories,
                author:"Test User",
                publishedAt: formatDate(),
                content
            }));
            console.log({
                title,
                description,
                heroImage,
                categories,
                author:"Test User",
                publishedAt: formatDate(),
                content
            })
            navigate('/');
        }
    }

    return (
        <div className="w-full px-3 py-2 flex-grow bg-slate-200 flex flex-col justify-between pb-24">
            <div className="builder w-full flex-col">
                <h1 className="text-3xl font-semibold mb-2">Builder</h1>
                <div className="h-0.5 w-full bg-slate-300 opacity-50"></div>
                {isInSectionMode ? 
                <div>
                    <p className="mt-5 text-xl text-blue-600 italic">Erstelle deinen Artikel hier</p>
                    <ArticleComponent article={
                        {
                            title: title,
                            description: description,
                            heroImage: heroImage,
                            author:"default",
                            publishedAt: formatDate(),
                            categories: categories,
                            content: content
                        }
                    } setContent={setContent} editMode={true}/>
                </div> : 
                <div>
                    <p className="mt-5">Füge zuerst Allgemeine Information über deinen Artikel hinzu:</p>
                    <div className="mt-5">
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Title</label>
                        <input type="text" 
                        id="title" 
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " 
                        placeholder="Titel" 
                        required 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Description</label>
                        <textarea id="description" 
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " 
                        placeholder="Beschreibung" 
                        required 
                        value={description} 
                        onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Hero Image URL</label>
                        <input type="text" id="image" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " 
                        placeholder="Haupt Bild URL" 
                        required 
                        value={heroImage} 
                        onChange={(e)=>setHeroImage(e.target.value)}/>
                    </div>
                    <div className="mt-5">
                        {categories?.map((category, index) => (
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
                            placeholder="Kategory" 
                            required 
                            value={category} 
                            onChange={(e)=>setCategory(e.target.value)} />
                            <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                            onClick={addCategory}>Hinzufügen</button>
                        </div>
                    </div>
                </div>
                }
            </div>
            <div className="flex flex-row mt-3">
                <button type="button" className={`font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center me-2 cursor-pointer ${canSectionsBeAdded ? "text-white bg-blue-500 hover:bg-blue-600": "border-blue-300 border-2 text-black opacity-20 cursor-pointer" }`} disabled={!canSectionsBeAdded} onClick={toggleSectionMode}>
                    <span className="material-icons smallIcon mr-2">
                    save
                    </span>
                    {!isInSectionMode ?  "Infos sichern":  "Infos ändern"}
                </button>
                <button type="button" className={`font-medium rounded-lg text-sm px-2.5  py-2.5 self-end text-center inline-flex items-center me-2  ${canBePublished ? "text-white bg-blue-500 hover:bg-blue-600": "border-blue-300 border-2 text-black opacity-20 cursor-pointer" }`} disabled={!canBePublished} onClick={publishArticle}>
                    <span className="material-icons smallIcon mr-2">
                    publish
                    </span>
                    Artikel veröffentlichen
                </button>
            </div>
        </div>
    )
}
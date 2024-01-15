
import React from 'react';
import { Article } from '../models/Article';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../styles/QuillOverrite.scss";


const ArticleComponent: React.FC<{ article: Article, setContent?: React.Dispatch<React.SetStateAction<string>> }> = ({ article, setContent }) => {
  let readOnly = false;
    // specify the formats
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  // specify the toolbar options
  const modules = {
    toolbar: !readOnly ? [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ] : [],
    clipboard: {
      matchVisual: false,
    },
  };

  const formatDate = () => {
    const date = new Date(article.publishedAt)
    //Format my Date in the following way: Day Month(Written) Year in en-gb
    return date.toLocaleDateString("en-gb", { day: "numeric", month: "long", year: "numeric" })
  }

  return (
    <div className="article-container overflow-hidden">
      <h1 className="text-3xl font-bold mb-1">{article.title}</h1>
      <div className='mb-2 font-light'>{formatDate()}</div>
      <div className="flex flex-row flex-wrap mb-2">
        {article.categories.map(category => (
          <div key={category} className="flex justify-center items-center font-medium py-1 px-2 rounded-full text-gray-700 bg-gray-100 border border-gray-300 w-20 mr-1 mb-1">
            <div className="text-xs font-normal leading-none max-w-full flex-initial text-center ">{category}</div>
          </div>
        ))}
      </div>
      <img src={article.heroImage} alt="" className="w-1/3 h-auto rounded hidden lg:block" />
      <p className="text-gray-600 mt-2 mb-5">{article.description}</p>


      <ReactQuill theme="snow" value={article.content} onChange={setContent} modules={modules} readOnly={readOnly} formats={formats} />
    </div>
  );
};

export default ArticleComponent;
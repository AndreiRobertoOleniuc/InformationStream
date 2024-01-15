
import React, { useEffect } from 'react';
import { Article } from '../models/Article';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../styles/QuillOverrite.scss";

const ArticleComponent: React.FC<{ article: Article, setContent?: React.Dispatch<React.SetStateAction<string>>, editMode?: boolean }> = ({ article, setContent, editMode }) => {
  let readOnly = !editMode;
    // specify the formats
  const formats = [
    'header', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
  ];

  // specify the toolbar options
  const modules = {
    toolbar: !readOnly ? [
      [{ 'header': '1' }, { 'header': '2' }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['clean']
    ] : [],
    clipboard: {
      matchVisual: false,
    },
  };

  useEffect(() => {
    console.log(article.content);
  }, [article]);

  return (
    <div className="article-container overflow-hidden">
      <h1 className="text-3xl font-bold mb-1">{article.title}</h1>
      <div className='mb-2 font-light'>{article.publishedAt}</div>
      <div className="flex flex-row flex-wrap mb-2">
        {article.categories?.map(category => (
          <div key={category} className="flex justify-center items-center font-medium py-1 px-2 rounded-full text-gray-700 bg-gray-100 border border-gray-300 w-auto mr-1 mb-1">
            <div className="text-xs font-normal leading-none max-w-full flex-initial text-center ">{category}</div>
          </div>
        ))}
      </div>
      {article.heroImage !== "" ? <img src={article.heroImage} alt="" className={`h-auto rounded mb-2 self-center ${editMode ? 'w-1/3' : 'w-full'}`}  /> : null}
      <p className="text-gray-600 mb-5">{article.description}</p>
      
      <ReactQuill
        theme="snow"
        value={article.content}
        onChange={setContent}
        modules={modules}
        readOnly={readOnly}
        formats={formats}
        className={editMode ? 'editable' : 'readonly'}
      />
    </div>
  );
};

export default ArticleComponent;
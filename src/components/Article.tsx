
import React from 'react';
import { Article } from '../models/Article';
import TextBlockComponent from './blocks/TextBlock';
import ImageBlockComponent from './blocks/ImageBlock';

const ArticleComponent: React.FC<{ article: Article }> = ({ article }) => {
  const renderContentBlock = (block: any) => {
    switch (block.type) {
      case 'text':
        return <TextBlockComponent block={block} />;
      case 'image':
        return <ImageBlockComponent block={block} />;
      default:
        return null;
    }
  };

  return (
    <div className="article-container overflow-hidden">
      <h1 className="text-3xl font-bold mb-1">{article.title}</h1>
      <img src={article.heroImage} alt="" className="w-2/6 h-auto rounded hidden lg:block" />
      <p className="text-gray-600 mb-2">{article.description}</p>
      <div className="flex flex-row flex-wrap mb-2">
        {article.categories.map(category => (
          <div key={category} className="flex justify-center items-center font-medium py-1 px-2 rounded-full text-gray-700 bg-gray-100 border border-gray-300 w-20 mr-1 mb-1">
                <div className="text-xs font-normal leading-none max-w-full flex-initial text-center ">{category}</div>
          </div>
        ))}
      </div>
        
      <div className="overflow-y-auto overflow-x-hidden max-h-96">
        {article.sections.map(section => (
          <div key={section.id} className="section">
            <h2 className="text-2xl font-bold mb-1">{section.name}</h2>
            {section.contentBlocks.map(block => renderContentBlock(block))}
            <button className="mt-2 bg-blue-400 text-white px-4 py-2 rounded w-full">Add Contentblock</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleComponent;
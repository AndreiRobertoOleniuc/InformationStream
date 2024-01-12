
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
    <div className="article-container p-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      {article.sections.map(section => (
        <div key={section.id} className="section">
          {section.contentBlocks.map(block => renderContentBlock(block))}
        </div>
      ))}
    </div>
  );
};

export default ArticleComponent;
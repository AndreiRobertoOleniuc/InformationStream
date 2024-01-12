
import React from 'react';
import { ImageBlock } from  '../../models/Content/ImageBlock';

const ImageBlockComponent: React.FC<{ block: ImageBlock }> = ({ block }) => {
  return (
    <div className="my-4">
      <img src={block.url} alt={block.caption} className="max-w-full h-auto" />
      {block.caption && <p className="text-center text-sm text-gray-500">{block.caption}</p>}
    </div>
  );
};

export default ImageBlockComponent;
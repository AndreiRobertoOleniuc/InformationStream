import React, { useState } from 'react';
import { ImageBlock } from '../../models/Content/ImageBlock';

const ImageBlockComponent: React.FC<{ block: ImageBlock }> = ({ block }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editSrc, setEditSrc] = useState(block.url);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    block.url = editSrc; // update the block src
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditSrc(event.target.value);
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      {isEditMode ? (
        <div>
          <input 
            type="text" 
            value={editSrc} 
            onChange={handleChange} 
            className="border p-2 rounded w-full"
          />
          <button 
            onClick={handleSave} 
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <img src={block.url} alt="" className="w-full h-auto" />
          <button 
            onClick={handleEdit} 
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageBlockComponent;
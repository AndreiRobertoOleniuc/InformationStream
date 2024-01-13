import React, { useState } from 'react';
import { TextBlock } from '../../models/Content/TextBlock';

const TextBlockComponent: React.FC<{ block: TextBlock }> = ({ block }) => {
  const [isEditMode, setIsEditMode] = useState(block.mode === 'edit');
  const [editText, setEditText] = useState(block.content);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    block.content = editText; // update the block content
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value);
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      {isEditMode ? (
        <div>
          <input 
            type="text" 
            value={editText} 
            onChange={handleChange} 
            className="border p-2 rounded"
          />
          <button 
            onClick={handleSave} 
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <span className="text-gray-700">{block.content}</span>
          <button 
            onClick={handleEdit} 
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default TextBlockComponent;
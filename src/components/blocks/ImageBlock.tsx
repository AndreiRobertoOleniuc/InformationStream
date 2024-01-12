// TextBlockComponent.tsx

import React from 'react';
import { TextBlock } from '../../models/Content/TextBlock';

const TextBlockComponent: React.FC<{ block: TextBlock }> = ({ block }) => {
  return <p className="text-gray-700">{block.content}</p>;
};

export default TextBlockComponent;
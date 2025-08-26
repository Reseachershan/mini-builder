import React from 'react';

interface Props {
  addField: (type: 'text' | 'number' | 'checkbox' | 'select' | 'radio') => void;
}

const FieldControls: React.FC<Props> = ({ addField }) => (
  <div className="controls">
    {['text', 'number', 'checkbox', 'select', 'radio'].map(type => (
      <button key={type} onClick={() => addField(type as any)}>
        Add {type}
      </button>
    ))}
  </div>
);

export default FieldControls;

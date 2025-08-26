import React from 'react';
import type { FormField } from '../types';

interface Props {
  field: FormField;
  updateField: (id: string, updates: Partial<FormField>) => void;
  deleteField: (id: string) => void;
}

const FieldEditor: React.FC<Props> = ({ field, updateField, deleteField }) => (
  <div className="field-editor">
    <input
      value={field.label}
      onChange={e => updateField(field.id, { label: e.target.value })}
      placeholder="Label"
    />
    <label>
      <input
        type="checkbox"
        checked={field.required}
        onChange={e => updateField(field.id, { required: e.target.checked })}
      />
      Required
    </label>
    {['select', 'radio'].includes(field.type) && (
      <textarea
        placeholder="Comma-separated options"
        onChange={e =>
          updateField(field.id, {
            options: e.target.value.split(',').map(opt => opt.trim()),
          })
        }
      />
    )}
    <button className='delete-btn' onClick={() => deleteField(field.id)}>Delete</button>
  </div>
);

export default FieldEditor;

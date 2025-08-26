import React from 'react';
import type { FormField } from '../types';

interface FieldProps {
  field: FormField;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onDelete: (id: string) => void;
}

function Field({ field, value, onChange, onDelete }: FieldProps) {
  const renderInput = () => {
    switch (field.type) {
      case 'text':
        return <input type="text" name={field.id} value={value || ''} onChange={onChange} />;
      case 'number':
        return <input type="number" name={field.id} value={value || ''} onChange={onChange} />;
      case 'checkbox':
        return <input type="checkbox" name={field.id} checked={!!value} onChange={onChange} />;
      case 'select':
        return (
          <select name={field.id} value={value || ''} onChange={onChange}>
            <option value="">Select an option</option>
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div className="radio-group">
            {field.options?.map(option => (
              <label key={option}>
                <input type="radio" name={field.id} value={option} checked={value === option} onChange={onChange} /> {option}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-field">
      <label>{field.label}</label>
      {renderInput()}
      <button onClick={() => onDelete(field.id)}>Delete</button>
    </div>
  );
}

export default Field;
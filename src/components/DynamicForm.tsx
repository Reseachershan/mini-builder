import React from 'react';
import type { FormField } from '../types';
import Field from './Field';

interface DynamicFormProps {
  schema: FormField[];
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onFormSubmit: (e: React.FormEvent) => void;
  onDeleteField: (id: string) => void;
}

function DynamicForm({ schema, formData, onInputChange, onFormSubmit, onDeleteField }: DynamicFormProps) {
  return (
    <form onSubmit={onFormSubmit} className="dynamic-form">
      <h3>My Custom Form</h3>
      {schema.map((field) => (
        <Field
          key={field.id}
          field={field}
          value={formData.get(field.id) as string}
          onChange={onInputChange}
          onDelete={onDeleteField}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
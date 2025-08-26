import React, { useState } from 'react';
import './app.css';
import type { FormField } from './types';
import FieldControls from './components/FieldControls';
import FieldEditor from './components/FieldEditor';
import FormRenderer from './components/FormRenderer';

type FormDataObject = { [key: string]: any };

const App: React.FC = () => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [formData, setFormData] = useState<FormDataObject>({});

  const addField = (type: FormField['type']) => {
    const newField: FormField = {
      id: Date.now().toString(),
      type,
      label: `${type} field`,
      required: false,
      options: ['option1', 'option2'],
    };
    setFields([...fields, newField]);
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields(fields.map(f => (f.id === id ? { ...f, ...updates } : f)));
  };

  const deleteField = (id: string) => {
    setFields(fields.filter(f => f.id !== id));
  };

  const handleSubmit = () => {
    const missing = fields.filter(f => f.required && !formData[f.id]);
    if (missing.length) {
      alert('Please fill all required fields.');
    } else {
      alert("Form submitted check console")
      const labeledData: FormDataObject = {};
      fields.forEach(f => {
        labeledData[f.label] = formData[f.id];
      });

      // setSubmittedData(labeledData);
      console.log({ labeledData, formData })
    }
  };
  

  return (
    <div className="app">
      <h1>Mini Custom Form Builder</h1>
      <FieldControls addField={addField} />
      {fields.map(field => (
        <FieldEditor
          key={field.id}
          field={field}
          updateField={updateField}
          deleteField={deleteField}
        />
      ))}
      {Boolean(fields?.length) && <h1>Preview form</h1>}
      <FormRenderer
        schema={fields}
        formData={formData}
        setFormData={setFormData}
      />
      {Boolean(fields?.length) && (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default App;

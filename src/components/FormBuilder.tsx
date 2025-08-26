import type { FormField } from '../types';

interface FormBuilderProps {
  onAddField: (type: FormField['type']) => void;
}

function FormBuilder({ onAddField }: FormBuilderProps) {
  return (
    <div className="form-builder-controls">
      <h3>Add a Field</h3>
      <button onClick={() => onAddField('text')}>Add Text Input</button>
      <button onClick={() => onAddField('number')}>Add Number Input</button>
      <button onClick={() => onAddField('checkbox')}>Add Checkbox</button>
      <button onClick={() => onAddField('select')}>Add Select</button>
      <button onClick={() => onAddField('radio')}>Add Radio Group</button>
    </div>
  );
}

export default FormBuilder;
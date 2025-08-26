import React from 'react';
import type { FormData, FormField } from '../types';

interface Props {
    schema: FormField[];
    formData: FormData;
    setFormData: (data: FormData) => void;
}

const FormRenderer: React.FC<Props> = ({ schema, formData, setFormData }) => {
    const handleChange = (id: string, value: string | boolean) => {
        setFormData({ ...formData, [id]: value });
    };

    return (
        <form>
            {schema.map(field => (
                <div key={field.id}>
                    <label>{field.label}</label>
                    {field.type === 'text' && (
                        <input
                            type="text"
                            value={formData[field.id] as string || ''}
                            onChange={e => handleChange(field.id, e.target.value)}
                        />
                    )}
                    {field.type === 'number' && (
                        <input
                            type="number"
                            value={formData[field.id] as string || ''}
                            onChange={e => handleChange(field.id, e.target.value)}
                        />
                    )}
                    {field.type === 'checkbox' && (
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={formData[field.id] === 'yes'}
                                    onChange={() => handleChange(field.id, 'yes')}
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={formData[field.id] === 'no'}
                                    onChange={() => handleChange(field.id, 'no')}
                                />
                                No
                            </label>
                        </div>
                    )}

                    {field.type === 'select' && field.options && (
                        <select
                            value={formData[field.id] as string || ''}
                            onChange={e => handleChange(field.id, e.target.value)}
                        >
                            {field.options.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    )}
                    {field.type === 'radio' && field.options && field.options.map(opt => (
                        <label key={opt}>
                            <input
                                type="radio"
                                name={field.id}
                                value={opt}
                                checked={formData[field.id] === opt}
                                onChange={e => handleChange(field.id, opt)}
                            />
                            {opt}
                        </label>
                    ))}
                </div>
            ))}
        </form>
    );
};

export default FormRenderer;

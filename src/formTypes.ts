export type FieldType = 'text' | 'number' | 'checkbox' | 'select' | 'radio';

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
  options?: string[];
}

export type FormData = Record<string, string | boolean>;

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'checkbox' | 'select' | 'radio';
  required: boolean;
  options?: string[];
}

export interface FormData {
  [key: string]: any;
}
import  React from "react";

export interface SearchProps {
  name: string,
  type?: 'text',
  placeholder?: string,
  label?: string,
  id?: string,
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string
}
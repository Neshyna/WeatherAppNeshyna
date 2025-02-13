import  React from "react";

export interface SearchProps {
  name: string,
  type?: 'text',
  placeholder?: string,
   id?: string,
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
 
}
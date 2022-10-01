import { type } from "os";

export type ProductsFromApi=  {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  images:      string[];
}

export interface Category {
  id:    number;
  name:  string;
  image: string;
}
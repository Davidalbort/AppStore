import { ProductsFromApi } from "../types/service";
import axios from 'axios';

interface ParametersGetProducts {
  limit?: number,
  page: number
}

const getProducts =  ({limit=10,page=0}: ParametersGetProducts): Promise<Array<ProductsFromApi>> => {

  const apiUrl = `https://api.escuelajs.co/api/v1/products?offset=${limit*page}&limit=${limit}`
  return axios
    .get(apiUrl)
    .then(response => response.data)

}

export {getProducts}
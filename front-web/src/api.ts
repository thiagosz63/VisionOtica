import axios from "axios";

const api_url = 'http://localhost:8080';

export function fetchProducts(){
    return axios(`${api_url}/products`)
}
import axios from "axios";

const api_url = 'http://127.0.0.1:8080';

export function fetchProducts(){
    return axios(`${api_url}/products`)
}

export function fetchClient(){
    return axios(`${api_url}/client`)
}

export function fetchClientAge(){
    return axios(`${api_url}/client/nome`)
}







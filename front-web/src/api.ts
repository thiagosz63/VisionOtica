import axios from "axios";
import { FormikValues } from "formik";

const api_url = 'http://127.0.0.1:8080';

export function axiosGet(props:string){
    return axios(api_url + props )
}

export function axiosPost(props:string, Values: FormikValues){
    return axios.post(api_url + props,Values)
}

export function axiosPut(props:string,values: FormikValues){
    return axios.put(api_url + props,values)
}
export function axiosDelete(props:string){
    return axios.delete(api_url + props)
}






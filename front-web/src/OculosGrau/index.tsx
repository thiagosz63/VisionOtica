import { useEffect, useState } from 'react';
import { axiosGet} from '../api';
import ProductsList from './productsList';
import './style.css'
import { Product } from './types';

function OculosGrau() {

    const[products,setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axiosGet("/products")
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))

    }, [] );
    

    return (
        <div>
            <ProductsList products={products}/>
        </div>
    );
}

export default OculosGrau;
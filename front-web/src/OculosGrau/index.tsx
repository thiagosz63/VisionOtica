
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { axiosGet, axiosPost } from '../api';
import { checkIsSelected } from './hepers';
import OrderOculos from './OrderOculos';
import ProductsList from './productsList';
import './style.css'
import { Product } from './types';

function OculosGrau() {

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price
  }, 0);

  useEffect(() => {
    axiosGet("/products")
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))

  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
 
    const payload = {
      quantidade: selectedProducts.length,
      preco: totalPrice,
      client: {"id":1},
      products: productsIds
         
    }
    
    axiosPost('/pedido', payload)
      .then(function (response: AxiosResponse) {
        alert('Dados inseridos com sucesso');
        setSelectedProducts([]);

      })
      .catch(function (error: AxiosError) {
        alert(error.message)
      });


  }

  return (
    <div>
      <OrderOculos amount={selectedProducts.length}
        totalPrice={totalPrice}
        onSubmit={handleSubmit} />
      <ProductsList
        products={products}
        onSelectProduct={handleSelectProduct}
        selectedProducts={selectedProducts} />
    </div>
  );
}

export default OculosGrau;
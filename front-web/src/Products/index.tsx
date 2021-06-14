
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { axiosGet, axiosPost } from '../api';
import { checkIsSelected } from './hepers';
import OrderOculos from './OrderProducts';
import ProductsList from './productsList';
import { toast } from 'react-toastify';
import './style.css'
import { Product } from './types';
import { History } from '../history';
import { useLocation } from 'react-router-dom';

interface props{
  path:string
}
function OculosGrau() {

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price
  }, 0);

  const [path,setPath] = useState<string>();
    const location = useLocation();
  
    
    
  useEffect(() => {

    setPath((location.state as props).path);
    axiosGet(`/products${path}`)
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
      
  });

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
    if(!!localStorage.getItem('client-logado')){
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const Client = localStorage.getItem("id")

    const payload = {
      quantidade: selectedProducts.length,
      preco: totalPrice,
      client: { "id": Client},
      products: productsIds

    }

    if (selectedProducts.length > 0) {
      axiosPost('/pedido', payload)
        .then(function (response: AxiosResponse) {
          toast.success('Pedido Efetuado Com sucesso')
          setSelectedProducts([]);

        })
        .catch(function (error: AxiosError) {
          toast.error(error.message)
        });
    } else {
      toast.warning("Nenhum Produto Selecionado")
    }
  }else{
    toast.warning("Entre ou Crie uma conta")
    History.push("/page-user")
  }

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
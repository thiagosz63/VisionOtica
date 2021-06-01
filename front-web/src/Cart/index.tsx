import { useState } from 'react';
import { 
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea
} from './styled';
import cartpng from './cart.png';
import downpng from './down.png';
import Produtos from '../pagesAdmin/telasAdmin/Produtos';


function Cart() {

    const [show, setShow] = useState(false);

    const handleCartClick = () => {
        setShow(!show);
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src={cartpng}/>
               <CartText>Meu Carrinho  ({Produtos.length})</CartText > 
               {show &&
               <CartIcon src={downpng}/>
                }
            </CartHeader>
            <CartBody show={show}>
                <ProductsArea>     
                    <ProductItem>
                         <ProductPhoto src={cartpng}/>
                            <ProductInfoArea>
                                <ProductName>Nome do Produto</ProductName>
                                <ProductPrice>R$ 0,00</ProductPrice>
                            </ProductInfoArea>
                        <ProductQuantityArea>
                        </ProductQuantityArea>
                    </ProductItem>                   
                </ProductsArea>
            </CartBody>
        </CartArea>
    )
}
export default Cart;
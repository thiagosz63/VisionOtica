import { Product } from './types';

type Props = {
    product: Product;
}

function ProductsCard({product}: Props) {

    return (
        <div className='order-card-container'>
            <h3 className='order-card-title'>
                {product.name}
            </h3>
            <img className='order-card-image' src={product.imageUri} alt={product.name} />

            <h3 className='order-card-price'>
                R$ {product.price}
            </h3>
            <div className='order-card-description'>
                <h3>Descrição</h3>
                <p>
                    {product.description}
                </p>
            </div>

        </div>
    );
}
export default ProductsCard;
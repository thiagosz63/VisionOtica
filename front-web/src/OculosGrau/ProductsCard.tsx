import Oculos from './oculos.jpg';
function ProductsCard() {

    return (
        <div className='order-card-container'>
            <h3 className='order-card-title'>
                Oculos de grau
            </h3>
            <img className='order-card-image' src={Oculos} alt='Oculos' />

            <h3 className='order-card-price'>
                R$ 309,90
            </h3>
            <div className='order-card-description'>
                <h3>Descrição</h3>
                <p>
                    Descrição de Produto
                </p>
            </div>

        </div>
    );
}
export default ProductsCard;
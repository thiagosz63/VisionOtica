import './style.css';

interface props {
    id?: string
    titulo?: string
    name?: string
    price?: number,
    description?: string,
    imageUri?: string,
    fechaModal: () => void

}

function ModalProduto(props: props) {

    return (
        <body className="Container">
            <div className='order-card-container'>
                <h3 className='order-card-title'>
                    {props.name}
                </h3>
                <img className='order-card-image' src={props.imageUri} alt={props.name} />

                <h3 className='order-card-price'>
                    R$ {props.price}
                </h3>
                <div className='order-card-description'>
                    <h3>Descrição</h3>
                    <p>
                        {props.description}
                    </p>

                </div>
                <div className="col text-center">
                    <button className='btn btn-outline-success w-50'
                        title="Compra">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </body>
    )
}
export default ModalProduto;
import { useState } from 'react';
import { Product } from './types';
import './style.css';
import { Modal } from 'react-bootstrap';
import ModalCart from './ModalCart'

type Props = {
    product: Product;
}

function ProductsCard({product}: Props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
           

            <button onClick={handleShow} className='btn btn-outline-success w-100'
                        title="Compra">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
            </div>
            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header>
                    <button type="button" className="close btn btn-secondary" onClick={handleClose}
                        aria-label="Close">
                        Cancelar
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <ModalCart />
                </Modal.Body>
            </Modal>
        </div>     
    );
}
export default ProductsCard;
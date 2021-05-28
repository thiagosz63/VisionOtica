import { useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import { Product } from './types';
import './style.css';

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
            </div>

            <button onClick={handleShow} className='btn btn-outline-success w-100'
                        title="Compra">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>

            <Modal show={show}  
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
       
                <Modal.Header>
                    <Modal.Title>{product.name}</Modal.Title>
                    <button type="button" className="close btn btn-secondary" onClick={handleClose}
                        aria-label="Close">
                        Cancelar
                    </button>
                </Modal.Header>
                <ModalBody>

                <img src={product.imageUri} alt={product.name} />
                    <button onClick={handleShow} className='btn btn-outline-success w-30'
                        title="Compra">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                </ModalBody>
            </Modal>

        </div>
    );
}
export default ProductsCard;
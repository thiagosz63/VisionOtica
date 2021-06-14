import './style.css';
import { Product } from '../../../Products/types';
import { useState } from 'react';


interface Props {
    product?: Product;
}

function Cart(product: Props) {

    const [qnt, setQnt] = useState(1);

    return (
        <div className="container">
            <h1>Meu Carrinho</h1>
            <ul className="list-group mb-3">
                <li className="list-group-item py-3">
                    <div className="row g-3">
                        <div className='col-3 align-self-center'>
                            <img src={"imagem/5.png" } alt="oculo"
                                className="img-thumbnail" />
                        </div>

                        <div className='col-6 text-left align-self-center'>
                            <h4>
                                òculos
                            </h4>
                            THE SEEKER AN7182 2702 Azul Striped Lente Tam 49.
                        </div>

                        <div className='col-3 
                                 align-self-center car'>
                            <div className="input-group">
                                <button className="btn btn-outline-dark btn-sm" type="button"
                                    onClick={() => setQnt(qnt + 1)}>
                                    <i className='fas fa-angle-up' />
                                </button>

                                <input type="text" className="form-control text-center border-dark" value={qnt + ''} />

                                <button className="btn btn-outline-dark btn-sm" type="button"
                                    onClick={() => setQnt(qnt > 1 ? qnt - 1 : qnt)}>
                                    <i className='fas fa-angle-down' />
                                </button>

                                <button className="btn btn-outline-danger border-dark btn-sm" type="button">
                                    <i className='far fa-trash-alt' />
                                </button>
                            </div>
                            <div className="text-end mt-2">
                                <small className="text-secondary">Valor R$ 3,99</small><br />
                                <span className="text-dark">R$ 15.25</span>
                            </div>
                        </div>

                    </div>
                </li>

                <li className="list-group-item py-3">
                    <div className="text-end float-right">
                        <h5 className="text-dark mb-3 text-center">
                            Valor Total: R$ 63,84
                        </h5>
                        <a href="/index.html" className="btn btn-outline-success btn-md">
                            Continuar Comprando
                            </a>
                        <a href="/fechamento_itens.html" className="btn btn-danger btn-md ms-2 mt-xs-3">Fechar Compra</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Cart;
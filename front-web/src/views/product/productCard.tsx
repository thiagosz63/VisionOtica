import './style.css'
import Image from './image.jpg'

export default function ProductCard() {
    return (
        <div className="product-card-container"
        >
            <h3 className='product-card-title'>
                Produto name
            </h3>
            <img className='product-card-image img-thumbnail' src={Image} alt="imageName" />

            <h3 className='product-card-price'>
                R$1200
            </h3>
            <div className='product-card-description'>
                <h3>Descrição</h3>
                <p>
                    Lorem ipsum dolor sit amet .
                    Os operadores gráficos e tipográficos sabem disso bem,
                    na realidade,
                </p>
            </div>
        </div>
    )
}
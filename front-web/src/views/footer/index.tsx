import './style.css';
import Instagram from './assets/instagram.png';
import Facebook from './assets/facebook.png';
import Twitter from './assets/twitter.png';
import Logo from '../header/assets/logo.png';
import Whatsapp from './assets/whatsapp.png';
import Youtube from './assets/youtube.png';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer>
            <div className="container centralizar">
                <div className='row' id="marcador">

                    <div className="col-md-2">
                        <h4>SUA CONTA</h4>
                        <ul className="navbar-nav" >
                            <li className="nav-item" >
                                <Link to='/page-user'>Acessar sua Conta</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to='/'>Carrinho de Compras</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h4>INSTITUCIONAL</h4>
                        <ul className="navbar-nav">
                            <li className="nav-item" >
                                <Link to='/quem-somos'>Quem Somos</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to='/contato'>Contato</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to='/politica-de-entrega'>Políticas de Entregas</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to='/trocas-e-Devolucao'>Políticas de troca e devolução</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to='/universidade-vision'>Universidade Vision</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h4>AJUDA/FAQ</h4>
                        <ul className="navbar-nav">
                            <li className="nav-item" >
                                <Link to='/cuidar-oculos'>Como cuidar dos seus óculos</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to='/calcule-distancia-pupilar'>Calcule sua distância pupilar</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to='/dicas'>Dicas Úteis</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to='/duvidas'>Dúvidas freqüentes</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 centralizar">
                        <div className="footer-left">
                            <Link to="./Home"><img src={Logo} width="90px" alt=""></img></Link>
                        </div>

                        <div className="social" >
                            <Link to='/'><img src={Instagram} alt='Instagram' width="50px"></img></Link>
                            <Link to='/'><img src={Facebook} alt='Facebook' width="50px"></img></Link>
                            <Link to='/'><img src={Twitter} alt='Twitter' width="50px"></img></Link>
                            <Link to='/'><img src={Youtube} alt='Youtube' width="50px"></img></Link>
                            <Link to='/'><img src={Whatsapp} alt='Whatsapp' width="50px"></img></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
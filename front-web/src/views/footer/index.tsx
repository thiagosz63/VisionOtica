import './style.css';
import Instagram from './assets/instagram.png';
import Facebook from './assets/facebook.png';
import Twitter from './assets/twitter.png';
import Logo from '../header/assets/logo.png';
import Whatsapp from './assets/whatsapp.png';
import Youtube from './assets/youtube.png';


export default function Footer() {
    return (
        <footer>
            <div className="container centralizar">
                <div className='row' id="marcador">

                    <div className="col-md-2">
                        <h4>SUA CONTA</h4>
                        <ul className="navbar-nav" >
                            <li className="nav-item" >
                                <a href='/page-user'>Acessar sua Conta</a>
                            </li>
                            <li className="nav-item" >
                                <a href='/'>Carrinho de Compras</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h4>INSTITUCIONAL</h4>
                        <ul className="navbar-nav">
                            <li className="nav-item" >
                                <a href='/quem-somos'>Quem Somos</a>
                            </li>
                            <li className="nav-item" >
                                <a href='/contato'>Contato</a>
                            </li>
                            <li className="nav-item" >
                                <a href='/politica-de-entrega'>Políticas de Entregas</a>
                            </li>
                            <li className="nav-item" >
                                <a href='/trocas-e-Devolucao'>Políticas de troca e devolução</a>
                            </li>
                            <li className="nav-item" >
                                <a href='/universidade-vision'>Universidade Vision</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h4>AJUDA/FAQ</h4>
                        <ul className="navbar-nav">
                            <li className="nav-item" >
                                <a href='/cuidarOculos'>Como cuidar dos seus óculos</a>
                            </li>
                            <li className="nav-item" >
                                <a href='/cdpupilar'>Calcule sua distância pupilar</a>
                            </li>
                            <li className="nav-item" >
                                <a href='/dicas'>Dicas Úteis</a>
                            </li>
                            <li className="nav-item" >
                                <a href='/duvidas'>Dúvidas freqüentes</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 centralizar">
                        <div className="footer-left">
                            <a href="./Home"><img src={Logo} width="90px" alt=""></img></a>
                        </div>

                        <div className="social" >
                            <a href='/'><img src={Instagram} alt='Instagram' width="50px"></img></a>
                            <a href='/'><img src={Facebook} alt='Facebook' width="50px"></img></a>
                            <a href='/'><img src={Twitter} alt='Twitter' width="50px"></img></a>
                            <a href='/'><img src={Youtube} alt='Youtube' width="50px"></img></a>
                            <a href='/'><img src={Whatsapp} alt='Whatsapp' width="50px"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
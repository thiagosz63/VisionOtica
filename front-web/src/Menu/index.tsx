import './style.css'
import Logo from './logo.png';
import { Link } from 'react-router-dom';

function Menu() {
    
    return (
        <header>
            <div className="page-header">
                <div className='row'>
                    <div className='col-md-4 d-flex'>
                        <div className='align-self-center logo'>
                            <Link to="/">
                                <img src={Logo} width="90px" alt="logo-vision-otica" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-sm navbar-light navbar-transparente">
                <div className="container">
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
                        <i className="fas fa-bars text-white"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="nav-principal">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={{
                                    pathname: '/products',
                                    state: { path: "/grau/categoria" },
                                }}
                                    className="nav-link text-white">
                                    Óculos de grau
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={{
                                    pathname: '/products',
                                    state: { path: "/sol/categoria" },
                                }}
                                    className="nav-link text-white">
                                    Óculos de sol
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={{
                                    pathname: '/products',
                                    state: { path: "/lenteContato/categoria" },
                                }}
                                    className="nav-link text-white">
                                    Lentes de contato
                                </Link>
                            </li>

                            <li className="nav-item">
                            <Link to={{
                                    pathname: '/products',
                                    state: { path: "" },
                                }}
                                    className="nav-link text-white">
                                    Todos
                                </Link>
                            </li>

                            <li className="nav-item divisor ml-2 mr-2"></li>

                            <li className="nav-item">
                                <Link to="/page-user" className="btn btn-outline-light ml-4">Entrar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    );
}
export default Menu;
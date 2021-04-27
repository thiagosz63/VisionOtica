import './style.css'
import Logo from './logo.png';
import { Link } from 'react-router-dom';
import { History } from '../history';


function Menu() {

    function btnEntra(){
        if(localStorage.getItem('client-logado')){
            History.push('/page-user');
        }else{
            History.push('/loguin-cliente');
        }
    }
    
    return (
        <header>
            <div className="contante page-header">
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
                                <Link to='/oculos-de-grau' className="nav-link text-white">Óculos de grau</Link>
                            </li>

                            <li className="nav-item">
                                <a href="/" className="nav-link">Óculos de sol</a>
                            </li>

                            <li className="nav-item">
                                <a href="/" className="nav-link">Lentes de contato</a>
                            </li>

                            <li className="nav-item">
                                <a href="/" className="nav-link">Marcas</a>
                            </li>

                            <li className="nav-item divisor ml-2 mr-2"></li>

                            <li className="nav-item">
                                <button id ='buttons'onClick={btnEntra} type="button" 
                                    className="btn btn-outline-light ml-4">Entrar</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>  
        </header>
    );
}
export default Menu;
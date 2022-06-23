import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";
import './style.css';

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className='row'>
                    <div className='col-md-4 d-flex'>
                        <div className='align-self-center header-logo'>
                            <Link to="/">
                                <img src={Logo} width="90px" alt="logo-vision-otica" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar  navbar-expand-sm navbar-light navbar-transparente navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                <Link to="/">
                                    <img src={Logo} width="90px" alt="logo-vision-otica" />
                                </Link>
                            </h5>
                            <button type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to="/produtos" className="nav-link active" aria-current="page">
                                        Óculos de grau
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Óculos de sol
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Lentes de contato
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Todos
                                    </Link>
                                </li>

                                <li className="nav-item ml-2 mr-2 header-divisor" />
                            </ul>

                            <form className="d-flex">
                                <Link to={"/login"} className="btn btn-outline-light">
                                    Entrar
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}
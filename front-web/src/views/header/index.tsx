import Logo from "./assets/logo.png";
import './style.css';

export default function Header() {
    return (
        <header>
            <div className="page-header">
                <div className='row'>
                    <div className='col-md-4 d-flex'>
                        <div className='align-self-center logo'>
                            <a href="/">
                                <img src={Logo} width="90px" alt="logo-vision-otica" />
                            </a>
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
                                <a href="/">
                                    <img src={Logo} width="90px" alt="logo-vision-otica" />
                                </a>
                            </h5>
                            <button type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        Óculos de grau
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Óculos de sol
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Lentes de contato
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Todos
                                    </a>
                                </li>

                                <li className="nav-item divisor ml-2 mr-2"></li>
                            </ul>
                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-light" type="submit">Entrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}
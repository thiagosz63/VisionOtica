import './style.css';
import Logo from './UniversidadeLogo.png';
import Foto01 from './foto01.png';
import Foto02 from './foto02.jpg';
import Foto03 from './foto03.png';
import Foto04 from './foto04.png';
import Foto05 from './foto05.jpg';
import Foto06 from './foto06.jpg';
import Foto07 from './foto07.png';
import Foto08 from './foto08.jpg';
import Foto09 from './foto09.jpg';

function UniversidadeVision() {
    return (
        <body>
            <div className="container universidadeVision">
                <img src={Logo} width="500px" alt=""></img>
            </div>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>

                        <div className="universidadeVision-bottom">
                            <img src={Foto01} width="100%" alt=""/>
                        </div>

                        <div className="universidadeVision-bottom">
                            <img src={Foto02} width="100%" alt=""/>
                        </div>

                        <div className="universidadeVision-bottom">
                            <img src={Foto03} width="100%" alt=""/>
                        </div>
                    </div>

                    <div className='col-md-4'>

                        <div className="universidadeVision-bottom">
                            <img src={Foto04} width="100%" alt=""/>
                        </div>

                        <div className="universidadeVision-bottom">
                            <img src={Foto05} width="100%" alt=""/>
                        </div>

                        <div className="universidadeVision-bottom">
                            <img src={Foto06} width="100%" alt="" />
                        </div>
                    </div>

                    <div className='col-md-4'>

                        <div className="universidadeVision-bottom">
                            <img src={Foto07} width="100%" alt="" />
                        </div>

                        <div className="universidadeVision-bottom">
                            <img src={Foto08} width="100%" alt=""/>
                        </div>

                        <div className="universidadeVision-bottom">
                            <img src={Foto09} width="100%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default UniversidadeVision;

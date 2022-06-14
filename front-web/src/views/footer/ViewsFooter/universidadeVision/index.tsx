import './style.css';
import Logo from './assets/UniversidadeLogo.png';
import Foto01 from './assets/foto01.png';
import Foto02 from './assets/foto02.jpg';
import Foto03 from './assets/foto03.png';
import Foto04 from './assets/foto04.png';
import Foto05 from './assets/foto05.jpg';
import Foto06 from './assets/foto06.jpg';
import Foto07 from './assets/foto07.png';
import Foto08 from './assets/foto08.jpg';
import Foto09 from './assets/foto09.jpg';

export default function UniversidadeVision() {
    return (
        <div>
            <div className="container universidadeVision">
                <img src={Logo} width="60%" alt=""></img>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>

                        <div className="universidadeVision-bottom">
                            <img src={Foto01} width="100%" alt="" />
                        </div>

                        <div className="universidadeVision-bottom">
                            <img src={Foto02} width="100%" alt="" />
                        </div>

                        <div className="universidadeVision-bottom">
                            <img src={Foto03} width="100%" alt="" />
                        </div>
                    </div>

                    <div className='col-md-4'>

                        <div className="universidadeVision-bottom">
                            <img src={Foto04} width="100%" alt="" />
                        </div>

                        <div className="universidadeVision-bottom">
                            <img src={Foto05} width="100%" alt="" />
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
                            <img src={Foto08} width="100%" alt="" />
                        </div>

                        <div className="universidadeVision-bottom">
                            <img src={Foto09} width="100%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import Ame from './ame.png';
import Homemarcas from './homemarcas.png';
import Okulos from './okulos.jpg';
import Mosaico from './mosaico.png';
import Outlet3 from './outlet3.png';
import Antiazul3 from './antiazul3.png';
import Rayban20f from './rayban20f.jpg';
import Mosaico3 from './mosaico3.png';
import Lanca from './lanca.png';
import Ela from './ela.png';
import Acess from './acess.png';
import Armacao3 from './armacao3.png';
import './style.css'

function Home() {
    return (
        <div>
            <div className='contante cont align-self-center'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div id='idCarousel' className='carousel slide' data-ride='carousel'>
                            <div className='carousel-inner'>
                                <div className='carousel-item active'>
                                    <img src={Ame} width='100%' alt='ame' />
                                </div>

                                <div className='carousel-item'>
                                    <img src={Homemarcas} width='100%' alt='Homemarcas' />
                                </div>

                                <div className='carousel-item'>
                                    <img src={Okulos} width='100%' alt='okulos' />
                                </div>
                            </div>
                            <a href='#idCarousel' className='carousel-control-prev' data-slide='prev'>
                                <i className='fas fa-angle-left fa-3x'></i>
                            </a>

                            <a href='#idCarousel' className='carousel-control-next' data-slide='next'>
                                <i className='fas fa-angle-right fa-3x'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container align-self-center fotos'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='coteudo'>
                            <img src={Mosaico} width='100%' alt='mosaico' />
                        </div>

                        <div className='coteudo'>
                            <img src={Outlet3} width='100%' alt='outlet3' />
                        </div>

                        <div className='coteudo'>
                            <img src={Antiazul3} width='100%' alt='antiazul3' />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='coteudo'>
                            <img src={Rayban20f} width='100%' alt='Rayban20f' />
                        </div>

                        <div className='coteudo'>
                            <img src={Mosaico3} width='100%' alt='Mosaico3' />
                        </div>

                        <div className='coteudo'>
                            <img src={Lanca} width='100%' alt='Lanca' />
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='coteudo'>
                            <img src={Ela} width='100%' alt='Ela' />
                        </div>

                        <div className='coteudo'>
                            <img src={Acess} width='100%' alt='Acess' />
                        </div>

                        <div className='coteudo'>
                            <img src={Armacao3} width='100%' alt='Armacao3' />
                        </div>
                    </div>

                </div>
                <article>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15806.307080780953!2d-34.8800677!3d-7.9391921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69935a31ebe971!2sUNINASSAU%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1624325452694!5m2!1spt-BR!2sbr"
                        width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                </article>
            </div>

        </div >
    );
}

export default Home;
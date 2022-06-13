import Ame from './assets/ame.png';
import Homemarcas from './assets/homemarcas.png';
import Okulos from './assets/okulos.jpg';
import Mosaico from './assets/mosaico.png';
import Outlet3 from './assets/outlet3.png';
import Antiazul3 from './assets/antiazul3.png';
import Rayban20f from './assets/rayban20f.jpg';
import Mosaico3 from './assets/mosaico3.png';
import Lanca from './assets/lanca.png';
import Ela from './assets/ela.png';
import Acess from './assets/acess.png';
import Armacao3 from './assets/armacao3.png';
import './style.css'

export default function Home() {
    return (
        <div>
            <div className='contante cont align-self-center'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div id="idCarousel" className="carousel slide carousel-dark" data-bs-ride="true">
                            <div className="carousel-indicators">
                                <button type="button"
                                    className="active btn-primary"
                                    data-bs-target="#idCarousel"
                                    data-bs-slide-to="0"
                                    aria-current="true"
                                    aria-label="Slide 1" />
                                <button type="button"
                                    data-bs-target="#idCarousel"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2" />
                                <button type="button"
                                    data-bs-target="#idCarousel"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3" />
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Ame} width='100%' alt='ame' />
                                </div>
                                <div className="carousel-item">
                                    <img src={Homemarcas} width='100%' alt='Homemarcas' />
                                </div>
                                <div className="carousel-item">
                                    <img src={Okulos} width='100%' alt='okulos' />
                                </div>
                            </div>
                            <button className="carousel-control-prev"
                                type="button"
                                data-bs-target="#idCarousel"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next"
                                type="button"
                                data-bs-target="#idCarousel"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
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
                <h4>Nossa Localização</h4>
                <article>
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15806.307080780953!2d-34.8800677!3d-7.9391921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69935a31ebe971!2sUNINASSAU%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1624325452694!5m2!1spt-BR!2sbr"
                        width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                </article>
            </div>

        </div >
    );
}
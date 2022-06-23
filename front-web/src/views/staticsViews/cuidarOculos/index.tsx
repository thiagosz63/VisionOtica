import './style.css';
import Cuidar01 from './assets/cuidar01.png';
import Cuidar02 from './assets/cuidar02.png';
import Cuidar03 from './assets/cuidar03.jpg';
import Cuidar04 from './assets/cuidar04.png';
import Cuidar05 from './assets/cuidar05.jpg';
import Cuidar06 from './assets/cuidar06.png';
import { Link } from 'react-router-dom';

export default function CuidarOculos() {
    return (
        <body className="cuidarOculos">
            <div className="container ">
                <h2>Dicas de como cuidar dos seus Óculos de Grau e Óculos de Sol</h2>
                <div>
                    <img src={Cuidar01} width="100%" alt="" />
                </div>
                <div className="row">
                    <div className="col-md-7 cuidarOculos-div">
                        <h4 className="cuidarOculos-h4-left">#dica1 - Cuidados ao lavar as lentes dos seus óculos</h4>
                        <p className="text-justify">
                            Sim....Você pode e deve lavar as lentes dos seus óculos de grau e óculos de sol.
                            Lave-as quando ficarem oleosas. Não é necessário lavá-las diariamente, pois, o excesso de
                            limpeza pode danificar as películas de proteção das lentes, como o anti-reflexo.
                            O ideal é lavá-las quando ficarem engorduradas ou após períodos de transpiração
                            excessiva (como ginástica e praia/piscina).
                        </p>
                        <p className="text-justify">
                            Para que fiquem bem limpas, basta pingar uma gota de detergente ou sabão neutro em cada
                            lente e passar gentilmente a ponta do dedo. Não use unhas para não correr o risco de arranhar.
                            Depois, é só enxaguar abundantemente, de preferência, em água na temperatura ambiente
                            (nem fria, nem quente). Para tirar o excesso de água que fica na lente,
                            basta usar um lenço/toalha de papel macio. Para finalizar, faça o polimento com a flanela de
                            microfibra. Essa dica é fundamental para cuidar bem dos seus óculos.
                        </p>
                    </div>
                    <div className="col-md-5 cuidarOculos-div-right">
                        <img src={Cuidar02} height="320px" width="100%" alt="" />
                    </div>

                    <div className="col-md-12 cuidarOculos-div">
                        <h4 className="cuidarOculos-h4-left">#dica2 - Como limpar as lentes do seu óculos de grau e óculos de sol sem usar água</h4>
                        <p className="text-justify">
                            Dá pra limpar as lentes mesmo quando não se tem água disponível.
                            Afinal, emergência é emergência, e ninguém quer usar seu óculos Ray-Ban, Gucci, Prada ou Oakley,
                            cheio de marcas de dedo. Nesses casos, a dica é usar os sprays de limpeza e abusar da flanela de microfibra.
                            Se não tiver o spray, a flanela já ajuda bastante a manter as lentes limpas até o momento da lavagem.
                            Elas agarram o pó e a sujeira sem arranhar as lentes.</p>
                        <p className="text-justify">
                            Este processo, conhecido como limpeza a seco, remove as partículas de sujeira e pó e pode
                            ser realizado a qualquer hora. Mas atenção: suas roupas não foram feitas para limpar suas lentes...
                            elas são super sensíveis e o risco de micro arranhões é muito grande e, com o tempo, ficarão muito
                            perceptíveis e atrapalharão sua visão, além de danificar as peliculas de proteção das lentes dos seus
                            óculos de grau e Óculos de sol.
                            Uma outra alternativa é usar lenços umedecidos ideais para limpeza de óculos, como o Lens Wipes da Zeiss.</p>
                    </div>

                    <div className="col-md-5 cuidarOculos-div">
                        <h4 className="cuidarOculos-h4-left">#dica3 - Como cuidar dos seus óculos de sol e grau usando maquiagem em seu rosto</h4>
                        <p className="text-justify">
                            Óculos de sol e/ou óculos de grau feminino + maquiagem = óculos
                            que necessitam de cuidados especiais para a armação não amarelar. É fácil resolver!
                        </p>
                        <p className="text-justify">
                            Óculos de sol e/ou óculos de grau feminino + maquiagem = óculos
                            que necessitam de cuidados especiais para a armação não amarelar. É fácil resolver!
                        </p>
                    </div>
                    <div className="col-md-7 cuidarOculos-div-right">
                        <img src={Cuidar03} height="320px" width="100%" alt="" />
                    </div>

                    <div className="col-md-5 cuidarOculos-div-right">
                        <img src={Cuidar04} height="320px" width="100%" alt="" />
                    </div>

                    <div className="col-md-7 cuidarOculos-div">
                        <h4 className="cuidarOculos-h4-left">#dica4 - Como guardar corretamente os seus óculos de grau e óculos de sol</h4>
                        <p className="text-justify">
                            Guardar corretamente seus óculos de grau e óculos de sol é muito importante.
                            O ideal é guardá-lo dentro da caixinha. E não, as lentes não devem ser colocadas para baixo dentro da case.
                            O correto é que elas fiquem para cima para evitar arranhões.
                            Quando não estiver com a case a mão, nunca deixe seus óculos com as lentes apoiadas na superfície.
                        </p>
                        <p className="text-justify">
                            Sempre dobre as hastes e apoie a armação com elas. Se não for usar seus óculos durante muito tempo,
                            como à noite, por exemplo, é melhor guardá-los em um local apropriado, dentro da case.
                            Esse conselho é especialmente importante para donos de cães e gatos. Você pode descobrir
                            que seu amigo de quatro patas gosta de mastigar as armações e a até mesmo as lentes dos seus óculos.
                            O resultado não só é desagradável, como também perigoso para seu bichinho.
                        </p>
                    </div>

                    <div className="col-md-5 cuidarOculos-div">
                        <h4 className="cuidarOculos-h4-left">#dica5 - Óculos de grau e óculos de sol expostos ao calor. Como fazer?</h4>
                        <p className="text-justify">
                            Não deixe seus óculos expostos ao calor extremo durante horas seguidas,
                            principalmente sobre o painel do carro ou dentro do porta luvas.
                            Temperaturas muito frias também podem danificar seus óculos, deformando-os.
                            Assim, em locais frios, nada de deixar os óculos dormindo dentro do carro.
                        </p>
                        <p className="text-justify">
                            Evite colocar os óculos em cima da cabeça, isso pode deformar as hastes, afinal,
                            sua cabeça é mais larga que o seu rosto. Nada de retirar seus óculos de sol e de grau com uma mão só.
                            Isso poderá danificar a estrutura da sua armação, pois você estará exercendo maior pressão em uma das hastes.
                            Ponha e retire os óculos com as duas mãos.
                            Assim você garante a simetria da sua armação e, consequentemente, o conforto dos óculos no seu rosto.
                        </p>
                    </div>
                    <div className="col-md-7 cuidarOculos-div-right">
                        <img src={Cuidar05} height="400px" width="100%" alt="" />
                    </div>

                    <div className="col-md-5 cuidarOculos-div-right">
                        <img src={Cuidar06} height="260px" width="100%" alt="" />
                    </div>

                    <div className="col-md-7 cuidarOculos-div">
                        <h4 className="cuidarOculos-h4-left">#dica6 - Óculos de grau infantil: como evitar que eles acabem rápido</h4>
                        <p className="text-justify">
                            Para cuidar bem dos óculos infantis, não deixe seus óculos expostos
                            ao calor extremo durante horas seguidas. Uma boa sugestão é tentar convencer a
                            garotada a deixar os óculos infantil sempre no mesmo local quando não estiverem em uso.
                            Se isso não funcionar, a tradicional cordinha pode ajudar.
                        </p>
                        <p className="text-justify">
                            Para as meninas é mais fácil, pois existem inúmeros cordões lindos
                            disponíveis no mercado que podem deixar o visual do óculos de grau infantil feminino ainda mais legal.
                        </p>
                    </div>
                </div>
                <Link to='/oculos-de-grau' id="cuidar-link" type="button"> Clique aqui e escolha seus óculos e lentes ideais</Link>
            </div>
        </body>
    )
}
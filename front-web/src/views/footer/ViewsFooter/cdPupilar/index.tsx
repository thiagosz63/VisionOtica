import './style.css';
import Olhos01 from './assets/Olhos1.jpg';
import Olhos02 from './assets/Olhos2.jpg';
import Olhos03 from './assets/Olhos_3_.jpg';
import Olhos04 from './assets/Olhos4.jpg';
import Olhos05 from './assets/Olhos5.jpg';
import { Link } from 'react-router-dom';

function CDPupilar() {
    return (
        <body>
            <div className="container cdpupilar">
                <h2>Calcule sua Distância Pupilar</h2>
                <p id="cdpupilar-p">
                    A Distância entre as PUPILAS dos olhos (pontinho preto no meio dos olhos)
                    é uma medida fundamental para fazer o melhor óculos para seus olhos.
                    Essa medida ajuda a definir o seu CENTRO ÓPTICO,
                    que é a sua visão verdadeira, delimitado no ponto exato na frente das suas pupilas.
                </p>
                <div>
                    <img src={Olhos01} width="80%" alt="" />
                </div>
                <p id="cdpupilar-p">
                    Para a fabricação dos seus óculos de grau é fundamental a informação dessa medida ao laboratório,
                    uma vez que essa medida possibilita que a lente de grau fabricada atenda perfeitamente a sua necessidade visual.
                </p>
                <h4>Distância Pupilar (DP) informada na Receita</h4>
                <p id="cdpupilar-p">
                    Caso a sua distância pupilar seja informada na receita do seu oftalmologista,
                    favor informa-la no campo respectivo no site.
                </p>

                <h4>Como Calcular a sua Distância Pupilar (DP)</h4>
                <p>
                    Caso a sua distância pupilar não conste da receita,
                    pesquisamos o melhor e mais simples método para calcular a
                    DP - você mesmo pode fazer em 7 passos:
                </p>
                <p>
                    1. Você precisará apenas de um pilot
                    (caneta de ponta macia – pode ser qualquer tipo de caneta hidrocor),
                    um óculos (pode ser de sol ou de grau) e uma régua.
                </p>
                <div>
                    <img src={Olhos05} width="80%" alt="" />
                </div>
                <p>
                    2. Coloque os óculos no rosto.
                </p>
                <p>
                    3. Olhe para um objeto qualquer (de preferência algo pequeno)
                    que esteja a pelo menos 3 metros (o ideal é acima de 6 metros) de distância de você.
                </p>
                <div>
                    <img src={Olhos02} width="80%" alt="" />
                </div>
                <p>
                    4. Feche o olho esquerdo e marque com o pilot na lente do olho direito exatamente
                    o ponto na frente daquele objeto distante.
                </p>
                <div>
                    <img src={Olhos03} width="80%" alt="" />
                </div>
                <p>
                    5. Faça o mesmo fechando o olho direito e marcando a lente do olho esquerdo.
                    Se feito corretamente os dois pontos devem virar um só ponto na frente do objeto distante, com os dois olhos abertos.
                </p>
                <p>
                    6. Tire os óculos do rosto e meça a distância entre os dois pontos com a régua.
                </p>
                <div>
                    <img src={Olhos04} width="80%" alt="" />
                </div>
                <p>
                    7. Esse valor (geralmente entre os 60 e 70 milímetros) é a sua Distância Pupilar. Muito fácil!
                </p>

                <Link to='/oculos-de-grau' id="cdpupilar-link" type="button"> Clique aqui e escolha seus óculos e lentes ideais</Link>

            </div>
        </body>
    )
}
export default CDPupilar;
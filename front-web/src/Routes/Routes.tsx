import { Switch, Route, Router } from "react-router-dom";
import Cadastrar from "../cadastrar";
import Footer from "../Footer";
import Contato from "../Footer/TelasFooter/Contato";
import Dicas from "../Footer/TelasFooter/Dicas";
import PoliticaDeEntrega from "../Footer/TelasFooter/Politica-de-Entrega";
import QuemSomos from "../Footer/TelasFooter/QuemSomos";
import TrocasDevolucao from "../Footer/TelasFooter/Trocas-e-Devolucao";
import UniversidadeVision from "../Footer/TelasFooter/UniversidadeVision";
import { History } from "../history";
import Home from "../Home";
import LoguinCliente from "../LoguinCliente";
import Menu from "../Menu";
import OculosGrau from "../OculosGrau";
import PageUser from "../pageUser";
import PrivateRooter from "./PrivateRooter";
import PrivateRooterInverso from "./PrivateRooterInverso";


function Routes() {
    return (
        <Router history={History}>
            <Menu />
            <Switch>
                <Route component={Cadastrar} exact path="/cadastrar" />
                <Route component={OculosGrau} exact path="/oculos-de-grau" />
                <Route component={QuemSomos} exact path="/quem-somos" />
                <Route component={Contato} exact path="/contato" />
                <Route component={PoliticaDeEntrega} exact path="/politica-de-entrega" />
                <Route component={TrocasDevolucao} exact path="/trocas-e-Devolucao" />
                <Route component={UniversidadeVision} exact path="/universidade-vision" />
                <Route component={Dicas} exact path="/dicas" />
                <PrivateRooterInverso component={LoguinCliente}  exact path="/loguin-cliente" />
                <PrivateRooter component={PageUser} exact path="/page-user" />
                <Route component={Home} path="/" />
            </Switch>
            <Footer />
        </Router>
    );
}
export default Routes;
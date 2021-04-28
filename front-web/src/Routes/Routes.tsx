import { Switch, Route, Router } from "react-router-dom";
import Cadastrar from "../cadastrar";
import Footer from "../Footer";
import Contato from "../Footer/TelasFooter/Contato";
import PoliticaDeEntrega from "../Footer/TelasFooter/Politica-de-Entrega";
import QuemSomos from "../Footer/TelasFooter/QuemSomos";
import TrocasDevolucao from "../Footer/TelasFooter/Trocas-e-Devolucao";
import { History } from "../history";
import Home from "../Home";
import LoguinCliente from "../Loguin";
import Menu from "../Menu";
import OculosGrau from "../OculosGrau";
import PagesAdmin from "../pagesAdmin";
import PageUser from "../pagesUser";
import PrivateRooter from "./PrivateRooter";
import PrivateRooterInverso from "./PrivateRooterInverso";
import PrivateRooterAdmin from "./PrivateRooterAdmin";
import UniversidadeVision from "../Footer/TelasFooter/UniversidadeVision";
import Dicas from "../Footer/TelasFooter/Dicas";
import Duvidas from "../Footer/TelasFooter/Duvidas";
import CDPupilar from "../Footer/TelasFooter/CDPupilar";

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
                <Route component={Duvidas} exact path="/duvidas" />
                <Route component={CDPupilar} exact path="/cdpupilar" />
                <PrivateRooterInverso component={LoguinCliente}  exact path="/loguin" />
                <PrivateRooter component={PageUser} exact path="/page-user" />
                <PrivateRooterAdmin component={PagesAdmin} exact path="/page-admin" />
                <Route component={Home} path="/" />
            </Switch>
            <Footer />
        </Router>
    );
}
export default Routes;
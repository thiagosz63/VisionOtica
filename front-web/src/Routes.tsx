import { Switch, Route, Router } from "react-router-dom";
import Cadastrar from "./cadastrar";
import Footer from "./Footer";
import { History } from "./history";
import Home from "./Home";
import LoguinCliente from "./LoguinCliente";
import Menu from "./Menu";
import OculosGrau from "./OculosGrau";
import PageUser from "./pageUser";
import PrivateRooter from "./PrivateRooter";
import PrivateRooterInverso from "./PrivateRooterInverso";


function Routes() {
    return (
        <Router history={History}>
            <Menu />
            <Switch>
                <Route component={Cadastrar} exact path="/cadastrar" />
                <Route component={OculosGrau} exact path="/oculos-de-grau" />
                <PrivateRooterInverso component={LoguinCliente}  exact path="/loguin-cliente" />
                <PrivateRooter component={PageUser} exact path="/page-user" />
                <Route component={Home} path="/" />
            </Switch>
            <Footer />
        </Router>
    );
}
export default Routes;
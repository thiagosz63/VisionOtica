import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastrar from "./cadastrar";
import Home from "./Home";
import LoguinCliente from "./LoguinCliente";
import Menu from "./Menu";
import OculosGrau from "./OculosGrau";

function Routes() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/cadastrar">
                    <Cadastrar />
                </Route>

                <Route path="/oculos-de-grau">
                    <OculosGrau/>
                </Route>

                <Route path="/loguin-cliente">
                    <LoguinCliente/>
                </Route>   

                <Route path="/">
                    <Home />
                </Route>       
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;
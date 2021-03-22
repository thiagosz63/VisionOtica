import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastrar from "./cadastrar";
import Home from "./Home";
import Menu from "./Menu";

function Routes() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/cadastrar">
                    <Cadastrar />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;
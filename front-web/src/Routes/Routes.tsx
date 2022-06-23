import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "components/header";
import Footer from "components/footer";
import Home from "../views/home";
import CDPupilar from "views/staticsViews/cdPupilar";
import QuemSomos from "views/staticsViews/quemSomos";
import PoliticaEntrega from "views/staticsViews/politicaEntrega";
import TrocasDevolucao from "views/staticsViews/trocasDevolucao";
import UniversidadeVision from "views/staticsViews/universidadeVision";
import CuidarOculos from "views/staticsViews/cuidarOculos";
import Dicas from "views/staticsViews/dicas";
import Duvidas from "views/staticsViews/duvidas";
import Product from "views/product";
import Login from "views/login";


export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/login" element={<Login/>}/>
                <Route path="/produtos" element={<Product />} />
                <Route path="/duvidas" element={<Duvidas />} />
                <Route path="/dicas" element={<Dicas />} />
                <Route path="/cuidar-oculos" element={<CuidarOculos />} />
                <Route path="/universidade-vision" element={<UniversidadeVision />} />
                <Route path="/trocas-e-devolucao" element={<TrocasDevolucao />} />
                <Route path="/politica-de-entrega" element={<PoliticaEntrega />} />
                <Route path="/quem-somos" element={<QuemSomos />} />
                <Route path="/calcule-distancia-pupilar" element={<CDPupilar />} />
                <Route path="/" element={<Home />} />
            </Switch>
            <Footer />

        </BrowserRouter>
    );
}
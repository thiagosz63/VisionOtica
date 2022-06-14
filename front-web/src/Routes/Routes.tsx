import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "views/header";
import Footer from "views/footer";
import Home from "../views/home";
import CDPupilar from "../views/footer/ViewsFooter/cdPupilar";
import QuemSomos from "views/footer/ViewsFooter/quemSomos";
import PoliticaEntrega from "views/footer/ViewsFooter/politicaEntrega";
import TrocasDevolucao from "views/footer/ViewsFooter/trocasDevolucao";
import UniversidadeVision from "views/footer/ViewsFooter/universidadeVision";
import CuidarOculos from "views/footer/ViewsFooter/cuidarOculos";
import Dicas from "views/footer/ViewsFooter/dicas";
import Duvidas from "views/footer/ViewsFooter/duvidas";


export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
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
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../views/home";
import CDPupilar from "../views/footer/ViewsFooter/cdPupilar";
import Header from "views/header";
import Footer from "views/footer";


export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/cdpupilar" element={<CDPupilar />} />
                <Route path="/" element={<Home />} />
            </Switch>
            <Footer />

        </BrowserRouter>
    );
}
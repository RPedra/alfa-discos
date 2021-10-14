import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Blog from "./pages/Blog";
import Cadastro from "./pages/Cadastro";
import Categorias from "./pages/Categorias";
import Explorar from "./pages/Explorar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import QuemSomos from "./pages/QuemSomos";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/blog" component = {Blog} />
                <Route path = "/cadastro" component = {Cadastro} />
                <Route path = "/categorias" component = {Categorias} />
                <Route path = "/explorar" component = {Explorar} />
                <Route path = "/home" component = {Home} />
                <Route path = "/login" component = {Login} />
                <Route path = "/QuemSomos" component = {QuemSomos} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"

//Rotas Gerais
import Cadastro from "./pages/Cadastro";
import Categorias from "./pages/Categorias";
import Explorar from "./pages/Explorar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import QuemSomos from "./pages/QuemSomos";
import Carrinho from "./pages/Carrinho"
import FaleConosco from "./pages/FaleConosco";
import Cabecalho from "./pages/Cabecalho";

//Rotas Dentro de Categorias
import Sertanejo from "./pages/Categorias/Sertanejo";
import MPB from "./pages/Categorias/MPB";
import PagodeSamba from "./pages/Categorias/PagodeSamba";
import Rock from "./pages/Categorias/Rock";
import Funk from "./pages/Categorias/Funk";
import Rap from "./pages/Categorias/Rap";
import Eletronica from "./pages/Categorias/Eletronica";
import POP from "./pages/Categorias/POP";
import Gospel from "./pages/Categorias/Gospel";
import BluesJazz from "./pages/Categorias/BluesJazz";
import Reggae from "./pages/Categorias/Reggae";
import Classica from "./pages/Categorias/Classica";

//Rotas dentro de cadastro
import CadastroOne from "./pages/Cadastro/CadastroOne";

//Rotas dentro de explorar
import Todos from "./pages/Explorar/Todos";



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/*ROTAS GERAIS*/}
                <Route path = "/cadastro" component = {Cadastro} />
                <Route path = "/categorias" component = {Categorias} />
                <Route path = "/explorar" component = {Explorar} />
                <Route path = "/home" component = {Home} />
                <Route path = "/login" component = {Login} />
                <Route path = "/QuemSomos" component = {QuemSomos} />
                <Route path = "/carrinho" component = {Carrinho} />
                <Route path = "/faleconosco" component = {FaleConosco} />
                <Route path = "/temp" component = {Cabecalho} />

                {/*ROTAS DENTRO DE CATEGORIAS*/}
                <Route path = "/sertanejo" component = {Sertanejo} />
                <Route path = "/MPB" component = {MPB} />
                <Route path = "/PagodeSamba" component = {PagodeSamba} />
                <Route path = "/rock" component = {Rock} />
                <Route path = "/funk" component = {Funk} />
                <Route path = "/rap" component = {Rap} />
                <Route path = "/eletronica" component = {Eletronica} />
                <Route path = "/POP" component = {POP} />
                <Route path = "/gospel" component = {Gospel} />
                <Route path = "/bluesjazz" component = {BluesJazz} />
                <Route path = "/reggae" component = {Reggae} />
                <Route path = "/classica" component = {Classica} />
               

                {/*ROTAS DENTRO DE CADASTRO*/}
                <Route path = "/cadastroone" component = {CadastroOne} />

                {/*ROTA DENTRO DE EXPLORAR*/}
                <Route path = "/todos" component = {Todos} />
                
            </Switch>
        </BrowserRouter>
    );
}



export default Routes;
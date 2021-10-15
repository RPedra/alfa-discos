import React from "react";
import {useHistory} from "react-router-dom"
import { Link } from "react-router-dom";

function Home() {

    const history = useHistory();

    return (
        <div>
         <h1>Home</h1>

         <Link to = "Home"> Home </Link>
         <br/>
         <Link to = "Explorar">Explorar</Link>
         <br/>
         <Link to = "Categorias">Categorias</Link>
         <br/>
         <Link to = "QuemSomos">Quem Somos</Link>
         <br/>
         <Link to = "FaleConosco">Fale Conosco</Link>
         <br/>
         <Link to = "Login">Login</Link>
         <br/>

         <button 
            onClick = {() => {
                history.push("Categorias") //history.goBack volta pra página anterior
             }}
                >Explore Nossos Produtos!</button>
        <br/>
        <button 
            onClick = {() => {
                history.push("FaleConosco") //history.goBack volta pra página anterior
             }}
                >Quer vender seu CD? Entre em contato com a gente!</button>
        </div>
    );
}

export default Home;
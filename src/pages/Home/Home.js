import React from "react";
import {useHistory} from "react-router-dom"
import { Link } from "react-router-dom";

function Home() {

    const history = useHistory();

    return (
        <div>
         <h1>Home</h1>
         <button 
            onClick = {() => {
                history.push("Explorar") //history.goBack volta pra página anterior
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
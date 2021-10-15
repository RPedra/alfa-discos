import React from "react";
import {Link} from "react-router-dom";

function Rap() {
    return (
        <div>
             <h1>Rap</h1>
    
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
        </div>
    );
}

export default Rap;
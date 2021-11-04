import React from "react";
import "./CdModal.css";
import {Button, Image} from "react-bootstrap";

function CdModal({cd}){
    return (
    <div className="CdModal">
        <Image src={cd.imagem} rounded height="300px" width="300px"/>
        <div className="corpo">
        <div className="Texts">
            <h1>{cd.nome}</h1>
            <h2>{cd.artista}</h2>
            <h3>Valor: R$ {cd.valor}</h3>
        </div>
        <div className="buttonsRow">
            <Button className="carrinho"
             style={{
                backgroundColor: '#A31621',
                borderColor: '#A31621',
                
                boxShadow: '-4px 4px 5px 0px rgba(0,0,0,0.15)',               
             }} >Adicionar ao Carrinho</Button>
             {/* <Button className="artista" variant="outline-dark" style={{width:'100px'}}>Ver artista</Button> */}
        </div>
        </div>
    </div>
    );
}

export default CdModal;
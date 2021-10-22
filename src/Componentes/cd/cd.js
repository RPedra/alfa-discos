import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./cd.css";

function Cd({cd, onClick}){
    const history = useHistory();
    return(
        <div className="cds" onClick={() => onClick(cd)}>
            <Card style={{ 
                width: '250px', 
                height: '250px', 
                top: '217px',
                margin: '0 auto',  
                boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.25)',
                borderRadius: '10px'
                }}>
                <Card.Img variant="top" src={cd.imagem} style={{height: '185px', borderRadius: '10px 10px 0px 0px'}} />
                <Card.Body className="corpo">
                    <Card.Title className="nome">{cd.nome}</Card.Title>
                    <div className="autoria">
                    <Card.Subtitle className="artista">{cd.artista}</Card.Subtitle>       
                    <Card.Text className="valor" >R$ {cd.valor}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Cd;
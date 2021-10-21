import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./cd.css";

function Cd({cd}){
    const history = useHistory();
    return(
        <div className="cds">
            <Card style={{ 
                width: '300px', 
                height: '300px', 
                top: '217px',
                margin: '0 auto',  
                boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.25)',
                borderRadius: '10px'
                }}>
                <Card.Img variant="top" src={cd.imagem} style={{height: '215px', borderRadius: '10px 10px 0px 0px'}} />
                <Card.Body className="corpo">
                    <div className="autoria">
                    <Card.Title>{cd.nome}</Card.Title>
                    <Card.Subtitle>{cd.artista}</Card.Subtitle>
                    </div>
                    <Card.Text className="valor" >R$ {cd.valor}</Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Cd;
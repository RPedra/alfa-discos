import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Carta.css";

function Carta({carta}){
    return(
        <div className="carta">
            <Card style={{ width: '328px', height: '377px', top: '217px', left: '162px', }}>
                <Card.Img variant="top" src={carta.imagem} style={{height: '218px'}} />
                <Card.Body>
                    <Card.Title>{carta.titulo}</Card.Title>
                    <Button variant="bottom" >Ver CDs</Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Carta;
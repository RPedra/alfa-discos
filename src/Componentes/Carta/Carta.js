import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Carta.css";

function Carta({carta}){
    return(
        <div className="cartas">
            <Card style={{ 
                width: '328px', 
                height: '377px', 
                top: '217px', 
                left: '162px', 
                right: '158px', 
                boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.25)',
                borderRadius: '10px'
                }}>
                <Card.Img variant="top" src={carta.imagem} style={{height: '215px', borderRadius: '10px 10px 0px 0px'}} />
                <Card.Body>
                    <Card.Title>{carta.titulo}</Card.Title>
                    <br/>
                    <br/>
                    <br/>
                    <div className="botao">
                    <Button variant="bottom" >Ver CDs</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Carta;
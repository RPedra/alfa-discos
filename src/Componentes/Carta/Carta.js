import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Carta.css";

function Carta({carta}){
    const history = useHistory();
    return(
        <div className="cartas">
            <Card style={{ 
                width: '328px', 
                height: '377px', 
                margin: '0 auto',  
                boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.25)',
                borderRadius: '10px'
                }}>
                <Card.Img variant="top" src={carta.imagem} style={{height: '200px', borderRadius: '10px 10px 0px 0px'}} />
                <Card.Body>
                    <Card.Title>{carta.titulo}</Card.Title>
                    <br/>
                    <br/>
                    <br/>
                    <div className="botao">
                    <Button variant="bottom" onClick = {() => {
                            history.push(carta.pagina) 
                        }}>Ver CDs</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Carta;
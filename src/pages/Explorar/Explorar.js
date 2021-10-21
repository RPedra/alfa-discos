import React from "react";
import Cabecalho from "../Cabecalho";
import { Card, Button } from "react-bootstrap";
import "./Explorar.css";

function Explorar() {
    return (
        <div className="pagina">
            <Cabecalho/>
            <Card className="justify-content-center" style= {{
                backgroundColor: '#A31621', 
                alignItems: 'center',
                margin: '0 auto',
                maxWidth: '1156px',
                width: '100%',
                height: '50px', 
                top: '170px', 
                boxShadow: '-4px 4px 5px 0px rgba(0,0,0,0.15)'
                }}>
                <Card.Title rounded style= {{color: 'white' }} >Explorar</Card.Title>
            </Card>
            <div className="lancamentosRecentes">
            <Card className="Lancados" style= {{
                backgroundColor: '#F1E9DB',
                margin: '0 auto',
                maxWidth: '1156px',
                width: '100%',
                height: '50px', 
                top: '190px', 
                marginColor: '#F1E9DB',
                }}>
                <Card.Title rounded style= {{color: 'black' }} >Lançados Recentemente</Card.Title>
            </Card>
            </div>
        </div>
    );
}

export default Explorar;
import React from "react";
import Cabecalho from "../Cabecalho";
import { Card, Button } from "react-bootstrap";

function Categorias() {
    return (
        <div className="base">
            <Cabecalho/>
            <div className="titulo">
            <Card className="justify-content-center">
                <Card.Title rounded>Categorias</Card.Title>
            </Card>
            </div>
            <div className="categorias">
                <div className="sertanejo">
                 <Card style={{ width: '328px', height: '377px', top: '217px', left: '162px'}}>
                    <Card.Img variant="top" src="/images/Sertanejo.jpg" />
                    <Card.Body>
                        <Card.Title>Sertanejo</Card.Title>
                        <Button variant="bottom" >Ver CDs</Button>
                    </Card.Body>
                 </Card>
                </div>
                <div className="mpb">
                 <Card style={{ width: '328px', height: '377px', left: '556px', top:'-160px'}}>
                    <Card.Img variant="top" src="/images/MPB.jpg" />
                    <Card.Body>
                        <Card.Title>MPB</Card.Title>
                        <Button variant="bottom" >Ver CDs</Button>
                    </Card.Body>
                 </Card>
                </div><div className="pagode">
                 <Card style={{ width: '328px', height: '377px', left: '950px', top:'-537px'}}>
                    <Card.Img variant="top" src="/images/pandero.jpg" />
                    <Card.Body>
                        <Card.Title>Pagode/Samba</Card.Title>
                        <Button variant="bottom" >Ver CDs</Button>
                    </Card.Body>
                 </Card>
                </div>
            </div>
        </div>
    );
}

export default Categorias;
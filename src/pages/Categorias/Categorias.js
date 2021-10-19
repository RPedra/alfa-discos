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
                <div className="rock">
                 <Card style={{ width: '328px', height: '377px', top: '269px', left: '162px'}}>
                    <Card.Img variant="top" src="/images/rock.jpg" />
                    <Card.Body>
                        <Card.Title>Rock</Card.Title>
                        <Button variant="bottom" >Ver CDs</Button>
                    </Card.Body>
                 </Card>
                </div>
                <div className="eletronica">
                 <Card style={{ width: '328px', height: '377px', top: '321px', left: '162px'}}>
                    <Card.Img variant="top" src="/images/eletronica.jpg" />
                    <Card.Body>
                        <Card.Title>Eletrônica</Card.Title>
                        <Button variant="bottom" >Ver CDs</Button>
                    </Card.Body>
                 </Card>
                </div>
                <div className="blues">
                 <Card style={{ width: '328px', height: '377px', top: '373px', left: '162px'}}>
                    <Card.Img variant="top" src="/images/blues.jpg" />
                    <Card.Body>
                        <Card.Title>Blues / Jazz</Card.Title>
                        <Button variant="bottom" >Ver CDs</Button>
                    </Card.Body>
                 </Card>
                </div>
                <div className="mpb">
                 <Card style={{ width: '328px', height: '377px', left: '556px', top:'0px'}}>
                    <Card.Img variant="top" src="/images/MPB.jpg" />
                    <Card.Body>
                        <Card.Title>MPB</Card.Title>
                        <Button variant="bottom" >Ver CDs</Button>
                    </Card.Body>
                 </Card>
                </div><div className="pagode">
                 <Card style={{ width: '328px', height: '377px', left: '556px', top:'-500px'}}>
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
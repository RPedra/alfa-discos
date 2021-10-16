import React from "react";
import { Link } from "react-router-dom";
import {Nav} from "react-bootstrap";

function Cabecalho(props){
    return(
        <div className="header">
        {props.children}
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/carrinho">Carrinho</Nav.Link>
            </Nav.Item>
        </Nav>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/explorar">Explorar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/categorias">Categorias</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/QuemSomos">Quem somos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/faleconosco">Fale Conosco</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    )
}

export default Cabecalho;
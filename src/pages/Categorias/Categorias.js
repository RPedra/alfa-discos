import React from "react";
import Carta from "../../Componentes/Carta";
import Cabecalho from "../Cabecalho";
import { Card, Button } from "react-bootstrap";
import "./Categorias.css";

const cartas = [
    {
        id: 1,
        titulo: "Sertanejo",
        imagem: "/images/Sertanejo.jpg",
    },
    {
        id: 2,
        titulo: "Rock",
        imagem: "/images/rock.jpg",
    },
    {
        id: 3,
        titulo: "Eletrônica",
        imagem: "/images/eletronica.jpg",
    },
    {
        id: 4,
        titulo: "Blues / Jazz",
        imagem: "/images/blues.jpg",  
    },
    {
        id: 5,
        titulo: "MPB",
        imagem: "/images/MPB.jpg",  
    },
    {
        id: 6,
        titulo: "Funk",
        imagem: "/images/funk.jpg",  
    },
    {
        id: 7,
        titulo: "POP",
        imagem: "/images/pop.jfif",  
    },
    {
        id: 8,
        titulo: "Raggae",
        imagem: "/images/raggae.jpg",  
    },
    {
        id: 9,
        titulo: "Pagode / Samba",
        imagem: "/images/Pandero.jpg",  
    },
    {
        id: 10,
        titulo: "Rap",
        imagem: "/images/rap.jpg",  
    },
    {
        id: 11,
        titulo: "Gospel",
        imagem: "/images/gospel.jpg",  
    },
    {
        id: 12,
        titulo: "Clássica",
        imagem: "/images/classica.jpg",  
    },
];

function Categorias() {
    return (
    <div className="pagina">
        <Cabecalho/>
        <div className="titulo">
            <Card className="justify-content-center" style= {{
                backgroundColor: '#A31621', 
                alignItems: 'center', 
                width: '1156px', 
                height: '50px', 
                top: '170px', 
                left: '120px',
                boxShadow: '-4px 4px 5px 0px rgba(0,0,0,0.15)'
                }}>
                <Card.Title rounded style= {{color: 'white' }} >Categorias</Card.Title>
            </Card>
            <div className= "cartaContainer">
                {cartas.map((carta) => (
                <Carta key={carta.id}  carta={carta}/>
                ))}
            </div>
        </div>
        
    </div>
    );
}

export default Categorias;
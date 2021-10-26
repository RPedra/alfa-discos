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
        pagina: "Sertanejo",
    },
    {
        id: 2,
        titulo: "Rock",
        imagem: "/images/rock.jpg",
        pagina: "Rock",
    },
    {
        id: 3,
        titulo: "Eletrônica",
        imagem: "/images/eletronica.jpg",
        pagina: "Eletronica",
    },
    {
        id: 4,
        titulo: "Blues / Jazz",
        imagem: "/images/blues.jpg",
        pagina: "BluesJazz",  
    },
    {
        id: 5,
        titulo: "MPB",
        imagem: "/images/MPB.jpg",
        pagina: "MPB",  
    },
    {
        id: 6,
        titulo: "Funk",
        imagem: "/images/funk.jpg",
        pagina: "Funk",  
    },
    {
        id: 7,
        titulo: "POP",
        imagem: "/images/pop.jfif",
        pagina: "POP",  
    },
    {
        id: 8,
        titulo: "Reggae",
        imagem: "/images/raggae.jpg",
        pagina: "Reggae",  
    },
    {
        id: 9,
        titulo: "Pagode / Samba",
        imagem: "/images/Pandero.jpg",
        pagina: "PagodeSamba",  
    },
    {
        id: 10,
        titulo: "Rap",
        imagem: "/images/rap.jpg", 
        pagina: "Rap", 
    },
    {
        id: 11,
        titulo: "Gospel",
        imagem: "/images/gospel.jpg", 
        pagina: "Gospel", 
    },
    {
        id: 12,
        titulo: "Clássica",
        imagem: "/images/classica.jpg",
        pagina: "Classica",  
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
                margin: '0 auto',
                maxWidth: '1156px', 
                height: '50px', 
                top: '100px', 
                boxShadow: '-4px 4px 5px 0px rgba(0,0,0,0.15)'
                }}>
                <Card.Title rounded style= {{color: 'white' }} >Categorias</Card.Title>
            </Card>
            <div className= "cartaContainer" style={{margin: '0 auto',}} >
                {cartas.map((carta) => (
                <Carta key={carta.id}  carta={carta}/>
                ))}
            </div>
        </div>
        
    </div>
    );
}

export default Categorias;
import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./cd.css";

export const cds = [
    {
        id: 1,
        nome: "Elã",
        artista: "Kalouv",
        categoria: "Sertanejo",
        valor: '25,00',
        popularidade: 7,
        data: "21/10/2021",
        imagem: "/images/KalouvEla.jfif"
    },
    {
        id: 2,
        nome: "Ditadura Assassina",
        artista: "Armada",
        categoria: "MPB",
        valor: '30,00',
        popularidade: 9,
        data: "21/10/2020",
        imagem: "/images/DitaduraAssassinaArmada.jpg",
    },
    {
        id: 3,
        nome: "Pieces of Me",
        artista: "Andrew Laureth",
        categoria: "Gospel",
        valor: '20,00',
        popularidade: 7,
        data: "21/3/2021",
        imagem: "/images/AndrewLaurethPiecesofMe.png"
    },
    {
        id: 4,
        nome: "Black in Black",
        artista: "AC DC",
        categoria: "Rock",
        valor: '50,00',
        popularidade: 9.8,
        data: "21/09/2021",
        imagem: "/images/ACDCBlackinBlack.jpg"
    },
    {
        id: 5,
        nome: "Thriller",
        artista: "Michael Jackson",
        categoria: "POP",
        valor: '80,00',
        popularidade: 9.7,
        data: "12/08/2019",
        imagem: "/images/capaThriller.jpeg"
    },
    {
        id: 6,
        nome: "All WE HAVE IS N:OW",
        artista: "Alok",
        categoria: "Eletronica",
        valor: '50,00',
        popularidade: 7,
        data: "12/12/2020",
        imagem: "images/AlokAllWeHaveIsNow.jpg"
    },
    {

        id: 7,
        nome: "Legend",
        artista: "Bob Marley",
        categoria: "Reggae",
        valor: '50,00',
        popularidade: 7,
        data: "12/12/2020",
        imagem: "images/LegendBobMarley.jpg"
    },
    {

        id: 8,
        nome: "Essential",
        artista: "Mozart",
        categoria: "Classica",
        valor: '50,00',
        popularidade: 4,
        data: "12/12/2020",
        imagem: "images/EssentialMozart.jpg"
    },
    {

        id: 9,
        nome: "Bang",
        artista: "Anitta",
        categoria: "Funk",
        valor: '50,00',
        popularidade: 7,
        data: "12/12/2020",
        imagem: "images/BangAnitta.jpg"
    },
    {

        id: 10,
        nome: "Texas Flood",
        artista: "Stevie Ray Vaughan",
        categoria: "BluesJazz",
        valor: '50,00',
        popularidade: 7,
        data: "12/12/2020",
        imagem: "images/TexasFlood.jpg"
    },
    {

        id: 11,
        nome: "Ousadia & Alegria",
        artista: "Thiaguinho",
        categoria: "PagodeSamba",
        valor: '50,00',
        popularidade: 7,
        data: "12/12/2020",
        imagem: "images/OusadiaEAlegria.jpg"
    },
    {

        id: 12,
        nome: "Montero",
        artista: "Lil Nas X",
        categoria: "Rap",
        valor: '50,00',
        popularidade: 7,
        data: "12/12/2020",
        imagem: "images/MonteroLilNasX.png"
    },
    {

        id: 13,
        nome: "Ensaio",
        artista: "Bruno e Marrone",
        categoria: "Sertanejo",
        valor: '50,00',
        popularidade: 8,
        data: "12/12/2017",
        imagem: "images/EnsaioBrunoEMarrone.jpg"
    },
    {

        id: 14,
        nome: "Ten",
        artista: "Pearl Jam",
        categoria: "Rock",
        valor: '50,00',
        popularidade: 9,
        data: "12/12/1991",
        imagem: "images/TenPearlJam.webp"
    },
    {

        id: 15,
        nome: "Nothing But The Beat",
        artista: "David Guetta",
        categoria: "Eletronica",
        valor: '50,00',
        popularidade: 7,
        data: "12/12/2011",
        imagem: "images/DavidGuettaNBTB.jpg"
    },
    {

        id: 16,
        nome: "Legends in Concert",
        artista: "Louis Armstrong",
        categoria: "BluesJazz",
        valor: '50,00',
        popularidade: 4,
        data: "12/12/2020",
        imagem: "images/LouisArmstrongLIC.jpg"
    },
    {

        id: 17,
        nome: "Legião Urbana",
        artista: "Legião Urbana",
        categoria: "MPB",
        valor: '50,00',
        popularidade: 10,
        data: "12/12/1985",
        imagem: "images/LegiaoUrbana.jpg"
    },
    {

        id: 18,
        nome: "Baile Funk",
        artista: "Mr Catra",
        categoria: "Funk",
        valor: '50,00',
        popularidade: 7,
        data: "12/12/2020",
        imagem: "images/MrCatraBF.jpg"
    },
    {

        id: 19,
        nome: "Smile",
        artista: "Katy Perry",
        categoria: "POP",
        valor: '50,00',
        popularidade: 8,
        data: "12/12/2020",
        imagem: "images/KatyPerrySmile.jpg"
    },
    {

        id: 20,
        nome: "Icon",
        artista: "Jimmy Cliff",
        categoria: "Reggae",
        valor: '50,00',
        popularidade: 7,
        data: "12/12/2020",
        imagem: "images/JimmyCliffIcon.jpg"
    },
    {

        id: 21,
        nome: "Ao Vivo",
        artista: "Zeca Pagodinho",
        categoria: "PagodeSamba",
        valor: '50,00',
        popularidade: 7,
        data: "12/12/1999",
        imagem: "images/ZecaPagodinhoAV.jpg"
    },
    {

        id: 22,
        nome: "A Milenar Arte de Meter o Louco",
        artista: "Projota",
        categoria: "Rap",
        valor: '50,00',
        popularidade: 7,
        data: "12/12/2020",
        imagem: "images/AMADMOLProjota.jpg"
    },
    {

        id: 23,
        nome: "O Melhor da Música Gospel",
        artista: "Aline Barros",
        categoria: "Gospel",
        valor: '50,00',
        popularidade: 5,
        data: "12/12/2020",
        imagem: "images/AlineBarrosOMDMG.jpg"
    },
    {

        id: 24,
        nome: "Sì",
        artista: "Andrea Bocelli",
        categoria: "Classica",
        valor: '50,00',
        popularidade: 4,
        data: "12/12/2020",
        imagem: "images/AndreaBocelliSI.jpg"
    },

    {
    id: 25,
        nome: "Bad",
        artista: "Michael Jackson",
        categoria: "POP",
        valor: '150,00',
        popularidade: 4,
        data: "12/12/1987",
        imagem: "images/Michael_Jackson_Bad.png"
    },
    
]

function Cd({cd, onClick}){
    const history = useHistory();
    return(
        <div className="cds" onClick={() => onClick(cd)}>
            <Card style={{ 
                width: '250px', 
                height: '300px',  
                boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.25)',
                borderRadius: '10px',
                }}>
                <Card.Img variant="top" src={cd.imagem} style={{height: '185px', borderRadius: '10px 10px 0px 0px'}} />
                <Card.Body className="corpo">
                    <Card.Title className="nome">{cd.nome}</Card.Title>
                    <div className="autoria">
                    <Card.Subtitle className="artista">{cd.artista}</Card.Subtitle>       
                    <Card.Text className="valor" >R$ {cd.valor}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Cd;
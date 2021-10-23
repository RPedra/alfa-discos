import React, { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho";
import Cd from "../../Componentes/cd";
import { Card, Button } from "react-bootstrap";
import { Modal } from "@material-ui/core";
import "./Explorar.css";
import CdModal from "../../Componentes/CdModal";

const cds = [
    {
        id: 1,
        nome: "Elã",
        artista: "Kalouv",
        categoria: "sertanejo",
        valor: '25,00',
        popularidade: 7,
        data: "21/10/2021",
        imagem: "/images/KalouvEla.jfif"
    },
    {
        id: 2,
        nome: "Ditadura Assassina",
        artista: "Armada",
        categoria: "mpb",
        valor: '30,00',
        popularidade: 9,
        data: "21/10/2020",
        imagem: "/images/DitaduraAssassinaArmada.jpg",
    },
    {
        id: 3,
        nome: "Pieces of Me",
        artista: "Andrew Laureth",
        categoria: "gospel",
        valor: '20,00',
        popularidade: 7,
        data: "21/3/2021",
        imagem: "/images/AndrewLaurethPiecesofMe.png"
    },
    {
        id: 4,
        nome: "Black in Black",
        artista: "AC DC",
        categoria: "rock",
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
        categoria: "eletronica",
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


]

function Explorar() {

    const [filter, setFilter] = useState();
    const [viewCd, setViewCd] = useState();

    useEffect(() => {
        const filterCds = cds.filter((response) => response.popularidade >= 8);
        setFilter(filterCds);
    }, [])

    function handleClick(cd) {
        setViewCd(cd);
    }

    function handleClose(){
        setViewCd();
    }

    return (
        <>
            <div className="pagina">
                <Cabecalho />
                <Card className="justify-content-center" style={{
                    backgroundColor: '#A31621',
                    alignItems: 'center',
                    margin: '0 auto',
                    maxWidth: '1156px',
                    width: '100%',
                    height: '50px',
                    top: '170px',
                    boxShadow: '-4px 4px 5px 0px rgba(0,0,0,0.15)'
                }}>
                    <Card.Title rounded style={{ color: 'white' }} >Explorar</Card.Title>
                </Card>
                <div className="maisPopulares">
                    <Card className="Populares" style={{
                        backgroundColor: '#F1E9DB',
                        margin: '0 auto',
                        maxWidth: '1156px',
                        width: '100%',
                        height: '50px',
                        top: '190px',
                        marginColor: '#F1E9DB',
                    }}>
                        <Card.Title style={{ color: 'black' }} >Mais Populares</Card.Title>
                        <Card.Text className="cardTexto">Ver todos</Card.Text>
                    </Card>
                    <div className="popularesContainer" >
                        {filter?.map((cd) => (
                            <Cd key={cds.id} cd={cd} onClick={handleClick} />
                        ))}
                    </div>
                </div>
                <br />
                <br />
                <div className="maisPopulares">
                    <Card className="Recentes" style={{
                        backgroundColor: '#F1E9DB',
                        margin: '0 auto',
                        maxWidth: '1156px',
                        width: '100%',
                        height: '50px',
                        top: '190px',
                        marginColor: '#F1E9DB',
                    }}>
                        <Card.Title style={{ color: 'black' }} >Lançados Recentemente</Card.Title>
                        <Card.Text className="cardTexto">Ver todos</Card.Text>
                    </Card>
                    <div className="lancadosContainer" style={{ margin: '0 auto', }} >
                        {filter?.map((cd) => (
                            <Cd key={cds.id} cd={cd} />
                        ))}
                    </div>
                </div>
                <br />
                <br />
                <div className="todosCDs">
                    <Card className="todos" style={{
                        backgroundColor: '#F1E9DB',
                        margin: '0 auto',
                        maxWidth: '1156px',
                        width: '100%',
                        height: '50px',
                        top: '190px',
                        marginColor: '#F1E9DB',
                    }}>
                        <Card.Title style={{ color: 'black' }} >Todos</Card.Title>
                        <Card.Text className="cardTexto">Ver todos</Card.Text>
                    </Card>
                    <div className="todosContainer" style={{ margin: '0 auto', }} >
                        {cds.map((cd) => (
                            <Cd key={cds.id} cd={cd} onClick={handleClick} />
                        ))}
                    </div>
                </div>
            </div>
            <Modal open={viewCd} onClose={handleClose} className="modalStyle">
                <CdModal cd={viewCd} />
            </Modal>
        </>
    );
}

export default Explorar;
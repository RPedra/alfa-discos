import React, {useEffect, useState} from "react";
import Cabecalho from "../Cabecalho";
import Cd from "../../Componentes/cd";
import { Card, Button } from "react-bootstrap";
import "./Explorar.css";

const cds=[
    {
        id: 1,
        nome: "nome1",
        artista: "artista1",
        categoria: "sertanejo",
        valor: '25,00',
        popularidade: 7,
        data: "21/10/2021",
    },
    {
        id: 2,
        nome: "nome2",
        artista: "artista1",
        categoria: "sertanejo",
        valor: '30,00',
        popularidade: 9,
        data: "21/10/2020",
    },
    {
        id: 3,
        nome: "nome3",
        artista: "artista2",
        categoria: "sertanejo",
        valor: '20,00',
        popularidade: 7,
        data: "21/3/2021",
    },
    {
        id: 4,
        nome: "nome4",
        artista: "artista3",
        categoria: "sertanejo",
        valor: '25,00',
        popularidade: 8,
        data: "21/09/2021",
    },
    {
        id: 5,
        nome: "nome5",
        artista: "artista4",
        categoria: "mpb",
        valor: '40,00',
        popularidade: 9,
        data: "12/08/2019",
    },
    {
        id: 6,
        nome: "nome6",
        artista: "artista5",
        categoria: "rock",
        valor: '50,00',
        popularidade: 8,
        data: "12/12/2020",
    },
    

]

function Explorar() {

    const [filter, setFilter] = useState();

    useEffect(() => {
        const filterCds = cds.filter((response) => response.categoria === "sertanejo");
        setFilter(filterCds);
    }, [])

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
            <div className="maisPopulares">
            <Card className="Populares" style= {{
                backgroundColor: '#F1E9DB',
                margin: '0 auto',
                maxWidth: '1156px',
                width: '100%',
                height: '50px', 
                top: '190px', 
                marginColor: '#F1E9DB',
                }}>
                <Card.Title style= {{color: 'black' }} >Mais Populares</Card.Title>
                <Card.Text className="cardTexto">Ver mais</Card.Text>
            </Card>
            <div className= "popularesContainer" style={{margin: '0 auto',}} >
                {filter?.map((cd) => (
                    <Cd key={cds.id}  cd={cd}/>  
                ))}
            </div>
            </div>
        </div>
    );
}

export default Explorar;
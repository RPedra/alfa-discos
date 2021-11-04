import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";
import {Carousel} from "react-bootstrap";
import { Modal } from "@material-ui/core";
import Cd from "../../Componentes/cd";
import CdModal from "../../Componentes/CdModal";
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";
import "./Home.css";



function Home() {

    const [visible, setVisible] = useState(false);
    const [viewCd, setViewCd] = useState();
    const history = useHistory();

    function handleClick(cd) {
        setViewCd(cd);
      }
    
      function handleClose() {
        setViewCd();
      }

      const cds = [
        {
            id: 1,
            nome: "Bang",
            artista: "Anitta",
            categoria: "Funk",
            valor: '50,00',
            popularidade: 7,
            data: "12/12/2020",
            imagem: "images/BangAnitta.jpg"
        },
        {
            id: 2,
            nome: "Baile Funk",
            artista: "Mr Catra",
            categoria: "Funk",
            valor: '50,00',
            popularidade: 7,
            data: "12/12/2020",
            imagem: "images/MrCatraBF.jpg"
        },
        {
            id: 3,
            nome: "Nothing But The Beat",
            artista: "David Guetta",
            categoria: "Eletronica",
            valor: '50,00',
            popularidade: 7,
            data: "12/12/2011",
            imagem: "images/DavidGuettaNBTB.jpg"
        },]

    return (
    <div className="home">
        
        <div className="imagem">
            <Cabecalho/>
            <div className="homeButtons">  
                <Button 
                    style={{backgroundColor:'#1A1423',
                    borderRadius: '10px', 
                    color: 'white',
                    Width: '100%',
                    height: '20vh',
                    fontWeight: '700',
                    fontSize: '4vh',
                    boxShadow: '2px 4px 5px 0px rgba(0,70,67,0.6)'
                    }}          
                        onClick = {() => {
                            history.push("Explorar") 
                        }}>Explore Nossos Produtos!
                </Button>
                <Button 
                    style={{backgroundColor:'#1A1423',
                    borderRadius: '10px', 
                    color: 'white',
                    Width: '100%',
                    height: '20vh',
                    fontWeight: '700',
                    fontSize: '4vh',
                    boxShadow: '2px 4px 5px 0px rgba(0,70,67,0.6)'
                    }}
                        onClick = {() => {
                            history.push("FaleConosco") //history.goBack volta pra página anterior
                        }}>Venda seu CD com a gente!
                </Button>
            </div>  
        </div>
        <div className="carrossel" >
         <Carousel variant="dark">
            <Carousel.Item className="item" onClick={() => {history.push("Explorar")}}>
                <img
                style={{justifyContent: 'center'}}
                className="album1"
                src="images/BangAnitta.jpg"
                alt="First slide"
                />
                <Carousel.Caption className="textos"style={{ 
                    color: 'white'}}>
                <h3>Bang</h3>
                <p>Anitta</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item" onClick={() => {history.push("Explorar")}}>
                <img
                style={{justifyContent: 'center'}}
                className="album1"
                src="images/MrCatraBF.jpg"
                alt="Second slide"
                />
                <Carousel.Caption className="textos"style={{
                    color: 'white'}}>
                <h3>Baile Funk</h3>
                <p>Mr. Catra</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item" onClick={() => {history.push("Explorar")}}>
                <img
                style={{justifyContent: 'center'}}
                className="album1"
                src="images/DavidGuettaNBTB.jpg"
                alt="Third slide"
                />
                <Carousel.Caption className="textos"style={{
                    color: 'white'}}>
                <h3>Nothing But The Beat</h3>
                <p>David Guetta</p>
                </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
        </div>
     <Rodape />    
    </div>
    );
}

export default Home;
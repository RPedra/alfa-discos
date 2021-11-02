import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";
import {Carousel} from "react-bootstrap";
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";
import "./Home.css";



function Home() {

    const history = useHistory();

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
                    maxWidth: '70%',
                    height: '100px',
                    fontWeight: '700',
                    boxShadow: '2px 4px 5px 0px rgba(0,70,67,0.6)'
                    }}
                        onClick = {() => {
                            history.push("FaleConosco") //history.goBack volta pra página anterior
                        }}>Venda seu CD com a gente!
                </Button>
            </div>  
        </div>
        <div className="carrossel">
         <Carousel variant="dark">
            <Carousel.Item className="item">
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
            <Carousel.Item className="item">
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
            <Carousel.Item className="item">
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
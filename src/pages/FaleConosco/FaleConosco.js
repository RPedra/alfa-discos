import React from "react";
import { Card } from "react-bootstrap";
import Cabecalho from "../Cabecalho";
import { IconContext } from "react-icons/lib";
import {FaFacebookF, FaInstagram, FaWhatsapp} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import "./FaleConosco.css";
import Rodape from "../Rodape";

function FaleConosco() {

  return (
    <div className="FaleConosco-pagina">
      <Cabecalho />
      <div className="FaleConosco-Titulo">
        <Card
          style={{
            backgroundColor: "#A31621",
            alignItems: "center",
            margin: "0 auto",
            maxWidth: "1156px",
            width: "100%",
            height: "50px",
            boxShadow: "-4px 4px 5px 0px rgba(0,0,0,0.15)",
            justifyContent: "center",
          }}
        >
          <Card.Title rounded style={{ color: "white" }}>
            Fale Conosco
          </Card.Title>
        </Card>
        <div className="corpoFaleConosco">
          <div>
          <IconContext.Provider value={{size: '2rem'}}>
            <FaFacebookF /> AlfaDiscos
          </IconContext.Provider>
          </div>
          <div>
          <IconContext.Provider value={{size: '2rem'}}>
            <FaInstagram /> @alfadiscos
          </IconContext.Provider>
          </div>
          <div>
          <IconContext.Provider value={{size: '2rem'}}>
            <FaWhatsapp /> (31) 33422-4121
          </IconContext.Provider>
          </div>
          <div>
          <IconContext.Provider value={{size: '2rem'}}>
            <MdEmail /> contato@adiscos.com.br
          </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="rodapeFooter">
      <Rodape />
      </div>
    </div>
  );
}

export default FaleConosco;

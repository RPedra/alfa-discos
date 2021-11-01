import React from "react";
import Rodape from "../Rodape";
import { Card } from "react-bootstrap";
import Cabecalho from "../Cabecalho";

function Carrinho() {
    return (
        <div className="pagina">
        <Cabecalho />
        <Card
          className="justify-content-center"
          style={{
                    backgroundColor: "#A31621",
                    alignItems: "center",
                    margin: "0 auto",
                    maxWidth: "1156px",
                    width: "100%",
                    height: "50px",
                    top: "170px",
                    boxShadow: "-4px 4px 5px 0px rgba(0,0,0,0.15)",
                  }}>
          <Card.Title rounded style={{ color: "white" }}>
            Carrinho
          </Card.Title>
        </Card>
        <Rodape />
        </div>    
    );
    
}

export default Carrinho;
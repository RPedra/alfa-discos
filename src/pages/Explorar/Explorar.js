import React, { useEffect, useLayoutEffect, useState } from "react";
import Cabecalho from "../Cabecalho";
import Cd from "../../Componentes/cd";
import { Card, Button } from "react-bootstrap";
import { Modal } from "@material-ui/core";
import "./Explorar.css";
import CdModal from "../../Componentes/CdModal";
import { cds } from "../../Componentes/cd/cd";
import { useHistory } from "react-router";
import Todos from "./Todos";
import {Nav} from "react-bootstrap";

function Explorar() {
  const history = useHistory;

  const [filter, setFilter] = useState();
  const [viewCd, setViewCd] = useState();

  useEffect(() => {
    const filterCds = cds.filter((response) => response.popularidade >= 8);
    setFilter(filterCds);
  }, []);

  function handleClick(cd) {
    setViewCd(cd);
  }

  function handleClose() {
    setViewCd();
  }

  return (
    <>
      <Cabecalho />
      <div className="pagina">
        
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
          }}
        >
          <Card.Title rounded style={{ color: "white" }}>
            Explorar
          </Card.Title>
        </Card>
        <div className="maisPopulares">
          <Card
            className="Populares"
            style={{
              backgroundColor: "#F1E9DB",
              margin: "0 auto",
              maxWidth: "1156px",
              width: "100%",
              height: "50px",
              top: "190px",
              marginColor: "#F1E9DB",
            }}
          >
            <Card.Title style={{ color: "black" }}>Mais Populares</Card.Title>
            <Card.Text className="cardTexto">Ver todos</Card.Text>
          </Card>
          <div className="popularesContainer">
            {filter?.map((cd) => (
              <Cd key={cds.id} cd={cd} onClick={handleClick} />
            ))}
          </div>
        </div>
        <br />
        <br />
        <div className="maisPopulares">
          <Card
            className="Recentes"
            style={{
              backgroundColor: "#F1E9DB",
              margin: "0 auto",
              maxWidth: "1156px",
              width: "100%",
              height: "50px",
              top: "190px",
              marginColor: "#F1E9DB",
            }}
          >
            <Card.Title style={{ color: "black" }}>
              Lançados Recentemente
            </Card.Title>
            <Card.Text className="cardTexto">Ver todos</Card.Text>
          </Card>
          <div className="lancadosContainer" style={{ margin: "0 auto" }}>
            {filter?.map((cd) => (
              <Cd key={cds.id} cd={cd} onClick={handleClick} />
            ))}
          </div>
        </div>
        <br />
        <br />
        <div className="todosCDs">
          <Card
            className="todos"
            style={{
              backgroundColor: "#F1E9DB",
              margin: "0 auto",
              maxWidth: "1156px",
              width: "100%",
              height: "50px",
              top: "190px",
              marginColor: "#F1E9DB",
            }}
          >
            <Card.Title style={{ color: "black" }}>Todos</Card.Title>
            <Nav.Item>
                <Nav.Link style={{ color: "black" }} href="/todos">Ver todos</Nav.Link>
            </Nav.Item>
          </Card>
          <div className="todosContainer" style={{ margin: "0 auto" }}>
            {cds.map((cd) => (
              <Cd key={cds.id} cd={cd} onClick={handleClick} />
            ))}
          </div>
        </div>

        <Modal open={viewCd} onClose={handleClose} className="modalStyle">
          <CdModal cd={viewCd} />
        </Modal>
      </div>
    </>
  );
}

export default Explorar;

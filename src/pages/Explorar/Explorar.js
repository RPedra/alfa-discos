import React, { useState } from "react";
import Cabecalho from "../Cabecalho";
import { Card } from "react-bootstrap";
import Cd from "../../Componentes/cd";
import { cds } from "../../Componentes/cd/cd";
import "./Explorar.css";
import { Modal } from "@material-ui/core";
import CdModal from "../../Componentes/CdModal";
import { useHistory } from "react-router-dom";
import Rodape from "../Rodape";

function Explorar() {
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const [viewCd, setViewCd] = useState();

  function handleClick(cd) {
    setViewCd(cd);
  }

  function handleClose() {
    setViewCd();
  }

  return (
    <>
      <div className="pagina">
        <Cabecalho />
        <div
          className="justify-content-center"
          style={{
            backgroundColor: "#A31621",
            alignItems: "center",
            margin: "0 auto",
            maxWidth: "1156px",
            width: "100%",
            height: "50px",
            boxShadow: "-4px 4px 5px 0px rgba(0,0,0,0.15)",
          }}
        >
          <Card.Title rounded style={{ color: "white" }}>
            Explorar
          </Card.Title>
        </div>
        <br />

        <div className="select">
          <Card
            className="justify-content"
            style={{
              backgroundColor: "#FFF9EF",
              alignItems: "center",
              margin: "0 auto",
              maxWidth: "300px",
              width: "100%",
              height: "50px",
              boxShadow: "-4px 4px 5px 0px rgba(0,0,0,0.15)",
              cursor: "pointer",
            }}
          >
            <Card.Title
              className="filtroText"
              onClick={() => setVisible(!visible)}
              rounded
              style={{ color: "#1A1423", align: "center" }}
            >
              Filtro
            </Card.Title>
          </Card>
          {visible && (
            <div
              className="filtro"
              style={{ display: "flex", width: "1156px" }}
            >
              <div className="filterInput">
                <Card.Title rounded style={{ color: "Black" }}>
                  Categorias
                </Card.Title>
                <select
                  className="selectCategorias"
                  name="categorias"
                  id="categorias"
                >
                  <option value="Sertanejo">Sertanejo</option>
                  <option value="Rock">Rock</option>
                  <option value="Eletronica">Eletrônica</option>
                  <option value="BluesJazz">Blues e Jazz</option>
                  <option value="MPB">MPB</option>
                  <option value="Funk">Funk</option>
                  <option value="POP">POP</option>
                  <option value="Reggae">Reggae</option>
                  <option value="PagodeSamba">Pagode e Samba</option>
                  <option value="Rap">Rap</option>
                  <option value="Gospel">Gospel</option>
                  <option value="Classica">Clássica</option>
                </select>
              </div>
              <div className="filterInput">
                <Card.Title rounded style={{ color: "Black" }}>
                  Preço
                </Card.Title>
                <select name="price" id="price">
                  <option value="BiggerPrice">Maior para menor</option>
                  <option value="LowerPrice">Menor para maior</option>
                </select>
              </div>
              <div className="filterInput">
                <Card.Title rounded style={{ color: "Black" }}>
                  Lançamento
                </Card.Title>
                <select name="time" id="time">
                  <option value="Old">Novos</option>
                  <option value="New">Antigos</option>
                </select>
              </div>
              <div className="filterInput">
                <Card.Title rounded style={{ color: "Black" }}>
                  Mais vendidos
                </Card.Title>
                <select name="famous" id="famous">
                  <option value="MoreF">Mais vendidos</option>
                  <option value="LessF">Menos vendidos</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="todosContainer" style={{ margin: "0 auto" }}>
          {cds.map((cd) => (
            <Cd key={cds.id} cd={cd} onClick={handleClick} />
          ))}
        </div>

        <Modal open={viewCd} onClose={handleClose} className="modalStyle">
          <CdModal cd={viewCd} />
        </Modal>
        <div className="footer">
        <Rodape />
        </div>
      </div>
    </>
  );
}

export default Explorar;

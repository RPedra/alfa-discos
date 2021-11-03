import React, { useEffect, useState } from "react";
import Cabecalho from "../../Cabecalho";
import { Card } from "react-bootstrap";
import Cd from "../../../Componentes/cd";
import { cds } from "../../../Componentes/cd/cd";
import "./Sertanejo.css";
import { Modal } from "@material-ui/core";
import CdModal from "../../../Componentes/CdModal";

function Sertanejo() {
  const [filter, setFilter] = useState();
  const [viewCd, setViewCd] = useState();

  useEffect(() => {
    const filterCds = cds.filter(
      (response) => response.categoria === "Sertanejo"
    );
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
      <div className="pagina_Sertanejo">
        <Cabecalho />
        <div className="titulo_Sertanejo">
          <div className="justify-content-center-Sertanejo">
            <Card.Title
              rounded
              style={{
                display: "flex",
                color: "white",
                backgroundColor: "#A31621",
                height: "50px",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "-4px 4px 5px 0px rgba(0,0,0,0.15)",
              }}
            >
              Sertanejo
            </Card.Title>
            <div className="sertanejo"
                style ={{
                    backgroundColor: "#F1E9DB",
                }}>
              {filter?.map((cd) => (
                <Cd key={cds.id} cd={cd} onClick={handleClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal open={viewCd} onClose={handleClose} className="modalStyle">
        <CdModal cd={viewCd} />
      </Modal>
    </>
  );
}

export default Sertanejo;

import React, { useState, useEffect } from "react";
import Cabecalho from "../Cabecalho";
import { Card } from "react-bootstrap";
import Cd from "../../Componentes/cd";
import { cds } from "../../Componentes/cd/cd";
import "./Explorar.css";
import { Modal } from "@material-ui/core";
import CdModal from "../../Componentes/CdModal";
import { useHistory } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import {FaSlidersH} from "react-icons/fa";
import Rodape from "../Rodape";


function Explorar() {

  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const [viewCd, setViewCd] = useState();
  const [cdlist, setCdList] = useState(cds);
  const [filtro, setFiltro] = useState();
  const [tipofiltro, setTipoFiltro] = useState();

  useEffect(() => { 
    
  }, []) 

  function handleClick(cd) {
    setViewCd(cd);
  }

  function handleClose() {
    setViewCd();
  }

  function handleSelectChange(e) {
    setFiltro(e.target.value)
    console.log(e.target.id)
    setTipoFiltro(e.target.id)
    if(e.target.id === "price"){
      handlePriceFilter(e)
    } else if(e.target.id === "categorias"){
      setCdList(cds.filter(cd => cd.categoria === e.target.value))
    }
  }

  function handlePriceFilter(e) {
    if(e.target.value === "LowerPrice"){
      console.log(cds.sort((a, b) => console.log(a,b)))
      setCdList(cds.sort((a, b) => parseFloat(a.valor) - parseFloat(b.valor)))
    } else {
      setCdList(cds.sort((a, b) => parseFloat(b.valor) - parseFloat(a.valor)))
    }
  }

  return (
      <div className="explorar">
        <Cabecalho />
        <div className="explorarCorpo">
         <Card style= {{
            backgroundColor: '#A31621', 
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            maxWidth: '1200px', 
            height: '50px', 
            boxShadow: '-4px 4px 5px 0px rgba(26,20,35,0.15)'
            }}>
            <Card.Title rounded style= {{color: 'white' }} >Explorar</Card.Title>
         </Card>
         <br />
         <div className="select">
          <Card
            style={{
              backgroundColor: "#236084",
              alignItems: "center",
              justifyContent: "center",
              margin: '0 auto',
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
              style={{ color: "white", align: "center" }}
            >
              <IconContext.Provider value={{size: '1.3rem', color:'white'}}>
                        <FaSlidersH />Filtro
                    </IconContext.Provider>
            </Card.Title>
          </Card>
          {visible && (
            <div className="filtro">
              <div className="filterInput">
                <Card.Title rounded style={{ color: "Black" }}>
                  Categorias
                </Card.Title>
                <select onChange={e => handleSelectChange(e)}
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
                <select name="price" id="price" onChange={e => handleSelectChange(e)}>
                  <option value="BiggerPrice">Maior para menor</option>
                  <option value="LowerPrice">Menor para maior</option>
                </select>
              </div>
            </div>
          )}
         </div>
          <div className="todosContainer" style={{ margin: "0 auto" }}>
            {cdlist.map((cd) => (
              <Cd key={cds.id} cd={cd} onClick={handleClick} />
            ))}
          </div>
        </div>
        <div className="footer">
        <Rodape />
        </div>
        <Modal open={viewCd} onClose={handleClose} className="modalStyle">
          <CdModal cd={viewCd} />
        </Modal>
      </div>
  );
}

export default Explorar;

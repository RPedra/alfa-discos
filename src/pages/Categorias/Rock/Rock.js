import React, {useEffect, useState} from "react";
import Cabecalho from "../../Cabecalho";
import { Card } from "react-bootstrap";
import Cd from "../../../Componentes/cd";
import {cds} from "../../../Componentes/cd/cd"
import "./Rock.css"
import { Modal } from "@material-ui/core";
import CdModal from "../../../Componentes/CdModal";
import Rodape from "../../Rodape";

function Rock() {

    const [filter, setFilter] = useState();
    const [viewCd, setViewCd] = useState();

    useEffect(() => {
        const filterCds = cds.filter((response) => response.categoria === "Rock");
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
        <div className="pagina_Rock">
            <Cabecalho/>
            <div className="titulo_Rock">
                <Card className="justify-content-center" style= {{
                backgroundColor: '#A31621', 
                alignItems: 'center',
                margin: '0 auto',
                maxWidth: '1156px', 
                height: '50px', 
                top: '170px', 
                boxShadow: '-4px 4px 5px 0px rgba(0,0,0,0.15)'
                }}>
                <Card.Title rounded style= {{color: 'white' }} >Rock</Card.Title>
                </Card>
                <div className="rock" >
                        {filter?.map((cd) => (
                            <Cd key={cds.id} cd={cd} onClick={handleClick} />
                        ))}
                </div>
            </div>
        <Rodape/>
        </div>
        <Modal open={viewCd} onClose={handleClose} className="modalStyle">
            <CdModal cd={viewCd} />
        </Modal>
    </>
    );
}

export default Rock;
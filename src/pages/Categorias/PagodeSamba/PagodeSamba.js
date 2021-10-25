import React, {useEffect, useState} from "react";
import Cabecalho from "../../Cabecalho";
import { Card } from "react-bootstrap";
import Cd from "../../../Componentes/cd";
import {cds} from "../../../Componentes/cd/cd"
import "./PagodeSamba.css"
import { Modal } from "@material-ui/core";
import CdModal from "../../../Componentes/CdModal";

function PagodeSamba() {

    const [filter, setFilter] = useState();
    const [viewCd, setViewCd] = useState();

    useEffect(() => {
        const filterCds = cds.filter((response) => response.categoria === "PagodeSamba");
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
        <div className="pagina">
            <Cabecalho/>
            <div className="titulo">
                <Card className="justify-content-center" style= {{
                backgroundColor: '#A31621', 
                alignItems: 'center',
                margin: '0 auto',
                maxWidth: '1156px', 
                height: '50px', 
                top: '170px', 
                boxShadow: '-4px 4px 5px 0px rgba(0,0,0,0.15)'
                }}>
                <Card.Title rounded style= {{color: 'white' }} >Pagode e Samba</Card.Title>
                </Card>
                <div className="PagodeSamba" >
                        {filter?.map((cd) => (
                            <Cd key={cds.id} cd={cd} onClick={handleClick} />
                        ))}
                </div>
            </div>
        
        </div>
        <Modal open={viewCd} onClose={handleClose} className="modalStyle">
            <CdModal cd={viewCd} />
        </Modal>
    </>
    );
}

export default PagodeSamba;
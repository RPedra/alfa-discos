import React from "react";
import {Image} from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import {FaFacebookF, FaInstagram, FaWhatsapp} from "react-icons/fa";
import "./Rodape.css";

function Rodape (props){
    return(
        <div className="rodape">
            <div className="informacoes">
                <br/>
                <h1 style={{fontSize:'1.8rem'}}>Endereço:</h1>
                <h2 style={{fontSize:'1.2rem'}}>Rua Antônio Silva, 44. Pitiringa, BH-MG</h2>
                <div className="icones">
                    <IconContext.Provider value={{size: '1.3rem', color:'white'}}>
                            <FaFacebookF /> AlfaDiscos
                    </IconContext.Provider>
                    <IconContext.Provider value={{size: '1.3rem', color:'white'}}>
                            <FaInstagram /> @alfadiscos
                    </IconContext.Provider>
                    <IconContext.Provider value={{size: '1.3rem', color:'white'}}>
                            <FaWhatsapp /> (31) 33422-4121
                    </IconContext.Provider>
                </div>
            </div>
            <div className="logo">
            <Image src="images/AlfaDiscos2.png" 
            style=
                {{
                    width: '150px', 
                    justifyContent: 'start', 
                    left: '100px'
                }} 
            roundedCircle fluid />
            </div>
        </div>
    );
}

export default Rodape;
import React, { useState } from "react";
import {Nav, Image} from "react-bootstrap";
import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, Button } from "@material-ui/core";
import "./Cabecalho.css";
import {FaDeezer, FaShoppingCart, FaSlidersH, FaUserAlt, FaHome, FaMusic} from "react-icons/fa";
import {RiFolderMusicFill, RiTeamFill} from "react-icons/ri";
import {MdEmail} from "react-icons/md";
import { IconContext } from "react-icons/lib";
import {useHistory} from "react-router-dom";

function Cabecalho(props){

    const history = useHistory();
    const [currentPage, setCurrentPage] = useState("/login");
    const [open, setOpen] = useState(false);
    
    function handleClick(pathName){
        history.push(pathName);
        setCurrentPage(pathName);
    }

    function handleDrawer(isOpen){
        setOpen(isOpen);
    }

    const pages = [
        {
            pathName: "/home",
            icon: <FaHome />,
            text: "Home"
        },
        {
            pathName: "/explorar",
            icon: <FaMusic />,
            text: "Explorar"
        },
        {
            pathName: "/categorias",
            icon: <RiFolderMusicFill />,
            text: "Categorias"
        },
        {
            pathName: "/QuemSomos",
            icon: <RiTeamFill />,
            text: "Quem Somos"
        },
        {
            pathName: "/faleconosco",
            icon: <MdEmail />,
            text: "Fale Conosco"
        },
        {
        pathName: "/login",
        icon: <FaUserAlt />,
        text: "Login"
        },
        {
            pathName: "/carrinho",
            icon: <FaShoppingCart />,
            text: "Carrinho"
        },
        
]

    return(
    <div className="cabecalho">
     <div className="header">
        {props.children}
        <Image src="images/AlfaDiscos2.png" 
        style={{
            width: '150px', 
            justifyContent: 'start', 
            left: '100px'
            }} 
            roundedCircle fluid />
        <div className="navBar">
        <div className="perfil">
        <Nav activeKey="/home">
            <Nav.Item>
                {/* <IconContext.Provider value={{size: '1.3rem', color:'white'}}>
                    <FaUserAlt />
                </IconContext.Provider> */}
                <Nav.Link style={{color: 'white'}} href="/login">
                    <IconContext.Provider value={{size: '1.3rem', color:'white'}}>
                        <FaUserAlt />
                    </IconContext.Provider>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: 'white'}} href="/carrinho">
                    <IconContext.Provider value={{size: '1.3rem', color:'white'}}>
                        <FaShoppingCart />
                    </IconContext.Provider>
                </Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
         <Nav className="paginas" activeKey="/home">
            <Nav.Item>
                <Nav.Link style={{color: 'white'}} href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: 'white'}} href="/explorar">Explorar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: 'white'}} href="/categorias">Categorias</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: 'white'}} href="/QuemSomos">Quem somos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: 'white'}} href="/faleconosco">Fale Conosco</Nav.Link>
            </Nav.Item>
         </Nav>
        </div>
     </div>
     <div className="gaveta">
        <AppBar position="static">
            <Toolbar className="toolBar">
                <IconButton                
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={()=>{handleDrawer(!open)}}
                >
                <FaDeezer />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <Button color="inherit" onClick={() => {handleClick("/login")}}>{<FaUserAlt />}</Button>
          <Button color="inherit" onClick={() => {handleClick("/carrinho")}}>{<FaShoppingCart />}</Button>
            </Toolbar>
        </AppBar>
        <Drawer className="gaveta" open={open} onClose={()=>{handleDrawer(false)}}>
            <List className="lista">
                {pages.map((listItem) => {
                 return (<ListItem 
                    button
                    selected={currentPage === listItem.pathName}
                    onClick={() => {handleClick(listItem.pathName)
                    }}>
                    <IconContext.Provider value={{size: '1.3rem', color:'white'}}>
                        {listItem.icon}
                    </IconContext.Provider>
                    <ListItemText className="ListItemText">
                        <Typography>{listItem.text}</Typography>
                    </ListItemText>
                </ListItem>
                 );
                })}
            </List>
        </Drawer>
     </div>
    </div>
    )
}

export default Cabecalho;
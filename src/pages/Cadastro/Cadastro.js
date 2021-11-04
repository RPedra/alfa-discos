import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Rodape from "../Rodape";
import Cabecalho from "../Cabecalho";
import { Form, Button, Card } from "react-bootstrap";
import "./Cadastro.css";

function Cadastro() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const history = useHistory();
    function login(){
        if(email === "abc@gmail.com" && senha === "123") {
            alert ("Bem vindo!");
            history.push("home");
        }
        else alert ("Dados incorretos");
    }


    return(
        <div className="cadastroPagina">
            <Cabecalho/>
            <div className="cadastroCorpo">
                <Card style= {{
                    backgroundColor: '#A31621', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    maxWidth: '1156px', 
                    height: '50px', 
                    boxShadow: '-4px 4px 5px 0px rgba(26,20,35,0.15)'
                    }}>
                    <Card.Title rounded style= {{color: 'white' }} >Cadastro</Card.Title>
                </Card>
                <div className="cadastroInputs" >
                    <Form className="cadastroFormulario">
                        <br/><br/>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Card.Title>Nome e Sobrenome</Card.Title>
                            <Form.Control type="string" placeholder="Insira seu nome"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Card.Title>Data de nascimento</Card.Title>
                            <Form.Control type="date" placeholder="Insira sua data de nascimento"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Card.Title>Endereço</Card.Title>
                            <Form.Control type="email" placeholder="Insira seu endereço"  />
                        </Form.Group>               
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Card.Title>E-mail</Card.Title>
                            <Form.Control type="email" placeholder="Insira seu e-mail" onChange={(e) => setEmail(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Card.Title>Senha</Card.Title>
                            <Form.Control type="password" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Card.Title>Confirmação de Senha</Card.Title>
                            <Form.Control type="password" placeholder="Digite novamente sua senha" />
                        </Form.Group>
                        <div className="cadastroButtons">
                            <Button style={{
                                width:'100%', 
                                height: '40px',
                                margin: '0 auto',
                                backgroundColor: '#A31621',
                                borderColor: '#A31621' }} onClick={login} >Cadastrar
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <Rodape />
        </div>
    );
    
}

export default Cadastro;
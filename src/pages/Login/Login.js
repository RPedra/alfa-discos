import React, {useState} from "react";
import {Form, Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import "./Login.css";
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";



function Login() {

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

    return (
        <div className="login">
            <Cabecalho/>
            <div className="container">
                <div className="titulo">
                <Card className="justify-content-center" style= {{
                        backgroundColor: '#A31621', 
                        alignItems: 'center',
                        margin: '0 auto',
                        maxWidth: '1156px', 
                        height: '50px', 
                        top: '70px', 
                        boxShadow: '-4px 4px 5px 0px rgba(0,0,0,0.15)'
                        }}>
                    <Card.Title style= {{color: 'white' }} >Login</Card.Title>
                </Card>
                </div>
                <div className="inputs" >
                    <Form className="formulario">
                    <br/><br/>               
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                     <Card.Title>E-mail</Card.Title>
                     <Form.Control type="email" placeholder="Insira seu e-mail" onChange={(e) => setEmail(e.target.value)}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Card.Title>Senha</Card.Title>
                     <Form.Control type="password" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)}/>
                    </Form.Group>
                    <div className="buttons">
                        <Button style={{
                            maxWidth:'300px', 
                            width: '100%',
                            height: '40px',
                            margin: '0 auto',
                            backgroundColor: '#A31621',
                            borderColor: '#A31621' }} onClick={login} >Login</Button>
                        <br/>
                        <Button variant="outline-danger" style={{width:'300px', height: '40px' }}>Não possui conta? Clique Aqui</Button>{' '}
                    </div>
                    </Form>
                </div>
            </div>
            <Rodape />
        </div>
    );
}

export default Login;
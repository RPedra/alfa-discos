import React, {useState} from "react";
import {Form, Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import "./Login.css";
import Cabecalho from "../Cabecalho";



function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const history = useHistory();
    function login(){
        if(email == "abc@gmail.com" && senha === "123") {
            alert ("Bem vindo!");
            history.push("home");
        }
        else alert ("Dados incorretos");
    }

    return (
        <div className="base">
            <div className="justify-content-end">
            <Cabecalho/>
            </div>
            <div className="container">
                <img src ="/images/Login.png" alt="Login"/>
             <Form>
                <div className="inputs">
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Card.Title>E-mail</Card.Title>
                     <Form.Control type="email" placeholder="Coloque seu e-mail" onChange={(e) => setEmail(e.target.value)}  />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Card.Title>Senha</Card.Title>
                     <Form.Control type="password" placeholder="Coloque sua senha" onChange={(e) => setSenha(e.target.value)}/>
                 </Form.Group>
                    <div className="buttons">
                        <Button variant="danger" style={{width:'300px', height: '40px' }} onClick={login} >Login</Button>
                        <br/>
                        <Button variant="outline-danger" style={{width:'300px', height: '40px' }}>Não possui conta? Clique Aqui</Button>{' '}
                    </div>
                </div>
             </Form>
            </div>
        </div>
    );
}

export default Login;
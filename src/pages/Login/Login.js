import React from "react";
import {Form, Button} from "react-bootstrap";
import "./Login.css";
import Cabecalho from "../Cabecalho";


function Login() {
    return (
        <div className="base">
            <div className="justify-content-end">
            <Cabecalho/>
            </div>
            <div className="container">
             <h1>Faça seu login</h1>
             <Form>
                <div className="inputs">
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="e-mail" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="senha" />
                </Form.Group>
                    <div className="buttons">
                        <Button variant="danger">Login</Button>
                        <br/>
                        <Button variant="outline-danger">Não possui conta? Clique Aqui</Button>{' '}
                    </div>
                </div>
             </Form>
            </div>
        </div>
    );
}

export default Login;
import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";
import api from "../../services/api";
import {login} from "../../services/auth"

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, senha });
      alert("Bem vindo", response.data.user.nome);
      login(response.data.accessToken)
      history.push("/home");
    } catch (error) {
      if (error.response.status === 403) {
        alert("Credenciais Invalidas!");
      } else {
        alert(error.message.data.notification);
      }
      console.warn(error);
    }
  }

  return (
    <div className="loginPagina">
      <Cabecalho />
      <div className="loginCorpo">
        <Card
          style={{
            backgroundColor: "#A31621",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            maxWidth: "1156px",
            height: "50px",
            boxShadow: "-4px 4px 5px 0px rgba(26,20,35,0.15)",
          }}
        >
          <Card.Title style={{ color: "white" }}>Login</Card.Title>
        </Card>
        <div className="loginInputs">
          <Form className="loginFormulario">
            <br />
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Card.Title>E-mail</Card.Title>
              <Form.Control
                type="email"
                placeholder="Insira seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Card.Title>Senha</Card.Title>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </Form.Group>
            <div className="loginButtons">
              <Button
                style={{
                  width: "100%",
                  height: "40px",
                  margin: "0 auto",
                  backgroundColor: "#A31621",
                  borderColor: "#A31621",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button
                variant="outline-danger"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                onClick={() => {
                  history.push("Cadastro");
                }}
              >
                Não possui conta? Clique Aqui
              </Button>{" "}
            </div>
          </Form>
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default Login;

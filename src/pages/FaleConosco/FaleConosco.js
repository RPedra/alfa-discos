import React, { useState } from "react";
import { Form, Card, FormGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Cabecalho from "../Cabecalho";
import "./FaleConosco.css";
import Rodape from "../Rodape";

function FaleConosco() {
  const [nome, setEmail] = useState();
  const [email, setNome] = useState();
  const [assunto, setAssunto] = useState();
  const [mensagem, setMensagem] = useState();
  const history = useHistory();

  return (
    <div className="FaleConosco-pagina">
      <Cabecalho />
      <div className="FaleConosco-Titulo">
        <Card
          className="justify-content-center-FaleConosco"
          style={{
            backgroundColor: "#A31621",
            alignItems: "center",
            margin: "0 auto",
            maxWidth: "1156px",
            width: "100%",
            height: "50px",
            boxShadow: "-4px 4px 5px 0px rgba(0,0,0,0.15)",
          }}
        >
          <Card.Title rounded style={{ color: "white" }}>
            Fale Conosco
          </Card.Title>
        </Card>
        <div className="inputs-FaleConosco">
          <Form className="formulario-FaleConosco">
            <br />
            <br />
            <FormGroup className="mb-3" controlId="formBasicNome">
              <Card.Title>Nome (Obrigatório)</Card.Title>
              <Form.Control
                type="Nome"
                onChange={(e) => setNome(e.target.value)}
              />
            </FormGroup>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Card.Title>E-mail (Obrigatório)</Card.Title>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAssunto">
              <Card.Title>Assunto</Card.Title>
              <Form.Control
                type="Assunto"
                onChange={(e) => setAssunto(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="SuaMensagem" controlId="formBasicMensagem">
              <Card.Title>Sua Mensagem</Card.Title>
              <Form.Control
                type="mensagem"
                onChange={(e) => setMensagem(e.target.value)}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default FaleConosco;

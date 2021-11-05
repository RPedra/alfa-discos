import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Rodape from "../Rodape";
import Cabecalho from "../Cabecalho";
import api from "../../services/api";
import { Form, Button, Card } from "react-bootstrap";
import "./Cadastro.css";

function Cadastro() {

    const [nome, setNome] = useState();
    const [nascimento, setNascimento] = useState();
    const [endereco, setEndereco] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confirm, setConfirm] = useState();
    const history = useHistory();

    async function handleCadastro(e){
        e.preventDefault();
        try {
            if (senha != confirm) {alert("Falha na confirmação de senha")};
            const response = await api.post("/users", {nome, email, senha, nascimento, endereco});
            alert("Cadastro Criado!", response.data.user.nome);
            history.push("/home");
        } catch (error){
            console.warn("Erro no cadastro de usuário:", error);
            
        }}



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
                            <Form.Control type="string" placeholder="Insira seu nome" onChange={(e) => setNome(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Card.Title>Data de nascimento</Card.Title>
                            <Form.Control type="date" placeholder="Insira sua data de nascimento" onChange={(e) => setNascimento(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Card.Title>Endereço</Card.Title>
                            <Form.Control type="email" placeholder="Insira seu endereço" onChange={(e) => setEndereco(e.target.value)} />
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
                            <Form.Control type="password" placeholder="Digite novamente sua senha" onChange={(e) => setConfirm(e.target.value)} />
                        </Form.Group>
                        <div className="cadastroButtons">
                            <Button style={{
                                width:'100%', 
                                height: '40px',
                                margin: '0 auto',
                                backgroundColor: '#A31621',
                                borderColor: '#A31621' }} onClick={handleCadastro} >Cadastrar
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
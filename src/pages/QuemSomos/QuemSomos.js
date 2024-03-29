import React from "react";
import Cabecalho from "../Cabecalho";
import { Card } from "react-bootstrap";
import Rodape from "../Rodape";
import "./QuemSomos.css";

function QuemSomos() {

  return (
    <div className="pagina-quemsomos">
      <Cabecalho />
      <div className="alinhamento-quemsomos">
        <Card
          style={{
            backgroundColor: "#A31621",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            maxWidth: "1156px",
            height: "50px",
            boxShadow: "-4px 4px 5px 0px rgba(0,0,0,0.15)",
          }}
        >
          <Card.Title rounded style={{ color: "white" }}>
            Quem Somos
          </Card.Title>
        </Card>
        <div className="texto-quemsomos">
          <h1 style={{ fontSize: "1.5rem" }}>
            A Alfa Discos foi criada com a finalidade de incentivar e alavancar
            as vendas e o trabalho de artistas com um baixo orçamento.
            Divulgamos o trabalho destes artistas e, atraves de nossa
            plataforma, permitimos então que eles vendam seus álbuns sem a
            intermediação de uma gravadora. Trabalhamos com todos os tipos de
            estilos músicais.
          </h1>

          <h2 style={{ fontSize: "1.5rem" }}>
            Vendemos não apenas CDs, mas o sonho de artistas.
          </h2>

          <h1 style={{ fontSize: "1.5rem" }}>
            Oferecemos as mais diversas experiência para nossos clientes, desde
            a procura pelo CD ideal até a entega do produto em sua residência.
          </h1>

          <h1 style={{ fontSize: "1.5rem" }}>
            Oferecemos recomendações com base nos estilos musicais escolhidos
            durante o cadastro. Fique a vontade e explore nosso site em busca
            dos CDs ideais.
          </h1>

          <h1 style={{ fontSize: "1.5rem" }}>
            Nossa maior preocupação é oferecer uma experiência inesquecível para
            nossos usuários e parceiros.
          </h1>
        </div>
      </div>
      <div className="footer">
        <Rodape />
      </div>
    </div>
  );
}

export default QuemSomos;

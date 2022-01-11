import React from "react";
import Header from "../../components/HeaderHome";
import Menu from "../../components/Menu";
import Phone from "../../assets/phone.svg";
import Perfil from "../../assets/perfilContact.svg";

import {
  Div,
  Title,
  Card,
  MiniCard,
  Contato,
  Image,
  GreenButton,
} from "./style";
export function Description() {
  return (
    <div>
      <Header />
      <Div>
        <Menu />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title>Descrição do Produto</Title>
          <Card>
            <div style={{ width: "149px" }}></div>
            <div style={{ width: "735px" }}></div>
            <div style={{ width: "325px" }}>
              <Contato>Contato</Contato>
              <Image src={Perfil} />
              <Image src={Phone} />
              <GreenButton>NEGOCIAR</GreenButton>
              <Contato>Compartilhar</Contato>
            </div>
          </Card>
          <Title>Também pode ser interessante</Title>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
          </div>
        </div>
      </Div>
    </div>
  );
}

export default Description;

import React from "react";
import Header from "../../components/HeaderHome";
import Menu from "../../components/Menu";
import Phone from "../../assets/phone.svg";
import Perfil from "../../assets/perfilContact.svg";
import ExampleDescription from "../../assets/example-description.png";

import {
  Div,
  Title,
  Card,
  MiniCard,
  Contato,
  Image,
  GreenButton,
  ProductImage,
  ImageMain,
  TextBig,
  TextShort,
  TextDescription,
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ProductImage src={ExampleDescription} />
              <ProductImage src={ExampleDescription} />
              <ProductImage src={ExampleDescription} />
              <ProductImage src={ExampleDescription} />
              <ProductImage src={ExampleDescription} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "616px",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <ImageMain src={ExampleDescription} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "30px",
                  }}
                >
                  <TextBig>Trator New Holland T7.205 4x4 2014</TextBig>
                  <TextShort style={{ marginTop: "35px" }}>
                    São Paulo - SP
                  </TextShort>
                  <TextBig>R$88.900</TextBig>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "30px",
                  marginTop: "36px",
                }}
              >
                <TextShort>Descrição</TextShort>
                <TextDescription style={{ marginTop: "13px" }}>
                  Lorem ipsum mi congue lectus bibendum ipsum turpis rhoncus,
                  primis blandit ornare lacus ut tincidunt per integer, viverra
                  vulputate vestibulum tellus odio blandit tincidunt. consequat
                  primis sit iaculis tempor integer per pharetra netus ante
                </TextDescription>
              </div>
            </div>
            <div
              style={{ height: "100%", border: "1px solid #162D1866" }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <Contato>Contato</Contato>
              <div>
                <Image src={Perfil} />
                <TextShort>Eduardo Oliveira</TextShort>
              </div>
              <div style={{ display: "flex", flexDirection: "row", marginTop:"7px" }}>
                <Image src={Phone} />
                <TextShort>(99)99999-9999</TextShort>
              </div>
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

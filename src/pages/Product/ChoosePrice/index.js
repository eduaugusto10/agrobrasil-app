import React, { useContext, useState } from "react";
import Header from "../../../components/Header";
import ProductContext from "../ProductContext";
import { BallGreen, BallWhite } from "../style";
import {
  Container,
  DivColumn,
  SubTitle,
  Text,
  Card,
  InsideCard,
  WhiteButton,
  GreenButton,
} from "./style";
export function ChoosePrice() {
  const { changeStep } = useContext(ProductContext);

  return (
    <>
      <Header />
      <DivColumn>
        <Text>Qual o plano do seu anúncio?</Text>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card >
            <InsideCard>IMAGEM</InsideCard>
            <SubTitle>30 DIAS</SubTitle>
          </Card>
          <Card>
            <InsideCard>IMAGEM</InsideCard>
            <SubTitle>90 DIAS</SubTitle>
          </Card>
          <Card>
            <InsideCard>IMAGEM</InsideCard>
            <SubTitle>180 DIAS</SubTitle>
          </Card>
          <Card>
            <InsideCard>IMAGEM</InsideCard>
            <SubTitle>365 DIAS</SubTitle>
          </Card>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "60px" }}
        >
          <BallWhite />
          <BallWhite />
          <BallWhite />
          <BallGreen />
          <BallWhite />
          <BallWhite />
        </div>
      </DivColumn>
    </>
  );
}

export default ChoosePrice;

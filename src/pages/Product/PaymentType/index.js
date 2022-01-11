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
export function PaymentType() {
  const { changeStep } = useContext(ProductContext);

  return (
    <>
      <Header />
      <DivColumn>
        <Text>Qual a forma de pagamento do anúncio?</Text>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card >
            <InsideCard>IMAGEM</InsideCard>
            <SubTitle>Cartão de Crédito</SubTitle>
          </Card>
          <Card>
            <InsideCard>IMAGEM</InsideCard>
            <SubTitle>Boleto</SubTitle>
          </Card>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "60px" }}
        >
          <BallWhite />
          <BallWhite />
          <BallWhite />
          <BallWhite />
          <BallGreen />
          <BallWhite />
        </div>
      </DivColumn>
    </>
  );
}

export default PaymentType;

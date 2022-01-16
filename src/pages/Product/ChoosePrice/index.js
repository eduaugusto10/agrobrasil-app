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
  TextCents,
  TextPrice,
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
          <Card onClick={() => changeStep("sixth")}>
            <InsideCard>
              <div style={{ paddingTop: "30%" }}>
                <TextPrice>R$49</TextPrice>
                <TextCents>,90</TextCents>
              </div>
            </InsideCard>
            <SubTitle>30 DIAS</SubTitle>
          </Card>
          <Card onClick={() => changeStep("sixth")}>
            <InsideCard>
              <div style={{ paddingTop: "30%" }}>
                <TextPrice>R$119</TextPrice>
                <TextCents>,70</TextCents>
              </div>
            </InsideCard>
            <SubTitle>90 DIAS</SubTitle>
          </Card>
          <Card onClick={() => changeStep("sixth")}>
            <InsideCard>
              <div style={{ paddingTop: "30%" }}>
                <TextPrice>R$179</TextPrice>
                <TextCents>,40</TextCents>
              </div>
            </InsideCard>
            <SubTitle>180 DIAS</SubTitle>
          </Card>
          <Card onClick={() => changeStep("sixth")}>
            <InsideCard>
              <div style={{ paddingTop: "30%" }}>
                <TextPrice>R$190</TextPrice>
                <TextCents>,80</TextCents>
              </div>
            </InsideCard>
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

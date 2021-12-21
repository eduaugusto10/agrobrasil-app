import React, { useState,useContext } from "react";
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
export function Photos() {
  const [step, setStep] = useState("first");
  const { changeStep } = useContext(ProductContext);

  return (
    <>
      <Header />
      <DivColumn>
        <Text>Coloque fotos do seu produto</Text>
        <SubTitle>Você pode colocar até 5 fotos do seu produto</SubTitle>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card onClick={() => setStep("second")}>
            <InsideCard>IMAGEM</InsideCard>
            <SubTitle>Anexo I</SubTitle>
          </Card>
          <Card>
            <InsideCard>IMAGEM</InsideCard>
            <SubTitle>Anexo II</SubTitle>
          </Card>
          <Card>
            <InsideCard>IMAGEM</InsideCard>
            <SubTitle>Anexo III</SubTitle>
          </Card>
          <Card>
            <InsideCard>IMAGEM</InsideCard>
            <SubTitle>Anexo IV</SubTitle>
          </Card>
          <Card>
            <InsideCard>IMAGEM</InsideCard>
            <SubTitle>Anexo V</SubTitle>
          </Card>
        </div>
        <div style={{ display: "flex", flexDiretion: "row" }}>
          <WhiteButton onClick={() => changeStep("third")}>VOLTAR</WhiteButton>
          <GreenButton onClick={() => changeStep("fifth")}>
            CONTINUAR
          </GreenButton>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "60px" }}
        >
          <BallWhite />
          <BallWhite />
          <BallGreen />
          <BallWhite />
          <BallWhite />
          <BallWhite />
        </div>
      </DivColumn>
    </>
  );
}

export default Photos;

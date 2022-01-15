import React, { createContext, useState } from "react";
import Header from "../../components/Header";
import ProductContext from "./ProductContext";
import ChoosePrice from "./ChoosePrice";
import Description from "./Description";
import Category from "./Category";
import Photos from "./Photos";
import { useNavigate } from "react-router-dom";
import PaymentType from "./PaymentType";
import Hands from "../../assets/hands.svg";
import Engrenagem from "../../assets/engrenagem.svg";
import Home from "../../assets/home.svg";
import Sheet from "../../assets/sheet.svg";
import {
  Container,
  DivColumn,
  SubTitle,
  Text,
  Card,
  InsideCard,
  Image,
} from "./style";
export function Product() {
  const [step, setStep] = useState("first");
  const [father, setFather] = useState("");
  const [productName, setProductName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useNavigate();
  function changeStep(stepToChange) {
    setStep(stepToChange);
  }
  function descriptions(titles, descriptions) {
    setTitle(titles);
    setDescription(descriptions);
  }

  return (
    <ProductContext.Provider
      value={{ changeStep, descriptions, father, setProductName }}
    >
      <Container>
        {step === "first" && (
          <>
            <Header />
            <DivColumn>
              <Text>O que gostaria de anunciar?</Text>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Card
                  onClick={() => {
                    setFather(10);
                    setStep("second");
                  }}
                >
                  <InsideCard>
                    <Image src={Hands} />
                  </InsideCard>
                  <SubTitle>PRODUTOS</SubTitle>
                </Card>
                <Card
                  onClick={() => {
                    setFather(20);
                    setStep("second");
                  }}
                >
                  <InsideCard>
                    <Image src={Engrenagem} />
                  </InsideCard>
                  <SubTitle>SERVIÇOS</SubTitle>
                </Card>
                <Card
                  onClick={() => {
                    setFather(30);
                    setStep("second");
                  }}
                >
                  <InsideCard>
                    <Image src={Home} />
                  </InsideCard>
                  <SubTitle>IMÓVEIS</SubTitle>
                </Card>
                <Card
                  onClick={() => {
                    setFather(40);
                    setStep("second");
                  }}
                >
                  <InsideCard>
                    <Image src={Sheet} />
                  </InsideCard>
                  <SubTitle>CURRÍCULO</SubTitle>
                </Card>
              </div>
            </DivColumn>
          </>
        )}
        {step === "second" && <Category />}
        {step === "third" && <Description />}
        {step === "fourth" && <Photos />}
        {step === "fifth" && <ChoosePrice />}
        {step === "sixth" && <PaymentType />}
      </Container>
    </ProductContext.Provider>
  );
}

export default Product;

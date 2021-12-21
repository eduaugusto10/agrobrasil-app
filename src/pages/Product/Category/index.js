import React, { useContext } from "react";
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
  GreenButton,
  WhiteButton,
} from "./style";
export function Category() {
  const { changeStep } = useContext(ProductContext);
  function backStep() {
    changeStep("first");
  }
  return (
    <>
      <Header />
      <DivColumn>
        <Text>Selecione a categoria do produto</Text>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <select
            style={{
              width: "593px",
              height: "40px",
              border: "1px solid #162d18",
              marginBottom: "79px",
              fontSize: "16px",
              paddingLeft: "10px",
              borderRadius: "3px",
            }}
          >
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option selected value="coco">
              Coco
            </option>
            <option value="manga">Manga</option>
          </select>
        </div>
        <div style={{ display: "flex", flexDiretion: "row" }}>
          <WhiteButton onClick={() => changeStep("first")}>VOLTAR</WhiteButton>
          <GreenButton onClick={() => changeStep("third")}>
            CONTINUAR
          </GreenButton>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "60px" }}
        >
          <BallGreen />
          <BallWhite />
          <BallWhite />
          <BallWhite />
          <BallWhite />
          <BallWhite />
        </div>
      </DivColumn>
    </>
  );
}

export default Category;

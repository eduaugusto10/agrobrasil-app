import React, { useContext, useState } from "react";
import api from "../../../services/api";
import Header from "../../../components/Header";
import ProductContext from "../ProductContext";
import { BallGreen, BallWhite } from "../style";
import { DivColumn, SubTitle, Text, GreenButton, WhiteButton } from "./style";
export function Description() {
  const { changeStep, prodID } = useContext(ProductContext);
  const [titles, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function updateProduct() {
    const data = new FormData();
    data.append("price", price);
    data.append("title", titles);
    data.append("description", description);
    //data.append("_method", "PUT");
    try {
      api.put(`/products/${prodID}`, data).then((result) => {
        console.log(result);
      });
    } catch (error) {
      console.log("Erro na senha");
    }
  }

  return (
    <>
      <Header />
      <DivColumn>
        <Text>Indique o título do seu anúncio</Text>
        <SubTitle>Nome e modelo do seu produto</SubTitle>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            value={titles}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "673px", height: "40px" }}
            maxLength={40}
          />
        </div>
        <Text>Coloque a descrição do seu produto</Text>
        <SubTitle>Escreva detalhes do seu produto</SubTitle>
        <div style={{ display: "flex" }}>
          <textarea
            rows="5"
            style={{ width: "673px", height: "276px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Text>Valor de venda do produto</Text>
        <SubTitle>Quanto vai custar seu produto?</SubTitle>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "673px", height: "40px" }}
            value={price}
          />
        </div>
        <div style={{ display: "flex", flexDiretion: "row" }}>
          <WhiteButton onClick={() => changeStep("second")}>VOLTAR</WhiteButton>
          <GreenButton
            onClick={() => {
              updateProduct();
              changeStep("fourth");
            }}
          >
            CONTINUAR
          </GreenButton>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "60px" }}
        >
          <BallWhite />
          <BallGreen />
          <BallWhite />
          <BallWhite />
          <BallWhite />
          <BallWhite />
        </div>
      </DivColumn>
    </>
  );
}

export default Description;

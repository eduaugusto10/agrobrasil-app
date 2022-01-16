import React, { useEffect, useState } from "react";
import Header from "../../components/HeaderHome";
import Menu from "../../components/Menu";
import api from "../../services/api";
import Anuncie from "../../assets/anuncie.svg";
import Example from "../../assets/example.png";
import { useNavigate } from "react-router-dom";
import {
  Div,
  Title,
  TitleCard,
  MiniCard,
  ImageProduct,
  Price,
  Text,
  TextGreen,
  TextGreenShort,
  Column,
} from "./style";
export function MyProducts() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function queryUsers() {
      try {
        await api.get(`produser/${localStorage.getItem("@agrobrasilID")}`).then((result) => {
          console.log(result.data);
          setProducts(result.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
    queryUsers();
  }, []);

  return (
    <div>
      <Header />
      <Div>
        <Menu />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title>Meus Anúncios</Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {products &&
              products.map((prodItens) => (
                <MiniCard>
                  <Column>
                    <ImageProduct src={prodItens.image_1} />
                  </Column>
                  <Column>
                    <Text style={{ marginTop: "19px" }}>ID: {prodItens.id}</Text>
                    <TitleCard>{prodItens.title}</TitleCard>
                    <Text style={{ marginTop: "15px" }}>São Paulo - SP</Text>
                    <Price>
                      R${prodItens.price}<span style={{ fontSize: "8px" }}>,00</span>
                    </Price>
                  </Column>
                  <Column>
                    <Text style={{ marginTop: "38px" }}>Plano</Text>
                    <TextGreen>38</TextGreen>
                    <TextGreenShort>dias</TextGreenShort>
                  </Column>
                  <Column>
                    <Text style={{ marginTop: "38px" }}>Expira em</Text>
                    <TextGreenShort>13/01</TextGreenShort>
                    <TextGreen>2022</TextGreen>
                  </Column>
                  <Column>
                    <Text style={{ marginTop: "38px" }}>Restam</Text>
                    <TextGreen>38</TextGreen>
                    <TextGreenShort>dias</TextGreenShort>
                  </Column>
                  <Column></Column>
                </MiniCard>
              ))}
          </div>
        </div>
      </Div>
    </div>
  );
}

export default MyProducts;

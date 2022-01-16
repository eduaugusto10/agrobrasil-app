import React, { useState, useEffect } from "react";
import Header from "../../components/HeaderHome";
import Menu from "../../components/Menu";
import api from "../../services/api";
import Phone from "../../assets/phone.svg";
import Perfil from "../../assets/perfilContact.svg";
import ExampleDescription from "../../assets/example-description.png";
import { useLocation } from "react-router-dom";

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
export function Description(props) {
  const [products, setProducts] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const location = useLocation();
  useEffect(() => {
    async function queryUsers() {
      try {
        await api.get(`products/${location.state.id}`).then((result) => {
          console.log(result.data);
          setProducts(result.data);
          setMainImage(result.data.image_1);
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
          <Title>Descrição do Produto</Title>
          <Card>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ProductImage
                onClick={() => setMainImage(products.image_1)}
                src={products == null ? "Carregando" : products.image_1}
              />
              <ProductImage
                onClick={() => setMainImage(products.image_2)}
                src={products == null ? "Carregando" : products.image_2}
              />
              <ProductImage
                onClick={() => setMainImage(products.image_3)}
                src={products == null ? "Carregando" : products.image_3}
              />
              <ProductImage
                onClick={() => setMainImage(products.image_4)}
                src={products == null ? "Carregando" : products.image_4}
              />
              <ProductImage
                onClick={() => setMainImage(products.image_5)}
                src={products == null ? "Carregando" : products.image_5}
              />
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
                <ImageMain src={products == null ? "Carregando" : mainImage} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "30px",
                  }}
                >
                  <TextBig>
                    {products == null ? "Carregando" : products.title}
                  </TextBig>
                  <TextShort style={{ marginTop: "35px" }}>
                    São Paulo - SP
                  </TextShort>
                  <TextBig>
                    R${products == null ? "Carregando" : products.price}
                  </TextBig>
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
                  {products == null ? "Carregando" : products.description}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "7px",
                }}
              >
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

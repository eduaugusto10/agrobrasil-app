import React from "react";
import Header from "../../components/HeaderHome";
import Menu from "../../components/Menu";
import Anuncie from "../../assets/anuncie.svg";
import Example from "../../assets/example.png";
import { useNavigate } from "react-router-dom";
import {
  Div,
  Title,
  TitleCard,
  MiniCard,
  MiniCardGreen,
  Image,
  ImageProduct,
  SubTitle,
  Price,
} from "./style";
export function Home() {
  const history = useNavigate();
  function Redirect() {
    history("/product");
  }
  return (
    <div>
      <Header />
      <Div>
        <Menu />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title>Anúncios</Title>
          <div
            style={{
              display: "inline-grid",
              gridTemplateColumns: "auto auto auto auto",
            }}
          >
            <MiniCardGreen onClick={Redirect}>
              <Image src={Anuncie} />
            </MiniCardGreen>
            <MiniCard>
              <TitleCard>Semente de Dinheiro</TitleCard>
              <ImageProduct src={Example} />
              <SubTitle>São Paulo - SP</SubTitle>
              <Price>R$25<span style={{fontSize:"11px"}}>,00</span></Price>
            </MiniCard>
            <MiniCard>
              <TitleCard>Semente de Dinheiro</TitleCard>
              <ImageProduct src={Example} />
              <SubTitle>São Paulo - SP</SubTitle>
              <Price>R$25<span style={{fontSize:"11px"}}>,00</span></Price>
            </MiniCard>
            <MiniCard>
              <TitleCard>Semente de Dinheiro</TitleCard>
              <ImageProduct src={Example} />
              <SubTitle>São Paulo - SP</SubTitle>
              <Price>R$25<span style={{fontSize:"11px"}}>,00</span></Price>
            </MiniCard>
            <MiniCard>
              <TitleCard>Semente de Dinheiro</TitleCard>
              <ImageProduct src={Example} />
              <SubTitle>São Paulo - SP</SubTitle>
              <Price>R$25<span style={{fontSize:"11px"}}>,00</span></Price>
            </MiniCard>
            <MiniCard>
              <TitleCard>Semente de Dinheiro</TitleCard>
              <ImageProduct src={Example} />
              <SubTitle>São Paulo - SP</SubTitle>
              <Price>R$25<span style={{fontSize:"11px"}}>,00</span></Price>
            </MiniCard>
            <MiniCard>
              <TitleCard>Semente de Dinheiro</TitleCard>
              <ImageProduct src={Example} />
              <SubTitle>São Paulo - SP</SubTitle>
              <Price>R$25<span style={{fontSize:"11px"}}>,00</span></Price>
            </MiniCard>
            <MiniCard>
              <TitleCard>Semente de Dinheiro</TitleCard>
              <ImageProduct src={Example} />
              <SubTitle>São Paulo - SP</SubTitle>
              <Price>R$25<span style={{fontSize:"11px"}}>,00</span></Price>
            </MiniCard>
            <MiniCard>
              <TitleCard>Semente de Dinheiro</TitleCard>
              <ImageProduct src={Example} />
              <SubTitle>São Paulo - SP</SubTitle>
              <Price>R$25<span style={{fontSize:"11px"}}>,00</span></Price>
            </MiniCard>
            <MiniCard>
              <TitleCard>Semente de Dinheiro</TitleCard>
              <ImageProduct src={Example} />
              <SubTitle>São Paulo - SP</SubTitle>
              <Price>R$25<span style={{fontSize:"11px"}}>,00</span></Price>
            </MiniCard>

          </div>
        </div>
      </Div>
    </div>
  );
}

export default Home;

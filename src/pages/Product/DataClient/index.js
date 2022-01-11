import React, { useContext, useState } from "react";
import Header from "../../../components/Header";
import ProductContext from "../ProductContext";
import axios from "axios";
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

export function DataClient() {
  //const { changeStep } = useContext(ProductContext);
  async function buyPackage() {
    console.log("Gerar boleto")
    try {
      axios.post(
        "https://cors-anywhere.herokuapp.com/https://api.iugu.com/v1/charge?api_token=FEC34341F743CB7FB805621059ADFF589CD584D6BE5FE83D74859B47A97061D0",
        {
          items: [
            {
              description: "aaaa",
              quantity: 1,
              price_cents: 10000,
            },
          ],
          payer: {
            address: {
              street: "Conselheiro Lafayetti",
              number: "155",
              district: "São Paulo",
              city: "São Caetano do Sul",
              state: "SP",
              zip_code: "09550-000",
              complement: "AP 61",
            },
            cpf_cnpj: "98441483086",
            name: "iugu ",
            phone: "11951701017",
          },
          method: "bank_slip",
          order_id: "order_id21",
          email: "eduaugusto10@gmail.com",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            //Cookie: "__cfruid=df598e45cd90947e522e12ec895a84f7059cacbc-1627922464",
          },
        }
      );
    } catch (error) {
      console.log("Erro na senha");
    }
  }

  return (
    <>
      <Header />
      <DivColumn>
        <Text>Qual a forma de pagamento do anúncio?</Text>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card onClick={buyPackage}>
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

export default DataClient;

import React, { useContext, useEffect, useState } from "react";
import Header from "../../../components/Header";
import ProductContext from "../ProductContext";
import AuthContext from "../../../context/auth";
import api from "../../../services/api";
import { BallGreen, BallWhite } from "../style";

import { DivColumn, Text, GreenButton, WhiteButton } from "./style";

export function Category() {
  const { user } = useContext(AuthContext);
  const { changeStep, father, setProdID } = useContext(ProductContext);
  const [product, setProduct] = useState();
  const [productID, setProductID] = useState();
  useEffect(() => {
    async function handleSubmit() {
      try {
        api.get(`/types/${father}`).then((result) => {
          console.log(result.data);
          setProduct(result.data);
        });
      } catch (error) {}
    }
    console.log(father);
    handleSubmit();
  }, []);

  async function createProduct() {
    console.log(user);
    const data = new FormData();
    data.append("user_id", localStorage.getItem("@agrobrasilID"));
    data.append("type_id", productID);
    data.append("payment_status", "cadastro");
    try {
      api.post("/products", data).then((result) => {
        console.log(result);
        setProdID(result.data.id)
      });
    } catch (error) {
      console.log("Erro na senha");
    }
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
            onChange={(e) => setProductID(e.target.value)}
            
          ><option selected>Selecione a categoria</option>
            {product &&
              product.map((products) => (
                <option value={products.id}>{products.subproduct}</option>
              ))}
          </select>
        </div>
        <div style={{ display: "flex", flexDiretion: "row" }}>
          <WhiteButton onClick={() => changeStep("first")}>VOLTAR</WhiteButton>
          <GreenButton
            onClick={() => {
              changeStep("third");
              createProduct();
            }}
          >
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

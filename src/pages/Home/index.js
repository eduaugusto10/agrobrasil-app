import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/HeaderHome";
import Menu from "../../components/Menu";
import api from "../../services/api";
import Anuncie from "../../assets/anuncie.svg";
import AuthContext from "../../context/auth";
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
  const { signed } = useContext(AuthContext);
  const history = useNavigate();
  const [products, setProducts] = useState(null);
  function Redirect() {
    history("/product");
  }
  function RedirectCard(e) {
    !signed ? history(`/login`) : history(`/description`, { state: { id: e } });
  }

  useEffect(() => {
    async function queryUsers() {
      try {
        await api.get(`products/`).then((result) => {
          console.log(result.data);
          setProducts(result.data);
          console.log(signed);
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
            {products &&
              products.map((prodItens) => (
                <MiniCard onClick={() => RedirectCard(prodItens.id)}>
                  <TitleCard>{prodItens.title}</TitleCard>
                  <ImageProduct src={prodItens.image_1} />
                  <SubTitle>São Paulo - SP</SubTitle>
                  <Price>
                    R${!signed ? "----" : parseInt(prodItens.price)}
                    <span style={{ fontSize: "11px" }}>
                      {!signed ? "" : ",00"}
                    </span>
                  </Price>
                </MiniCard>
              ))}
          </div>
        </div>
      </Div>
    </div>
  );
}

export default Home;

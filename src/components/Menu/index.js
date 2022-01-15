import React from "react";
import { Container, Image } from "./style";
import { useNavigate } from "react-router-dom";
import Share from "../../assets/shareMenu.svg";
import House from "../../assets/houseMenu.svg";
import Home from "../../assets/menuHome.svg";

export function Menu() {
  const history = useNavigate();
  function RedirectHome() {
    history("/home");
  }
  function RedirectProduct() {
    history("/product");
  }
  return (
    <Container>
      <Image src={Home} onClick={RedirectHome} />
      <Image src={House} onClick={RedirectProduct} />
      <Image src={Share} />
    </Container>
  );
}

export default Menu;

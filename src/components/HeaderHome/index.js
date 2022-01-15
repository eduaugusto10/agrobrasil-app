import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Image, ImageRight, Div, Search } from "./style";
import LogoHeader from "../../assets/headerHome.png";
import Profile from "../../assets/profile.svg";
import Wallet from "../../assets/wallet.svg";

export function Header() {
  const history = useNavigate();
  function Redirect() {
    history("/login");
  }
  function RedirectMyProducts() {
    history("/myproducts");
  }
  return (
    <Container>
      <Div>
        <Image src={LogoHeader} />
      </Div>
      <Div>
        <Search placeholder="Pesquisar" />
      </Div>
      <Div>
        <ImageRight src={Wallet} onClick={RedirectMyProducts} />
        <ImageRight src={Profile} onClick={Redirect} />
      </Div>
    </Container>
  );
}

export default Header;

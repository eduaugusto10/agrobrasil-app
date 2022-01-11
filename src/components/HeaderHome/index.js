import React from "react";
import { Container, Image, ImageRight, Div, Search } from "./style";
import LogoHeader from "../../assets/headerHome.png";
import Profile from "../../assets/profile.svg";
import Wallet from "../../assets/wallet.svg";

export function Header() {
  return (
    <Container>
      <Div>
        <Image src={LogoHeader} />
      </Div>
      <Div>
        <Search placeholder="Pesquisar" />
        </Div>
      <Div>
        <ImageRight src={Wallet} />
        <ImageRight src={Profile} />
      </Div>
    </Container>
  );
}

export default Header;

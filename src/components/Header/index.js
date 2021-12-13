import React from "react";
import { Container, Image } from "./style";
import LogoHeader from "../../assets/logo-header.svg";
export function Header() {
  return (
    <Container>
      <Image src={LogoHeader} />
    </Container>
  );
}

export default Header;

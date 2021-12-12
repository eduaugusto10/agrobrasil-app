import React from "react";
import { Container, Image } from "./style";
import Logo from "../../assets/allLogo.svg";

export function LeftLogo() {
  return (
    <Container>
      <Image src={Logo} />
    </Container>
  );
}


export default LeftLogo
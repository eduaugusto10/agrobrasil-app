import React from "react";
import { Container, Image } from "./style";

import Share from "../../assets/shareMenu.svg";
import House from "../../assets/houseMenu.svg";
import Home from "../../assets/menuHome.svg";

export function Menu() {
  return (
    <Container>
        <Image src={Home} />
        <Image src={House} />
        <Image src={Share} />
    </Container>
  );
}

export default Menu;

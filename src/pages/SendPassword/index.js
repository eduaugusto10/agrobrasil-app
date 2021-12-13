import React from "react";
import { Text, Container, DivInputColumn, DivInputRow } from "./style";
import GreenButton from "../../components/GreenButton";
import Input from "../../components/Input";
import LeftLogo from "../../components/LeftLogo";

export function SendPassword() {
  return (
    <Container>
      <div>
        <LeftLogo />
      </div>
      <DivInputColumn>
        <Text>Pronto!</Text>
        <span style={{ color: "#162D18", margin: "50px" }}>
          Um link para recuperar sua senha foi enviado para seu e-mail
        </span>
        <GreenButton name="OK" />
      </DivInputColumn>
    </Container>
  );
}

export default SendPassword;

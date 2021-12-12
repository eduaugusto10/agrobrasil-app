import React from "react";
import { Text, Container, DivInputColumn, DivInputRow } from "./style";
import GreenButton from "../../components/GreenButton";
import Input from "../../components/Input";
import LeftLogo from "../../components/LeftLogo";

export function ForgotPassword() {
  return (
    <Container>
      <div>
        <LeftLogo />
      </div>
      <DivInputColumn>
        <Text>Recuperar Senha</Text>
        <Input title="E-mail" />
        <GreenButton name="ENVIAR" />
      </DivInputColumn>
    </Container>
  );
}

export default ForgotPassword;

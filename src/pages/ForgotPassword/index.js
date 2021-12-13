import React from "react";
import { Text, Container, DivInputColumn } from "./style";
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
        <Text >Recuperar Senha</Text>
        <Input title="E-mail" />
        <div style={{ marginTop: "10px" }}>
          <GreenButton name="ENVIAR" />
        </div>
      </DivInputColumn>
    </Container>
  );
}

export default ForgotPassword;

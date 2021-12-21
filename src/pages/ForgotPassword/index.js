import React from "react";
import {
  Text,
  Container,
  DivInputColumn,
  GreenButton,
  Input,
  SubTitle,
} from "./style";

import LeftLogo from "../../components/LeftLogo";

export function ForgotPassword() {
  return (
    <Container>
      <div>
        <LeftLogo />
      </div>
      <DivInputColumn>
        <Text>Recuperar Senha</Text>
        <SubTitle>E-mail</SubTitle>
        <Input />
        <div style={{ marginTop: "10px" }}>
          <GreenButton>ENVIAR</GreenButton>
        </div>
      </DivInputColumn>
    </Container>
  );
}

export default ForgotPassword;

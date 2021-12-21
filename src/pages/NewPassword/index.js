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

export function NewPassword() {
  return (
    <Container>
      <div>
        <LeftLogo />
      </div>
      <DivInputColumn>
        <Text>Redefinir senha</Text>
        <SubTitle>Nova Senha</SubTitle>
        <Input type="password" />
        <SubTitle>Confirmar senha</SubTitle>
        <Input type="password" />
        <GreenButton>CONFIRMAR</GreenButton>
      </DivInputColumn>
    </Container>
  );
}

export default NewPassword;

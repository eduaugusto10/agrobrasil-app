import React from "react";
import { Text, Container, DivInputColumn } from "./style";
import GreenButton from "../../components/GreenButton";
import Input from "../../components/Input";
import LeftLogo from "../../components/LeftLogo";

export function NewPassword() {
  return (
    <Container>
      <div>
        <LeftLogo />
      </div>
      <DivInputColumn>
        <Text>Redefinir senha</Text>

        <Input title="Nova senha" type="password" />
        <Input title="Confirmar senha" type="password" />
        <GreenButton name="CONFIRMAR" />
      </DivInputColumn>
    </Container>
  );
}

export default NewPassword;

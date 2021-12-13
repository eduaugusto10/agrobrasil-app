import React from "react";
import { Text, Container, DivInputColumn, DivInputRow } from "./style";
import GreenButton from "../../components/GreenButton";
import Input from "../../components/Input";
import LeftLogo from "../../components/LeftLogo";

export function Register() {
  return (
    <Container>
      <div>
        <LeftLogo />
      </div>
      <DivInputColumn>
        <Text>Crie sua conta</Text>
        <DivInputRow>
          <div>
            <Input title="Nome de usuário" />
            <Input title="Senha" type="password" />
            <Input title="Celular" />
          </div>
          <div>
            <Input title="E-mail" type="email" />
            <Input title="Confirmar senha" type="password" />
          </div>
        </DivInputRow>
        <GreenButton name="CADASTRAR" />
      </DivInputColumn>
    </Container>
  );
}

export default Register;

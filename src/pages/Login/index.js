import React from "react";
import { Text, Container, DivInputColumn, DivInputRow } from "./style";
import GreenButton from "../../components/GreenButton";
import Input from "../../components/Input";
import LeftLogo from "../../components/LeftLogo";

export function Login() {
  return (
    <Container>
      <div>
        <LeftLogo />
      </div>
      <DivInputColumn>
        <Text>Bem-vindo de volta!</Text>

        <Input title="E-mail" />
        <Input title="Senha" type="password" />
        <div style={{textAlign:"left" }}>
          <span>Esqueci minha senha</span>
        </div>
        <GreenButton name="ENTRAR" />
        <span>Registre-se</span>
      </DivInputColumn>
    </Container>
  );
}

export default Login;

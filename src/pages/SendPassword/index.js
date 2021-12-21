import React from "react";
import {
  Text,
  Container,
  DivInputColumn,
  GreenButton,
  SubTitle,
} from "./style";
import LeftLogo from "../../components/LeftLogo";

export function SendPassword() {
  return (
    <Container>
      <div>
        <LeftLogo />
      </div>
      <DivInputColumn>
        <Text>Pronto!</Text>
        <SubTitle>
          Um link para recuperar sua senha foi enviado para seu e-mail
        </SubTitle>
        <GreenButton>OK</GreenButton>
      </DivInputColumn>
    </Container>
  );
}

export default SendPassword;

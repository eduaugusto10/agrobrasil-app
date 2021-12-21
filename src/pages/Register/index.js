import React, { useState } from "react";
import api from "../../services/api";
import {
  Text,
  Container,
  DivInputColumn,
  DivInputRow,
  Input,
  SubTitle,
  GreenButton,
  Column
} from "./style";

import LeftLogo from "../../components/LeftLogo";

export function Register() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit() {
    if (!email || !password) {
      console.log("Insira os dados");
    } else {
      const data = new FormData();
      data.append("nickname", nickname);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);
      try {
        api.post("/users", data).then((result) => {
          console.log(result);
        });
      } catch (error) {
        console.log("Erro na senha");
      }
    }
  }

  return (
    <Container>
      <div>
        <LeftLogo />
      </div>
      <DivInputColumn>
        <Text>Crie sua conta</Text>
        <DivInputRow>
          <Column>
            <SubTitle>Nome de usuário</SubTitle>
            <Input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <SubTitle>Senha</SubTitle>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <SubTitle>Celular</SubTitle>
            <Input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Column>
          <Column>
            <SubTitle>E-mail</SubTitle>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SubTitle>Confirmar senha</SubTitle>
            <Input
              type="password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </Column>
        </DivInputRow>
        <GreenButton onClick={() => handleSubmit()}>CADASTRAR</GreenButton>
      </DivInputColumn>
    </Container>
  );
}

export default Register;

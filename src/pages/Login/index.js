import React, { useState } from "react";
import {
  Text,
  Container,
  DivInputColumn,
  Form,
  Input,
  SubTitle,
} from "./style";
import { NavLink } from "react-router-dom";
import GreenButton from "../../components/GreenButton";
import LeftLogo from "../../components/LeftLogo";
import api from "../../services/api";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      console.log("Preencha ");
    } else {
      try {
        api
          .post(
            "/sessions",
            {
              email,
              password,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((result) => {
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
        <Text>Bem-vindo de volta!</Text>
        <Form onSubmit={handleSubmit}>
          <SubTitle>E-mail</SubTitle>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubTitle>Senha</SubTitle>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              width: "58%",
              marginLeft: "10%",
              marginBottom: "20px",
              marginTop: "-20px",
              textAlign: "left",
            }}
          >
            <NavLink
              style={{ color: "#162D1899", textDecoration: "none" }}
              to="/forgotpass"
            >
              <span>Esqueci minha senha</span>
            </NavLink>
          </div>
          <GreenButton name="ENTRAR" />
        </Form>
        <NavLink
          style={{
            color: "#162D18",
            textDecoration: "none",
            fontSize: "18px",
            marginTop: "10px",
          }}
          to="/register"
        >
          <span>Registre-se</span>
        </NavLink>
      </DivInputColumn>
    </Container>
  );
}

export default Login;

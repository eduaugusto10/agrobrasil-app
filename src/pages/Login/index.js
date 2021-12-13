import React from "react";
import { Text, Container, DivInputColumn } from "./style";
import { NavLink } from "react-router-dom";
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
        <div
          style={{
            display: "flex",
            width: "58%",            
            marginLeft: "10%",
            marginBottom: "20px",  
            marginTop:"-20px",          
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

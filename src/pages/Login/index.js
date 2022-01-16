import React, { useContext ,useState } from "react";
import {
  Text,
  Container,
  DivInputColumn,
  Form,
  Input,
  SubTitle,
  GreenButton,
} from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import LeftLogo from "../../components/LeftLogo";
import api from "../../services/api";
import AuthContext from "../../context/auth";
import { login } from '../../services/auth'

export function Login() {
  const { signIn } = useContext(AuthContext);
  const history = useNavigate();
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
            signIn(result.data);
            login(result.data.token.token)
            localStorage.setItem("@agrobrasilID",result.data.user[0].id)
            Redirect();
          });
      } catch (error) {
        console.log("Erro na senha");
      }
    }
  }
  function Redirect() {
    history("/home");
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
          <NavLink
            style={{
              width: "100%",
              color: "#162D1899",
              textAlign: "left",
              marginBottom: "53px",
            }}
            to="/forgotpass"
          >
            <span>Esqueci minha senha</span>
          </NavLink>
          <GreenButton>ENTRAR</GreenButton>
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

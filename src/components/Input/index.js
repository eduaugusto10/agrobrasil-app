import React from "react";
import { Inputs, Text, Container } from "./style";

export function Input(props) {
  return (
    <Container>
      <Text>{props.title}</Text>
      <Inputs type={props.type}/>
    </Container>
  );
}

export default Input;

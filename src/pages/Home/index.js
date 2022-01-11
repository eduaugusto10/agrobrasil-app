import React from "react";
import Header from "../../components/HeaderHome";
import Menu from "../../components/Menu";
import { Div, Title, MiniCard } from "./style";
export function Home() {
  return (
    <div>
      <Header />
      <Div>
        <Menu />
        <Title>Anúncios</Title>
        <MiniCard></MiniCard>
      </Div>
    </div>
  );
}

export default Home;

import React from "react";
import Header from "../../components/HeaderHome";
import Menu from "../../components/Menu";
import Anuncie from "../../assets/anuncie.svg";
import Example from "../../assets/example.png";
import { useNavigate } from "react-router-dom";
import {
  Div,
  Title,
  TitleCard,
  MiniCard,
  ImageProduct,
  SubTitle,
  Price,
  Text,
  TextGreen,
  TextGreenShort,
  Column,
} from "./style";
export function MyProducts() {
  const history = useNavigate();
  function Redirect() {
    history("/product");
  }
  return (
    <div>
      <Header />
      <Div>
        <Menu />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title>Meus Anúncios</Title>
          <div
            style={{
              display: "flex",
              flexDirection:"column"
            }}
          >
            <MiniCard>
              <Column>
                <ImageProduct src={Example} />
              </Column>
              <Column>
                <Text style={{marginTop: "19px"}}>ID: 3910</Text>
                <TitleCard>Semente de Dinheiro</TitleCard>
                <Text style={{marginTop: "15px"}}>São Paulo - SP</Text>
                <Price>
                  R$25<span style={{ fontSize: "8px" }}>,00</span>
                </Price>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Plano</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Expira em</Text>
                <TextGreenShort>13/01</TextGreenShort>
                <TextGreen>2022</TextGreen>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Restam</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column></Column>
            </MiniCard>
            <MiniCard>
              <Column>
                <ImageProduct src={Example} />
              </Column>
              <Column>
                <Text style={{marginTop: "19px"}}>ID: 3910</Text>
                <TitleCard>Semente de Dinheiro</TitleCard>
                <Text style={{marginTop: "15px"}}>São Paulo - SP</Text>
                <Price>
                  R$25<span style={{ fontSize: "8px" }}>,00</span>
                </Price>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Plano</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Expira em</Text>
                <TextGreenShort>13/01</TextGreenShort>
                <TextGreen>2022</TextGreen>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Restam</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column></Column>
            </MiniCard>
            <MiniCard>
              <Column>
                <ImageProduct src={Example} />
              </Column>
              <Column>
                <Text style={{marginTop: "19px"}}>ID: 3910</Text>
                <TitleCard>Semente de Dinheiro</TitleCard>
                <Text style={{marginTop: "15px"}}>São Paulo - SP</Text>
                <Price>
                  R$25<span style={{ fontSize: "8px" }}>,00</span>
                </Price>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Plano</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Expira em</Text>
                <TextGreenShort>13/01</TextGreenShort>
                <TextGreen>2022</TextGreen>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Restam</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column></Column>
            </MiniCard>
            <MiniCard>
              <Column>
                <ImageProduct src={Example} />
              </Column>
              <Column>
                <Text style={{marginTop: "19px"}}>ID: 3910</Text>
                <TitleCard>Semente de Dinheiro</TitleCard>
                <Text style={{marginTop: "15px"}}>São Paulo - SP</Text>
                <Price>
                  R$25<span style={{ fontSize: "8px" }}>,00</span>
                </Price>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Plano</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Expira em</Text>
                <TextGreenShort>13/01</TextGreenShort>
                <TextGreen>2022</TextGreen>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Restam</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column></Column>
            </MiniCard>
            <MiniCard>
              <Column>
                <ImageProduct src={Example} />
              </Column>
              <Column>
                <Text style={{marginTop: "19px"}}>ID: 3910</Text>
                <TitleCard>Semente de Dinheiro</TitleCard>
                <Text style={{marginTop: "15px"}}>São Paulo - SP</Text>
                <Price>
                  R$25<span style={{ fontSize: "8px" }}>,00</span>
                </Price>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Plano</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Expira em</Text>
                <TextGreenShort>13/01</TextGreenShort>
                <TextGreen>2022</TextGreen>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Restam</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column></Column>
            </MiniCard>
            <MiniCard>
              <Column>
                <ImageProduct src={Example} />
              </Column>
              <Column>
                <Text style={{marginTop: "19px"}}>ID: 3910</Text>
                <TitleCard>Semente de Dinheiro</TitleCard>
                <Text style={{marginTop: "15px"}}>São Paulo - SP</Text>
                <Price>
                  R$25<span style={{ fontSize: "8px" }}>,00</span>
                </Price>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Plano</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Expira em</Text>
                <TextGreenShort>13/01</TextGreenShort>
                <TextGreen>2022</TextGreen>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Restam</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column></Column>
            </MiniCard>
            <MiniCard>
              <Column>
                <ImageProduct src={Example} />
              </Column>
              <Column>
                <Text style={{marginTop: "19px"}}>ID: 3910</Text>
                <TitleCard>Semente de Dinheiro</TitleCard>
                <Text style={{marginTop: "15px"}}>São Paulo - SP</Text>
                <Price>
                  R$25<span style={{ fontSize: "8px" }}>,00</span>
                </Price>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Plano</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Expira em</Text>
                <TextGreenShort>13/01</TextGreenShort>
                <TextGreen>2022</TextGreen>
              </Column>
              <Column>
                <Text style={{marginTop: "38px"}}>Restam</Text>
                <TextGreen>38</TextGreen>
                <TextGreenShort>dias</TextGreenShort>
              </Column>
              <Column></Column>
            </MiniCard>
          </div>
        </div>
      </Div>
    </div>
  );
}

export default MyProducts;

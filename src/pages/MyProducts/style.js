import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e8eae8;
`;

export const Title = styled.span`
  font-size: 36px;
  margin-top: 57px;
  margin-left: 100px;
  color: #162d18;
  font-weight: bold;
  font-family: "Sen", sans-serif;
`;
export const TitleCard = styled.span`
  font-size: 20px;
  color: #162d18;
  font-weight: bold;
  font-family: "Sen", sans-serif;
`;
export const SubTitle = styled.span`
  font-size: 18px;
  color: #162d18;
  font-family: "Sen", sans-serif;
  padding-left: 30px;
  padding-right: 30px;
`;
export const Price = styled.span`
  font-size: 20px;
  color: #162d18;
  font-family: "Sen", sans-serif;
  font-weight: bold;
`;

export const MiniCard = styled.div`
  display: grid;
  grid-template-columns: 15vw 25vw 10vw 10vw 10vw 10vw;
  background-color: #fff;
  width: 1060px;
  height: 168px;
  margin: 2px;
  cursor: pointer;
  border-radius: 10px;
  text-align: left;
`;

export const Image = styled.img`
  margin: 32px;
  width: 135px;
  height: 167px;
`;

export const ImageProduct = styled.img`
  margin-left: 40px;
  margin-top: 20px;
  width: 160px;
  height: 120px;
`;

export const Text = styled.span`
  color: #162d1899;
  font-size: 16px;
`;
export const TextGreen = styled.span`
  color: #162d18;
  font-size: 30px;
`;
export const TextGreenShort = styled.span`
  color: #162d18;
  font-size: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

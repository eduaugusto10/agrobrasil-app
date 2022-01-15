import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 96px;
  background-color: #162d18;
  align-items: left;
  justify-content: space-between;
`;

export const Image = styled.img`
  margin: 32px;
  width: 196px;
  height: 39.59px;
`;
export const ImageRight = styled.img`
  margin: 30px;
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

export const Div = styled.div``;

export const Search = styled.input`
  margin: 16px;
  font-size: 18px;
  width: 561px;
  height: 51px;
  background-color: #162d18;
  color: #ffff;
  border-radius: 10px;
  padding-left: 10px;
  border: 2.6px solid #d6ddd6;
  ::placeholder {
    color: #d6ddd6;
  }
`;

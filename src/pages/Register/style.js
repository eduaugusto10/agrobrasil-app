import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30vw 70vw;
  background-color: #e8eae8;
`;

export const DivInputColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  width: 817px;
  height: 605px;
  margin: 10%;
`;

export const DivInputRow = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
`;

export const Text = styled.span`
  font-size: 36px;
  margin-top: 57px;
  color: #162d18;
  font-weight: bold;
  font-family: "Sen", sans-serif;
`;

export const SubTitle = styled.span`
  margin-top: 34px;
  margin-bottom: 5px;
  font-size: 18px;
  color: #162d18;
  font-family: "Sen", sans-serif;
`;

export const Input = styled.input`
  width: 326px;
  height: 40px;
  background-color: #e8eae8;
  border-radius: 3px;
  border: 2px solid #162d180d;
  font-size: 16px;
  padding-left: 7px;
  &:focus {
    outline: none;
    border: 2px solid green;
  }
`;

export const GreenButton = styled.button`
  width: 211px;
  height: 40px;
  margin-top: 30px;
  background-color: #162d18;
  font-size: 18px;
  color: #ffffff;
  border-radius: 5px;
  font-family: "Sen", sans-serif;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: left;
`;

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
  height: 578px;
  margin: 10%;
`;

export const Text = styled.span`
  font-size: 36px;
  padding: 53px;
  color: #162d18;
  font-weight: bold;
  font-family: "Sen", sans-serif;
`;

export const SubTitle = styled.span`
  margin-bottom: 5px;
  font-size: 18px;
  color: #162d18;
  font-family: "Sen", sans-serif;
  width: 100%;
  text-align: left;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 673px;
`;

export const Input = styled.input`
  width: 673px;
  height: 40px;
  background-color: #e8eae8;
  border-radius: 3px;
  border: 2px solid #162d180d;
  font-size: 16px;
  margin-bottom: 24px;
  padding-left: 7px;
  &:focus {
    outline: none;
    border: 2px solid green;
  }
`;

export const GreenButton = styled.button`
  width: 211px;
  height: 40px;
  background-color: #162d18;
  font-size: 18px;
  color: #ffffff;
  border-radius: 5px;
  font-family: "Sen", sans-serif;
  margin-bottom: 10px;
  cursor: pointer;
`;

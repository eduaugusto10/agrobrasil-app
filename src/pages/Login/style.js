import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  background-color: #e8eae8;
`;

export const DivInputColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  margin: 10%;
  padding: 8px;
`;

export const Text = styled.span`
  font-size: 36px;
  padding: 10px;
  color: #162d18;
  font-weight: bold;
  font-family: 'Sen', sans-serif;
`;

export const SubTitle = styled.span`
  margin-bottom: 5px;
  font-size: 18px;
  color: #162d18;
  font-family: 'Sen', sans-serif;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
  width: 326px;
  height: 40px;
  background-color: #e8eae8;
  border-radius: 3px;
  border: 2px solid #162d180d;
  font-size: 16px;
  margin-bottom: 30px;
  padding-left: 7px;
  &:focus {
    outline: none;
    border: 2px solid green;
  }
`;

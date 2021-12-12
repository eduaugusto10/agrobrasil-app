import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  margin-right: 20px;
`;

export const Inputs = styled.input`
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

export const Text = styled.span`
  margin-bottom: 5px;
  font-size: 18px;
`;

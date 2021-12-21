import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e8eae8;
  align-items: center;
  height: 100%;
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  width: 817px;
  height: 500px;
  margin-top: -50px;
  border-radius: 5px;
`;

export const SubTitle = styled.span`
  font-size: 18px;
  color: #162d18;
  font-family: "Sen", sans-serif;
  text-align: center;
`;

export const Text = styled.span`
  font-size: 32px;
  margin-top: 54px;
  margin-bottom: 65px;
  color: #162d18;
  font-weight: bold;
  font-family: "Sen", sans-serif;
`;

export const Card = styled.div`
  width: 121px;
  cursor: pointer;
  margin: 20px;
`;
export const InsideCard = styled.div`
  width: 121px;
  height: 121px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: 6px solid #162d18;
`;

export const GreenButton = styled.button`
  width: 211px;
  height: 40px;
  margin-top: 30px;
  margin-left: 10px;
  background-color: #162d18;
  font-size: 18px;
  color: #ffffff;
  border-radius: 5px;
  font-family: "Sen", sans-serif;
`;
export const WhiteButton = styled.button`
  width: 211px;
  height: 40px;
  margin-top: 30px;
  margin-right: 10px;
  background-color: #fff;
  font-size: 18px;
  color: #162d18;
  border-radius: 5px;
  font-family: "Sen", sans-serif;
`;

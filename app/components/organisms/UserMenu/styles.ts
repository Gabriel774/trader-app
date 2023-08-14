import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${(props) => props.theme.backgroundColor250};
  display: flex;
  border-radius: 7px;
  padding: 30px 35px;
  animation: appear 0.3s;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Username = styled.h1`
  text-align: center;
  font-size: 25px;
`;

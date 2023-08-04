import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const Logo = styled(Image)`
  align-self: center;
  width: 350px;
  object-fit: contain;
  height: fit-content;
  justify-content: center;

  @media (max-width: 450px) {
    width: 270px;
  }
`;

export const RegisterMessage = styled.span`
  justify-self: flex-end;
  align-self: flex-end;
  padding-top: 20px;
`;

export const RegisterLink = styled(Link)`
  color: ${(props) => props.theme.primaryColor600};
`;

export const Container = styled.form`
  min-width: 300px;
  min-height: 100vh;
  text-align: center;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 0 12%;

  @media (max-width: 1050px) {
    padding: 0 20%;
  }
  @media (max-width: 550px) {
    padding: 0 5%;
  }
`;

export const ErrorMessage = styled.span`
  margin: 10px;
  justify-self: flex-start;
  align-self: flex-start;
  color: ${(props) => props.theme.errorLight};
`;

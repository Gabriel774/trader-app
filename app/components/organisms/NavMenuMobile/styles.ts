import Link from "next/link";
import { styled } from "styled-components";

interface NavLinkProps {
  $active: boolean;
}

export const Header = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: ${(props) => props.theme.primaryColor100};
`;

export const HeaderTitle = styled.h3`
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${(props) => props.theme.backgroundColor250};
  display: flex;
  border-radius: 7px;
  margin: 25px;
  animation: appear 0.3s;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 400px) {
    margin: 15px;
  }
`;

export const GapIcon = styled.span`
  width: 35px;
  height: 35px;
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  gap: 10px;
  padding: 30px 30px;
  width: 100%;

  @media (max-width: 545px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 300px) {
    padding: 30px 10px;
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  overflow: hidden;
  padding: 10px 20px;
  border-radius: 7px;
  background-color: ${(props) =>
    props.$active ? props.theme.backgroundColor350 : "transparent"};
`;

export const LinkTitle = styled.h3``;

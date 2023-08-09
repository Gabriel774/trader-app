import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

interface HeaderLinkProps {
  $active: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 30px;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  animation: fade 0.5s;
`;

export const Wrapper = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor250};
  border-bottom: 1px solid ${(props) => props.theme.backgroundColor350};
`;

export const Logo = styled(Image)`
  width: 85px;
  height: fit-content;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeaderLink = styled(Link)<HeaderLinkProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  overflow: hidden;
  padding: 10px 20px;
  border-radius: 7px;
  color: ${(props) =>
    props.$active
      ? props.theme.primaryColor400
      : props.theme.secondaryColor400};
  background-color: ${(props) =>
    props.$active ? props.theme.backgroundColor350 : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor350};
  }
`;

export const HeaderText = styled.span`
  font-size: 16px;
  font-weight: bold;
  transition: all 0.2s;
  white-space: nowrap;
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: fit-content;
  padding: 7px 10px;
  border-radius: 7px;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor350};
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuIconContainer = styled.div`
  display: none;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.secondaryColor500};
  border-radius: 100%;
  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.backgroundColor350};
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const Username = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.secondaryColor400};
`;

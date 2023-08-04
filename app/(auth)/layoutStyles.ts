import { styled } from "styled-components";

interface BannerProps {
  $imgURL: string;
}

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Banner = styled.aside<BannerProps>`
  background-image: url(${(props) => props.$imgURL});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(0.95);
  width: 42%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const SpaceFill = styled.div`
  width: 42%;

  @media (max-width: 1050px) {
    display: none;
  }
`;

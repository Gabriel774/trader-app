import { styled } from "styled-components";

interface CardProps {
  $delay: number;
}

export const WelcomeMessage = styled.h1`
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondaryColor400};
  text-align: center;
  justify-content: center;
  border-radius: 7px;
  padding: 25px;
  background-color: ${(props) => props.theme.primaryColor100};
  gap: 10px;
  font-size: 27px;
  animation: fade 0.5s;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const WelcomeMessageIconContainer = styled.span`
  width: 35px;
  height: 35px;
`;

export const TutorialContainer = styled.div``;

export const Card = styled.div<CardProps>`
  text-align: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.backgroundColor250};
  justify-content: center;
  border-radius: 7px;
  background-color: ${(props) => props.theme.secondaryColor400};
  font-size: 18px;
  width: 100%;
  min-height: 114px;
  position: relative;
  overflow: hidden;
  animation: appearLeft ${(props) => props.$delay}s;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const CardIconContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColor100};
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  height: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    height: fit-content;
  }
`;

export const CardIconWrapper = styled.span`
  width: 35px;
  height: 35px;
  z-index: 1;
  color: ${(props) => props.theme.secondaryColor500};
`;

export const CardText = styled.span`
  padding: 15px 25px;
`;

export const CardContainer = styled.section`
  width: 100%;
  margin-top: 20px;
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

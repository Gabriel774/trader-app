import { styled } from "styled-components";

interface CardProps {
  $delay: number;
}

export const Title = styled.h1`
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
  width: 100%;
  animation: fade 0.5s;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  word-break: normal;
  width: 100%;
  animation: fade 0.5s;

  @media (max-width: 1410px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div<CardProps>`
  display: flex;
  border-radius: 7px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.backgroundColor300};
  animation: appearLeft ${(props) => props.$delay}s;
`;

export const CardRank = styled.span`
  height: 100%;
  background-color: ${(props) => props.theme.primaryColor100};
  display: flex;
  font-size: 25px;
  padding: 15px 0;
  justify-content: center;
  align-items: center;
  min-width: 50px;
`;

export const CardUserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 15px;
  flex: 1;
  text-overflow: ellipsis;
  background-color: ${(props) => props.theme.backgroundColor250};

  @media (max-width: 930px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CardUsername = styled.h4`
  font-size: 22px;

  @media (max-width: 360px) {
    word-wrap: break-word;

    font-size: 20px;
  }
`;

export const CardBalance = styled.h5`
  font-size: 16px;
  line-break: none;
  white-space: nowrap;
  color: ${(props) => props.theme.primaryColor300};

  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

export const CardProfilePicWrapper = styled.span`
  width: 70px;
  height: 70px;
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

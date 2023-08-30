import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChildrenWrapper = styled.div`
  width: 100%;
  justify-content: center;
  height: calc(100vh - 75px);
  overflow-y: auto;
  position: relative;
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 5%;
  padding-bottom: 120px;
  margin: 0 auto;
  max-width: 1440px;
  position: relative;
`;

export const BalanceContainer = styled.div`
  position: fixed;
  padding: 10px 20px;
  border-radius: 7px;
  bottom: 25px;
  right: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor300};
  border: 2px solid ${(props) => props.theme.backgroundColor250};
  gap: 5px;
  z-index: 2;
  animation: appear 0.5s;

  @media (min-width: 2100px) {
    right: 22%;
  }

  @media (max-width: 1700px) {
    right: 10%;
  }

  @media (max-width: 1450px) {
    right: 5%;
  }
`;

export const BalanceTitle = styled.sup`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.primaryColor400};
`;

export const BalanceValue = styled.h3`
  font-size: 20px;
  color: ${(props) => props.theme.secondaryColor400};
`;


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.backgroundColor300};
  border-radius: 10px;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  background-color: ${(props) => props.theme.primaryColor100};
  color: ${(props) => props.theme.secondaryColor500};
  display: flex;
  gap: 2px;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const CardCompanyContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const CompanyPic = styled.div`
  width: 35px;
  height: 35px;
`;

export const CompanyStockPrice = styled.h3`
  font-size: 17px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
`;

export const CardBody = styled.div`
  background-color: ${(props) => props.theme.backgroundColor250};
  padding: 18px 20px;

  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const CardPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPriceText = styled.h3`
  font-size: 16px;
`;

export const CardQuantityRow = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const CardActionsContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

interface CardRankingProps {
  $delay: number;
}

export const RankingTitle = styled.h1`
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

export const RankingMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const CardRankingContainer = styled.div`
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

export const CardRanking = styled.div<CardRankingProps>`
  display: flex;
  border-radius: 7px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.backgroundColor300};
  animation: appearLeft ${(props) => props.$delay}s;
`;

export const CardRankingNumber = styled.span`
  height: 100%;
  background-color: ${(props) => props.theme.primaryColor100};
  display: flex;
  font-size: 25px;
  padding: 15px 0;
  justify-content: center;
  align-items: center;
  min-width: 50px;
`;

export const CardRankingUserInfo = styled.div`
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

export const CardRankingUsername = styled.h4`
  font-size: 22px;

  @media (max-width: 360px) {
    word-wrap: break-word;

    font-size: 20px;
  }
`;

export const CardRankingBalance = styled.h5`
  font-size: 16px;
  line-break: none;
  white-space: nowrap;
  color: ${(props) => props.theme.primaryColor300};

  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

export const CardRankingProfilePicWrapper = styled.span`
  width: 70px;
  height: 70px;
`;

export const CardRankingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

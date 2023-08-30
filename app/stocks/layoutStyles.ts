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

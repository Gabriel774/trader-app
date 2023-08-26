import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;

  @media (max-width: 1150px) {
    gap: 20px;
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 1150px) {
    gap: 20px;
  }

  @media (max-width: 520px) {
    gap: 20px;
    grid-template-columns: 1fr;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 25px 0;
  gap: 25px;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.backgroundColor300};
`;

export const CardHeader = styled.div`
  background-color: ${(props) => props.theme.primaryColor100};
  color: ${(props) => props.theme.secondaryColor500};
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  align-items: center;
`;

export const CardCompanyContainer = styled.div`
  width: 55px;
  height: 55px;
`;

export const CardTitle = styled.h2``;

export const CardBody = styled.div`
  background-color: ${(props) => props.theme.backgroundColor250};
  padding: 25px 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const CardPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPriceText = styled.h3`
  @media (max-width: 330px) {
    font-size: 16px;
  }
`;

export const CardQuantityRow = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

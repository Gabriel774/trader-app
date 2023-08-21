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

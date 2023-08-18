import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { styled } from "styled-components";

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

export const Username = styled.h1`
  text-align: center;
  font-size: 25px;
`;

export const Close = styled(AiFillCloseCircle)`
  cursor: pointer;
  justify-self: flex-end;
  font-size: 40px;

  color: ${(props) => props.theme.secondaryColor500};
`;

export const Return = styled(BsFillArrowLeftCircleFill)`
  cursor: pointer;
  font-size: 35px;
  justify-self: flex-start;
  color: ${(props) => props.theme.secondaryColor500};
`;

export const GapIcon = styled.span`
  width: 35px;
  height: 35px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  max-height: 70vh;
  overflow-y: scroll;
`;

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

export const OverviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

export const ErrorMessage = styled.span`
  margin: 5px;
  justify-self: flex-start;
  align-self: flex-start;
  color: ${(props) => props.theme.errorLight};
`;

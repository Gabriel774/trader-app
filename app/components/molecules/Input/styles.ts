import { styled } from "styled-components";

interface LabelProps {
  $active: boolean;
  $background?: string;
}
interface InputProps {
  $paddingRight: number;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 25px;
`;

export const InputStyled = styled.input<InputProps>`
  background-color: transparent;
  border: solid ${(props) => props.theme.secondaryColor600} 1px;
  border-radius: 7px;
  padding: 14px;
  padding-right: ${(props) => props.$paddingRight}px;
  outline: none;
  font-size: 18px;
  transition: all 0.2s;
  width: 100%;

  &:focus {
    border-color: ${(props) => props.theme.primaryColor500};
  }
`;

export const Label = styled.span<LabelProps>`
  color: ${(props) =>
    props.$active
      ? props.theme.secondaryColor600
      : props.theme.secondaryColor200};
  position: absolute;
  top: ${(props) => (props.$active ? "-10px" : "13px")};
  left: 13px;
  font-size: ${(props) => (props.$active ? "12px" : "18px")};
  background-color: ${(props) =>
    props.$background
      ? props.theme[props.$background]
      : props.theme.backgroundColor200};
  padding: 2px;
  user-select: none;
  cursor: text;
  transition: all 0.2s;
`;

export const IconContainer = styled.span<LabelProps>`
  color: ${(props) =>
    props.$active
      ? props.theme.secondaryColor600
      : props.theme.secondaryColor200};
  position: absolute;
  right: 15px;
  top: 15px;
  transition: all 0.2s;
  cursor: text;
`;

export const CheckBoxContainer = styled.span`
  margin-top: 12px;
  margin-left: 10px;
  cursor: pointer;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckBox = styled.input`
  accent-color: ${(props) => props.theme.primaryColor500};
  transition: all 0.2s;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const CheckBoxLabel = styled.span`
  user-select: none;
  margin-left: 6px;
`;

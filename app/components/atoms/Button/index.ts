import { styled } from "styled-components";

interface ButtonProps {
  $background: string;
  $hover?: string;
  $text: string;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme[props.$background]};
  color: ${(props) => props.theme[props.$text]};
  border: 0;
  border-radius: 7px;
  padding: 14px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: ${(props) =>
      props.theme[props.$hover ? props.$hover : props.$background]};
  }
  &:active {
    scale: 0.98;
  }
`;

export default Button;

import { styled } from "styled-components";

interface LoadingSvgProps {
  $color: string;
  $size: number;
}

export const LoadingSvg = styled.svg<LoadingSvgProps>`
  fill: ${(props) => props.theme[props.$color]};
  color: transparent;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  animation: spin 1s linear infinite;
`;

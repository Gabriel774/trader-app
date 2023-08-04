import { styled } from "styled-components";

export const InputFile = styled.input.attrs(() => ({
  type: "file",
}))`
  display: none;
`;

export const Label = styled.label`
  background-color: ${(props) => props.theme.secondaryColor400};
  color: ${(props) => props.theme.backgroundColor300};
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
    background-color: ${(props) => props.theme.secondaryColor600};
  }
  &:active {
    scale: 0.98;
  }
`;

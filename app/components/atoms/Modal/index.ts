import { styled } from "styled-components";

interface ModalProps {
  $active: boolean;
}

const Modal = styled.div<ModalProps>`
  background-color: ${(props) => props.theme.backgroundColorTransparentDark};
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: ${(props) => (props.$active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 3;
  animation: fade 0.2s;
`;

export default Modal;

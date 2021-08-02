import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width || "80%"};
  height: ${({ height }) => height || "80%"};
  z-index: 98;
  background: white;
  border-radius: ${({ radius }) => radius || "0"};
  display: ${({ active }) => (active ? "block" : "none")};
  padding: ${({ padding }) => padding || "10px"};
`;

import styled from "styled-components";

export const PopupStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 80;
  display: none;
  display: ${({ active }) => (active ? "block" : "none")};
`;

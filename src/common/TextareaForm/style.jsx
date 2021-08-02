import styled from "styled-components";
import { STYLES } from "../../constains";

export const TextareaStyled = styled.div`
  position: relative;
  width: 100%;
  height: 174px;
  overflow: hidden;
  textarea {
    border: solid 1px
      ${({ error }) => (error ? "rgb(196, 98, 98)" : STYLES.border)};
    width: 100%;
    height: 174px;
    padding: 10px;
    color: black;
    font-family: ${STYLES.golos};
    font-weight: 400;
    font-size: 16px;
    border-radius: 10px;
  }
`;

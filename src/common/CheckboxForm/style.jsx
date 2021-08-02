import styled from "styled-components";
import { STYLES } from "../../constains";

export const CheckboxStyled = styled.div`
  input {
    position: relative;
    width: 15px;
    height: 15px;
    &::after {
      content: "";
      top: 0;
      left: 0;
      border: solid 1px red;
      width: 90%;
      height: 89%;
      border-radius: 4px;
      z-index: 10;
      position: absolute;
      display: ${({ error }) => (error ? "block" : "none")};
    }
    label {
      color: ${({ error }) => (error ? "red" : STYLES.border)};
    }
  }
`;
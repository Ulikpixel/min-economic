import styled from "styled-components";
import { STYLES } from "../../constains";

export const RequestStyled = styled.section`
  .title {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      font-size: 25px;
    }
  }
  button {
    display: block;
  }
`;

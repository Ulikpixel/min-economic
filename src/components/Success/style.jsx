import { STYLES } from "../../constains";
import styled from "styled-components";

export const SuccessStyled = styled.section`
  .row {
    min-height: 87.8vh;
  }
  .block {
    text-align: center;
    max-width: 443px;
    .title {
      text-align: center;
      @media screen and (max-width: ${STYLES.breakpoints.xs}) {
        font-size: 25px;
      }
    }
  }
`;

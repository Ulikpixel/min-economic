import styled from "styled-components";
import { STYLES } from "../../constains";

export const StatisticsStyled = styled.section`
  min-height: 87.8vh;
  .container {
    position: relative;
  }
  .row {
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      align-items: center;
    }
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      flex-direction: column;
    }
  }
  .title {
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      font-size: 25px;
    }
  }
  .grafic {
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      width: 300px;
      max-height: 300px;
    }
  }
`;

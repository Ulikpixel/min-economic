import styled from "styled-components";
import { STYLES } from "../../../constains";

export const ListStyled = styled.div`
  max-width: 648px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    flex-direction: column;
  }
  .description {
    &__block {
      width: 50%;
      margin-bottom: 24px;
      @media screen and (max-width: ${STYLES.breakpoints.sm}) {
        width: 100%;
      }
      &--subtitle {
        font-weight: 400;
        font-size: 14px;
        color: #969696;
      }
      &--text {
        font-weight: 600;
        font-size: 16px;
        color: ${STYLES.blue};
      }
    }
  }
`;

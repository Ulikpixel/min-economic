import styled from "styled-components";
import { STYLES } from "../../constains";

export const AdminStyled = styled.section`
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      width: 100%;
      justify-content: flex-start;
    }
  }
  .btn {
    &__change {
      display: flex;
      align-items: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      svg {
        margin-left: 10px;
      }
    }
  }
  .title {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      font-size: 20px;
    }
  }
  .subtitle {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      font-size: 16px;
    }
  }
`;

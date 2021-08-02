import styled from "styled-components";
import { STYLES } from "../../constains";

export const HeaderStyled = styled.header`
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  .row {
    min-height: 64px;
    @media screen and (max-width: ${STYLES.breakpoints.xl}) {
      justify-content: space-between;
    }
  }
  .language {
    border-bottom: solid 1px ${STYLES.blue};
  }
  .burger {
    display: none;
    @media screen and (max-width: ${STYLES.breakpoints.xl}) {
      display: block;
    }
  }
`;

export const LogoutBtn = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;
  border: none;
  background: white;
  border-radius: 50px;
  width: 40px;
  height: 50px;
  z-index: 60;
  img {
    width: 25px;
    height: 25px;
  }
`;
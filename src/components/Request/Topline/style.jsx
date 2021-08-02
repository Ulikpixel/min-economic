import { STYLES } from "../../../constains";
import styled from "styled-components";

export const ToplineStyled = styled.div`
  display: flex;
  justify-content: ${({ role }) => (role ? "space-between" : "flex-start")};
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
  max-width: 500px;
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    flex-direction: column;
  }
  .title {
    margin-right: ${({ role }) => (role ? "0" : "20px")};
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      margin-right: 0;
    }
  }
  p {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      margin: 20px 0;
    }
  }
  button {
    display: flex;
    align-items: center;
    svg {
      margin-left: 12px;
    }
  }
`;

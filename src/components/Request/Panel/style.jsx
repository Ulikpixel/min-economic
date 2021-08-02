import { STYLES } from "../../../constains";
import styled from "styled-components";

export const PanelStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 500px;
  margin-bottom: 20px;
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    flex-direction: column;
  }
`;
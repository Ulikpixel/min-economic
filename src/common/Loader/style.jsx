import styled from "styled-components";
import { STYLES } from "../../constains";

export const LoaderStyled = styled.div`
  width: ${({ width }) => width || "150px"};
  height: ${({ height }) => height || "150px"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    width: 100px;
    height: 100px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
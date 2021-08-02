import styled from "styled-components";
import { STYLES } from "../../constains";

export const RequestStyled = styled.section`
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    text-align: center;
  }
  .field {
    margin: 10px 0;
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      flex-direction: column;
      justify-content: center;
    }
  }
  textarea {
    border: solid 2px ${STYLES.blue};
    border-radius: 20px;
    width: 60%;
    padding: 10px;
    height: 201px;
    font-weight: 600;
    font-size: 16px;
    color: ${STYLES.blue};
    margin-right: ${({ files }) => (files ? "32px" : "0")};
    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      color: ${STYLES.blue};
    }
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      width: ${({ files }) => (files ? "55%" : "90%")};
    }
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      width: 90%;
      margin-bottom: ${({ files }) => (files ? "20px" : 0)};
      margin-right: 0;
    }
  }
  .send {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      margin: 0 auto;
    }
  }
  .link {
    margin-top: 20px;
  }
`;

import styled from "styled-components";
import { STYLES } from "../../constains";
import { Link } from "react-router-dom";

export const RegisrtyStyled = styled.section`
  @media screen and (max-width: ${STYLES.breakpoints.sm}) {
    text-align: center;
  }
  .table {
    margin-bottom: 30px;
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      display: none;
    }
  }
  .slider {
    display: none;
    @media screen and (max-width: ${STYLES.breakpoints.lg}) {
      display: block;
    }
  }
  .pagination {
    width: 200px;
    margin: 0 auto;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 5px;
      &-thumb {
        background: ${STYLES.blue};
      }
    }
    p {
      &.active {
        color: ${STYLES.blue};
      }
    }
  }
`;

export const LinkPage = styled(Link)`
  cursor: pointer;
  margin: 0 0 0 20px;
  font-size: 18px;
  color: black;
  font-weight: 400;
  font-family: ${STYLES.golos};
  &.active {
    color: ${STYLES.blue};
  }
`;



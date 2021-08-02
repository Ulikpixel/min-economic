import styled from "styled-components";
import { STYLES } from "../../constains";

export const TableStyled = styled.table`
  font-family: ${STYLES.golos};
  width: 100%;
  border-collapse: collapse;
  border-radius: 15px;
  border-style: hidden;
  box-shadow: 0 0 0 2px ${STYLES.tableBorder};
  tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }
  tr {
    border: solid 2px ${STYLES.tableBorder};
  }
  thead {
    th {
      border: 1px solid #ddd;
      padding: 5px 7px;
      font-size: 14px;
      font-weight: 600;
      border: solid 2px ${STYLES.tableBorder};
    }
  }
  tbody {
    td {
      cursor: pointer;
      border: 1px solid #ddd;
      padding: 23px 10px;
      font-size: 14px;
      font-weight: 200;
      border: solid 2px ${STYLES.tableBorder};
      &:nth-last-child(1) {
        text-align: center;
        font-weight: 700;
      }
    }
    tr:hover {
      background-color: rgb(228, 228, 228);
    }
  }
`;

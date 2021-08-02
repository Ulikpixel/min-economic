import styled from "styled-components";
import { STYLES } from "../../../constains";

export const CartStyled = styled.div`
  border: solid 1px ${STYLES.tableBorder};
  max-width: 320px;
  min-height: 320px;
  margin: 0 auto 30px;
  border-radius: 10px;
  cursor: pointer;
  div {
    border-bottom: solid 1px $table-border;
    text-align: center;
    padding: 10px;
  }
  .header,
  .description,
  .index {
    border-bottom: solid 1px ${STYLES.tableBorder};
  }
  .description {
    font-size: 16px;
    font-weight: 200;
  }
  .header {
    color: ${STYLES.blue};
    font-weight: 600;
    font-size: 16px;
  }
  .status {
    border-bottom: none;
    color: ${({ color }) => color || "black"};
  }
`;

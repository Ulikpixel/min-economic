import { STYLES } from "../../../constains";
import styled from "styled-components";

export const ModalFormStyled = styled.div`
  text-align: center;
  .modal {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      width: 310px;
      height: 310px;
    }
  }
  .field {
    text-align: left;
  }
  .input-form, .select-form {
    margin: 0 0 20px;
  }
  .close {
    position: absolute;
    right: 15px;
    top: 10px;
  }
`;

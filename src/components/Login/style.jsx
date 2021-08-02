import styled from "styled-components";
import { STYLES } from "../../constains";

export const FormStyled = styled.form`
  .row {
    min-height: 500px;
  }
  .block {
    border: solid 2px ${STYLES.blue};
    width: 400px;
    padding: 35px 23px 61px;
    border-radius: 15px;
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      max-width: 400px;
    }
  }
  .input-form {
    margin-bottom: 30px;
    border: solid 1px ${STYLES.blue};
    border-radius: 10px;
    input {
      border: none;
    }
  }
  .btn {
    text-align: center;
  }
  .error {
    text-align: center;
    margin-top: 16px;
  }
  button::disabled {
    color: red;
  }
`;

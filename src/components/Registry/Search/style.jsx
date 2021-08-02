import styled from "styled-components";

export const FormStyled = styled.form`
  max-width: 640px;
  min-height: 46px;
  position: relative;
  margin-bottom: 15px;
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 23px;
    border: none;
    background: none;
  }
  input {
    border-radius: 33px;
    font-weight: 400;
    font-size: 13px;
    &::placeholder {
      font-size: 13px;
      font-weight: 400;
    }
  }
`;
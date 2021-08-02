import React from "react";
import { InputStyled } from "./style";

const InputForm = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <InputStyled error={hasError} className="input-form">
      <input type="text" {...input} {...props} />
    </InputStyled>
  );
};

export default InputForm;

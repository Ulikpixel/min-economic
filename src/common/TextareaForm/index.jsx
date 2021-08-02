import React from "react";
import { TextareaStyled } from "./style";

const TextareaForm = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <TextareaStyled error={hasError} className="textarea-form">
      <textarea cols="30" {...input} {...props} rows="10"></textarea>
    </TextareaStyled>
  );
};

export default TextareaForm;

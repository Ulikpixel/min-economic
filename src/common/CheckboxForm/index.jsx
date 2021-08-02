import React from "react";
import { Label } from "../../styledComponents";
import { STYLES } from "../../constains";
import { CheckboxStyled } from "./style";

const CheckboxForm = ({ meta, label, input, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <CheckboxStyled className="checkbox-form" error={hasError}>
      <Label color={hasError && STYLES.red}>
        <input type="checkbox" {...input} {...props} />
        {label}
      </Label>
    </CheckboxStyled>
  );
};

export default CheckboxForm;

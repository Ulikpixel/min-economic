import React from "react";
import Select from "react-select";
import { SelectStyled, styles } from "./style";

const SelectForm = ({
  input,
  options,
  name,
  placeholder,
  meta,
  defaultValue,
}) => {
  const hasError = meta.error && meta.touched;
  return (
    <SelectStyled className="select-form" error={hasError}>
      {hasError && <div className="select-error"></div>}
      <Select
        {...input}
        name={name}
        options={options}
        value={input.value.value}
        onChange={({ value }) => input.onChange(value)}
        onBlur={() => input.onBlur()}
        placeholder={<p className="select-form--placeholder">{placeholder}</p>}
        styles={styles}
        defaultValue={defaultValue}
        noOptionsMessage={() => "Ничего не найдено"}
      />
    </SelectStyled>
  );
};

export default SelectForm;

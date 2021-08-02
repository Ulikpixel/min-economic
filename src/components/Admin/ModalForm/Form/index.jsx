import React from "react";
import { Field, reduxForm } from "redux-form";
import { InputForm, SelectForm } from "../../../../common";
import { Button, Label, Row } from "../../../../styledComponents";
import { STYLES } from "../../../../constains";
import { changeSelect } from "../../../../utils";

const Form = ({ handleSubmit, type, content, select }) => {
  const typeSelect = select[type];
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <Label>Название</Label>
        <Field name="field" component={InputForm} />
        <Label>{content.select.title}</Label>
        <Field name="select" options={changeSelect(typeSelect)} component={SelectForm} />
      </div>
      <Row column>
        <Button
          color="white"
          margin="0 0 10px"
          bg={STYLES.blue}
          padding="9px 53px"
        >
          Добавить
        </Button>
        <Button
          color="white"
          bg={STYLES.red}
          bgHover={STYLES.redWhite}
          padding="9px 53px"
        >
          Удалить
        </Button>
      </Row>
    </form>
  );
};

const ReduxForm = reduxForm({
  form: "organ",
})(Form);

export default ReduxForm;

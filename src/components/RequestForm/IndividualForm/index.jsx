import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  validField,
  validFieldMin,
  validFieldMax,
  errorScroll,
  changeSelect,
} from "../../../utils";
import {
  InputForm,
  TextareaForm,
  SelectForm,
  FileForm,
  CheckboxForm,
  Condition,
} from "../../../common";
import {
  ECONOMIC,
  ROLES,
  CONDITIONS,
  OPTIONS,
  STYLES,
} from "../../../constains";
import FormRequest from "../FormStyles";
import { Button, Label } from "../../../styledComponents";

const minLength = validFieldMin(2);
const maxLengthInput = validFieldMax(30);
const maxLengthTextarea = validFieldMax(1000);

const Form = ({
  handleSubmit,
  routeRole,
  activity,
  region,
  organ,
  cause,
  subject,
}) => {
  return (
    <FormRequest onSubmit={handleSubmit}>
      <Label>Заявитель:</Label>
      <Field
        options={ROLES}
        component={SelectForm}
        name="applicantType"
        onChange={routeRole}
        defaultValue={ROLES[0]}
      />
      <Label>ФИО:</Label>
      <Field
        component={InputForm}
        name="fullname"
        validate={[validField, maxLengthInput, minLength]}
        placeholder="Введите ФИО"
      />
      <Label>Место работы:</Label>
      <Field
        component={InputForm}
        name="companyName"
        validate={[validField, maxLengthInput, minLength]}
        placeholder="Введите место работы"
      />
      <Label>Контакный телефон:</Label>
      <Field
        component={InputForm}
        name="telephone"
        type="tel"
        validate={[validField, maxLengthInput, minLength]}
        placeholder="Введите контактный телефон"
      />
      <Label>Электронная почта:</Label>
      <Field
        component={InputForm}
        name="email"
        validate={[validField, maxLengthInput, minLength]}
        placeholder="Введите электронную почту"
        type="email"
      />
      <Label>Тип субъекта предпринимательста:</Label>
      <Field
        name="subjectTypeId"
        component={SelectForm}
        options={changeSelect(subject)}
        validate={[validField]}
        placeholder="Выберите тип субъекта"
      />
      <Label>Отрасль и вид экономической деятельности:</Label>
      <Field
        name="economicActivityId"
        component={SelectForm}
        options={changeSelect(activity)}
        validate={[validField]}
        placeholder="Выберите вид экономической деятельности"
      />
      <Label>Оргнан к которому адресована заявка:</Label>
      <Field
        name="organId"
        component={SelectForm}
        options={changeSelect(organ)}
        validate={[validField]}
        placeholder="Выберите орган"
      />
      <Label>Регион осуществления предпринимательской деятельности:</Label>
      <Field
        name="regionId"
        component={SelectForm}
        options={changeSelect(region)}
        validate={[validField]}
        placeholder="Выберите регион"
      />
      <Label>Причина неблагоприятного фактора:</Label>
      <Field
        name="causeOfFactor"
        component={SelectForm}
        options={changeSelect(cause)}
        validate={[validField]}
        placeholder="Выберите тип неблагоприятного фактора"
      />
      <Label>Описание неблагоприятного фактора:</Label>
      <Field
        component={TextareaForm}
        name="problemOfDescription"
        validate={[validField, maxLengthTextarea, minLength]}
      />
      <Label>
        Каким образом и в какой период времени зафиксирован неблагоприятный
        фактор:
      </Label>
      <Field
        component={TextareaForm}
        name="descriptionDate"
        validate={[validField, maxLengthTextarea, minLength]}
      />
      <Label>Как и кем по вашему должна решится ваша проблема? </Label>
      <Field
        component={TextareaForm}
        name="clarification"
        validate={[validField, maxLengthTextarea, minLength]}
      />
      <Field component={FileForm} type="file" name="file" />
      <Condition data={CONDITIONS} />
      <div className="request-form--checkbox">
        <Field
          component={CheckboxForm}
          name="agreement"
          label="Принять соглашение"
        />
      </div>
      <Button bg={STYLES.blue} margin="0 auto" color="white">
        Подать жалобу
      </Button>
    </FormRequest>
  );
};

const IndividualForm = reduxForm({
  form: "individual",
  onSubmitFail: errorScroll,
})(Form);

export default IndividualForm;

import React from "react";
import { reduxForm, Field } from "redux-form";
import { InputForm } from "../../common";
import { Title, Label, Button, Row, Text } from "../../styledComponents";
import { STYLES } from "../../constains";
import { FormStyled } from "./style";
import { validFieldMin, validField } from "../../utils";

const minLength = validFieldMin(2);

const Form = ({ handleSubmit, error, isLogin }) => {
  return (
    <FormStyled onSubmit={handleSubmit}>
      <Row className="row" justify="center" align="center" padding="0 15px">
        <div className="block">
          <Title
            margin="0 0 20px"
            center
            color={STYLES.blue}
            weight="700"
            size="24px"
          >
            Авторизация
          </Title>
          <Label margin="0 0 0 5px">Логин</Label>
          <Field
            type="text"
            validate={[validField, minLength]}
            component={InputForm}
            placeholder="info@minecon.kg"
            name="username"
          />
          <Label margin="0 0 0 5px">Пароль</Label>
          <Field
            type="password"
            validate={[validField, minLength]}
            component={InputForm}
            placeholder="**************"
            name="password"
          />
          <div className="btn">
            <Button
              bg={STYLES.blue}
              color="white"
              padding="9px 69px"
              weight="700"
              size="16px"
              disable={isLogin}
            >
              Войти
            </Button>
          </div>
          {error && (
            <Text className="error" weight="700" size="16px" color={STYLES.red}>
              Неверный логин или пароль
            </Text>
          )}
        </div>
      </Row>
    </FormStyled>
  );
};

const Login = reduxForm({
  form: "login",
})(Form);

const FormLogin = ({ onSubmit, ...props }) => (
  <Login {...props} onSubmit={onSubmit} />
);

export default FormLogin;

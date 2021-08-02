import React from "react";
import { Login } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authActions";
import { useHistory } from "react-router-dom";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(login(data));
    history.push("/");
  };
  return <Login {...auth} onSubmit={onSubmit} />;
};

export default LoginContainer;

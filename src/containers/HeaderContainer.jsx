import React from "react";
import { Header } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { useHistory } from "react-router-dom";

const HeaderContainer = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  return <Header {...auth} logout={() => {
    dispatch(logout());
    history.push("/login");
  }} />;
};

export default HeaderContainer;

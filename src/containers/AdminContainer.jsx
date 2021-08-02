import { Admin } from "../components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { postNewField } from "../redux/actions/fieldsActions";
import { Loader } from "../common";

const AdminContainer = () => {
  const dispatch = useDispatch();
  const { fields, auth }  = useSelector(state => state);
  const sendNewField = (body, type) => {
    dispatch(postNewField(body, type));
  };

  if(auth.role !== 2) return <Redirect to="/login" />
  if(fields.isPostRequest) return <Loader />
  return <Admin select={fields.select}sendNewField={sendNewField} />;
};

export default AdminContainer;

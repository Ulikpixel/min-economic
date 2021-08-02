import React from "react";
import { Success } from "../components";
import { Loader } from "../common";
import { useSelector } from "react-redux";

const SuccessContainer = () => {
  const { isSend, isStatus } = useSelector(({ registry }) => registry);
  if (isSend || isStatus) return <Loader />;
  return <Success />;
};

export default SuccessContainer;

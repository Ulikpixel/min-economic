import { Registry } from "../components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRegistry, sortRegistry } from "../redux/actions/registryActions";

const RegistryContainer = () => {
  const dispatch = useDispatch();
  const { registry, auth, fields } = useSelector((state) => state);

  const dots = [];
  for (let i = 1; i <= registry.totalPage; i++) {
    dots.push(i);
  };

  return (
    <Registry
      {...registry}
      {...fields}
      {...auth}
      dots={dots}
      getRegistry={(page) => dispatch(getRegistry(page))}
      sortRegistry={(params) => dispatch(sortRegistry(params))}
    />
  );
};

export default RegistryContainer;

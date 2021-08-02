import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRequest, setStatusRequest, changeCause } from "../redux/actions/registryActions";
import { Request } from "../components";

const RequestContainer = () => {
  const dispatch = useDispatch();
  const { registry, auth } = useSelector((state) => state);

  return (
    <Request
      {...registry}
      {...registry.request}
      {...auth}
      getRequest={(id) => dispatch(getRequest(id))}
      postStatus={(body) => dispatch(setStatusRequest(body))}
      changeCause={(value) => dispatch(changeCause(value))}
    />
  );
};

export default RequestContainer;

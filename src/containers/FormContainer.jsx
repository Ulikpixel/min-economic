import { useDispatch, useSelector } from "react-redux";
import { RequestForm } from "../components";
import { postRequest } from "../redux/actions/registryActions";

const FormContainer = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields);
  return (
    <RequestForm
      {...fields}
      postRequest={(body) => dispatch(postRequest(body))}
    />
  );
};

export default FormContainer;

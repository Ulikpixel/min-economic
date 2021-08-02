import React, { useEffect } from 'react';
import { Home, } from './components';
import { Route } from "react-router-dom";
import {
  RegistryContainer, RequestContainer,
  SuccessContainer, LoginContainer,
  StatisticsContainer, HeaderContainer,
  AdminContainer, FormContainer
} from "./containers";
import { useDispatch, useSelector } from "react-redux";
import { getSelect } from "./redux/actions/fieldsActions";
import { getUser } from "./redux/actions/authActions";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(getUser());
    dispatch(getSelect("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjIiLCJpYXQiOjE2MjcyMTk2MzAsImV4cCI6MTYyNzMwNjAzMH0.9FV4r2ejCsnZGCPmuxbUmQXmmsLwcoavh0pOblUsK4rRwwIAknslVyeD542UuGJ7zr-qu_WjeH-ESJow2JIRyg"))
  }, []);
  return (
    <>
      <HeaderContainer />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/requestForm" component={FormContainer} />
        <Route path="/success/:status" component={SuccessContainer} />
        <Route path="/registry/:page" component={RegistryContainer} />
        <Route path="/request/:id" component={RequestContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/statistics" component={StatisticsContainer} />
        <Route path="/admin" component={AdminContainer} />
      </main>
    </>
  );
};

export default App;

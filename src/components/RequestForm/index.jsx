import React from "react";
import EntityForm from "./EntityForm";
import IndividualForm from "./IndividualForm";
import { STYLES } from "../../constains";
import { Route, useHistory } from "react-router-dom";
import { Container, Title, Row } from "../../styledComponents";
import { RequestStyled } from "./style";
import { Loader } from "../../common";

const RequestPage = ({ postRequest, isFetching, select }) => {
  const history = useHistory();

  const routeRole = (value) => {
    if (value === 1) {
      history.push("/requestForm/individual");
    } else {
      history.push("/requestForm");
    }
  };
  
  const sendRequest = (data) => {
    const body = {
      ...data,
      applicantType: data.applicantType ? data.applicantType : 2,
    };
    history.push("/success/consideration");
    postRequest(body);
  };
  
  if (isFetching) return <Loader />;
  return (
    <RequestStyled>
      <Container small padding="30px 15px">
        <Row column>
          <Title
            className="title"
            margin="0 0 20px"
            color={STYLES.blue}
            size="23px"
          >
            Жалоба о негативном факторе
          </Title>
          <Route
            path="/requestForm"
            exact
            render={() => (
              <EntityForm
                routeRole={routeRole}
                onSubmit={sendRequest}
                {...select}
              />
            )}
          />
          <Route
            path="/requestForm/individual"
            exact
            render={() => (
              <IndividualForm
                routeRole={routeRole}
                onSubmit={sendRequest}
                {...select}
              />
            )}
          />
        </Row>
      </Container>
    </RequestStyled>
  );
};

export default RequestPage;

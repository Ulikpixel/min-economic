import React from "react";
import successImg from "../../assets/images/icons/success.png";
import { useParams } from "react-router-dom";
import { Img, Container, Row } from "../../styledComponents";
import Status from "./Status";
import { SuccessStyled } from "./style";

const Success = () => {
  const { status } = useParams();
  return (
    <SuccessStyled>
      <Container>
        <Row className="row" justify="center" align="center">
          <div className="block">
            <Img
              src={successImg}
              alt="img/success"
              width="70px"
              height="70px"
              margin="0 0 15px"
            />
            <Status status={status} />
          </div>
        </Row>
      </Container>
    </SuccessStyled>
  );
};

export default Success;

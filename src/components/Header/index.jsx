import Navbar from "./Navbar";
import React, { useState } from "react";
import logo from "../../assets/images/icons/logo.png";
import { Popup, Burger } from "../../common";
import { Link, useHistory } from "react-router-dom";
import { STYLES } from "../../constains";
import { Container, Row, Img, Button } from "../../styledComponents";
import { HeaderStyled, LogoutBtn } from "./style";
import logoutImg from "../../assets/images/logout.png";

const Header = ({ role, logout, isAuth }) => {
  const [modal, setModal] = useState(false);
  const history = useHistory();

  const exitAccount = () => {
    logout();
    history.push("/login");
  };
  return (
    <HeaderStyled>
      <Container>
        <Row className="row" justify="space-around">
          <Link to="/">
            <Img src={logo} alt="logo" width="55px" height="55px" />
          </Link>
          <Navbar
            role={role}
            className={modal && "active"}
            setActive={setModal}
          />
          <Button
            size="21px"
            weight="400"
            color={STYLES.blue}
            border="none"
            className="language"
            padding="0"
            radius="0"
            bgHover="none"
          >
            KG
          </Button>
          <Burger active={modal} setActive={setModal} className="burger" />
          <Popup active={modal} setActive={setModal} />
        </Row>
        {isAuth && (
          <LogoutBtn onClick={exitAccount}>
            <img src={logoutImg} alt="logout" />
          </LogoutBtn>
        )}
      </Container>
    </HeaderStyled>
  );
};

export default Header;

import React from "react";
import {
  Text,
  Container,
  Title,
  Row,
  A,
  LinkButton,
} from "../../styledComponents";
import { STYLES } from "../../constains";
import { HomeStyled } from "./style";

const Home = () => {
  const links = [
    {
      text: "Министерство экономики и финансов Кыргызской Республики",
      link: "/",
    },
    { text: "Правительство Кыргызской Республики", link: "/" },
    { text: "Бизнес-омбудсмен Кыргызской Республики", link: "/" },
  ];
  return (
    <HomeStyled>
      <Container className="container">
        <div className="content">
          <Title className="title" size="35px" weight="700" color="white">
            РАЗВИТЫЙ ПРЕДПРИНИМАТЕЛЬ – СИЛЬНОЕ ГОСУДАРСТВО
          </Title>
          <Text className="text" color="white" size="14px" weight="600">
            АВТОМАТИЗИРОВАННЫЙ ЭЛЕКТРОННЫЙ РЕЕСТР ФАКТОРОВ, НЕБЛАГОПРИЯТНО
            ВЛИЯЮЩИХ НА ЭКОНОМИЧЕСКУЮ ДЕЯТЕЛЬНОСТЬ СУБЪЕКТОВ ПРЕДПРИНИМАТЕЛЬСТВА
            В КЫРГЫЗСКОЙ РЕСПУБЛИКЕ И ПРИНЯТИЯ МЕР ПО ИХ РЕШЕНИЮ
          </Text>
          <LinkButton
            to="/requestForm"
            weight="700"
            size="15px"
            padding="17px 57px"
          >
            Подать заявку
          </LinkButton>
        </div>
        <Row className="row" column wrap>
          {links.map(({ text, link }, i) => (
            <div className="box" key={i}>
              <A href={link} size="16px" weight="700" color={STYLES.blue}>
                {text}
              </A>
            </div>
          ))}
        </Row>
      </Container>
    </HomeStyled>
  );
};

export default Home;

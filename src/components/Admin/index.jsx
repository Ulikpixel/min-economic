import React, { useState } from "react";
import { Row, Container } from "../../styledComponents";
import Section from "./Section";
import { Popup } from "../../common";
import ModalForm from "./ModalForm";
import { AdminStyled } from "./style";

const Admin = ({ select, sendNewField }) => {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("organ");
  const sections = [
    {
      title: "Добавить новый гос.орган:",
      text: "Налоговая",
      route: "organ",
    },
    {
      title: "Добавить новый регион:",
      text: "Чуйский регион",
      route: "region",
    },
    {
      title: "Добавить отрасль деятельности:",
      text: "Отрасль деятельности",
      route: "activity",
    },
  ];
  const modalContent = [
    {
      title: "Новый гос.орган",
      select: { type: "organ", title: "Орган" },
    },
    {
      title: "Новый регион",
      select: { type: "region", title: "Регион" },
    },
    {
      title: "Новая отрасль деятельности",
      select: { type: "activity", title: "Отрасль деятельности" } },
  ];
  return (
    <AdminStyled>
      <Container padding="15px">
        <Row column justify="center">
          {sections.map((item, i) => (
            <Section {...item} key={i} setModal={setModal} setType={setType} />
          ))}
        </Row>
        <ModalForm
          select={select}
          content={modalContent.filter((item) => item.select.type === type)[0]}
          modal={modal}
          setModal={setModal}
          type={type}
          sendNewField={sendNewField}
        />
        <Popup active={modal} setActive={setModal} />
      </Container>
    </AdminStyled>
  );
};

export default Admin;

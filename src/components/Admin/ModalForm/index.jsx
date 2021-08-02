import React from "react";
import { Modal } from "../../../common";
import { Text, Button } from "../../../styledComponents";
import { STYLES } from "../../../constains";
import { ModalFormStyled } from "./style";
import Form from "./Form";

const ModalForm = ({ modal, setModal, select, content, type, sendNewField }) => {
  const addNewField = ({ field }) => {
    setModal(false);
    sendNewField({ title: field }, content.select.type);
  };
  return (
    <ModalFormStyled>
      <Modal
        width="436px"
        height="386px"
        active={modal}
        setActive={setModal}
        radius="20px"
        className="modal"
        padding="35px 23px"
      >
        <Text className="title" color={STYLES.blue} weight="bold" size="23px">
         {content.title}
        </Text>
        <Form select={select} onSubmit={addNewField} content={content} type={type} />
        <Button
          border="none"
          padding="0"
          bg="none"
          bgHover="none"
          className="close"
          onClick={() => setModal(false)}
          size="20px"
        >
          &#10006;
        </Button>
      </Modal>
    </ModalFormStyled>
  );
};

export default ModalForm;

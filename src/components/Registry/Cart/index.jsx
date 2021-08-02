import React from "react";
import { useHistory } from "react-router-dom";
import { CartStyled } from "./style";
import { getStatus } from "../../../utils";

const Cart = ({
  causeOfFactor,
  organ,
  region,
  economicActivity,
  id,
  fullname,
  status,
}) => {
  const history = useHistory();

  return (
    <CartStyled
      onClick={() => history.push(`/request/${id}`)}
      color={getStatus("В обработке")}
    >
      <div className="index">
        <p>№{id}</p>
      </div>
      <div className="header">
        <p>Неблагоприятный фактор</p>
      </div>
      <div className="description">
        <p>{causeOfFactor.title}</p>
      </div>
      <div className="header">
        <p>
          Субъекты/Ассоциация субъектов предпринимательства, на которую влияет
          неблагоприятный фактор
        </p>
      </div>
      <div className="description">
        <p>{fullname}</p>
      </div>
      <div className="header">
        <p>Отрасль экономической деятельности</p>
      </div>
      <div className="description">
        <p>{economicActivity.title}</p>
      </div>
      <div className="header">
        <p>Область (г. Бишкек/Ош)</p>
      </div>
      <div className="description">
        <p>{region.title}</p>
      </div>
      <div className="header">
        <p>Ответственный государственный орган</p>
      </div>
      <div className="description">
        <p>{organ.title}</p>
      </div>
      <div className="header">
        <p>Статус решения Неблагоприятного фактора</p>
      </div>
      <div className={"status + " + getStatus("В обработке")}>
        <p>{status.title}</p>
      </div>
    </CartStyled>
  );
};

export default Cart;

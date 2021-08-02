import React from "react";
import { ListStyled } from "./style";

const List = ({ request }) => {
  return (
    <ListStyled className="description">
      {request?.fullname && (
        <div className="description__block">
          <p className="description__block--subtitle">Имя заявителя:</p>
          <p className="description__block--text">{request?.fullname}</p>
        </div>
      )}
      <div className="description__block">
        <p className="description__block--subtitle">
          Отрасль и вид экономической деятельности:
        </p>
       <p className="description__block--text">{request?.economicActivity?.title}</p>
      </div>
      {request?.inn?.nameCompany && (
        <div className="description__block">
          <p className="description__block--subtitle">Название компании:</p>
          <p className="description__block--text">{request?.inn?.nameCompany}</p>
        </div>
      )}
      <div className="description__block">
        <p className="description__block--subtitle">Регион:</p>
        <p className="description__block--text">{request?.region?.title}</p>
      </div>
      {request?.inn?.inn && (
        <div className="description__block">
          <p className="description__block--subtitle">ИНН:</p>
          <p className="description__block--text">{request?.inn?.inn}</p>
        </div>
      )}
      <div className="description__block">
        <p className="description__block--subtitle">Орган:</p>
        <p className="description__block--text">{request?.organ?.title}</p>
      </div>
      <div className="description__block">
        <p className="description__block--subtitle">Тип субъекта:</p>
        <p className="description__block--text">{request?.empowerment || "Неизвестно"}</p>
      </div>
      <div className="description__block">
        <p className="description__block--subtitle">статус:</p>
        <p className="description__block--text">{request?.status}</p>
      </div>
    </ListStyled>
  );
};

export default List;

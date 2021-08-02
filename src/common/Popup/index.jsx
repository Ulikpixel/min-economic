import React from "react";
import { PopupStyled } from "./style";

const Popup = ({ active, setActive, className }) => {
  return (
    <PopupStyled
      onClick={() => setActive(false)}
      active={active}
      className={className}
    ></PopupStyled>
  );
};

export default Popup;

import React from "react";
import { BurgerStyled } from "./style";

const Burger = ({ active, setActive, className }) => {
  return (
    <BurgerStyled
      active={active}
      className={className}
      onClick={() => setActive(!active)}
    >
      <span></span>
    </BurgerStyled>
  );
};

export default Burger;

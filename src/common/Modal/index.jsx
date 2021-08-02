import React from "react";
import { ModalStyled } from "./style";

const Modal = ({
  children,
  active,
  setActive,
  width,
  height,
  radius,
  className,
  padding,
}) => {
  const closeModal = () => {
    setActive(false);
  };
  return (
    <ModalStyled
      padding={padding}
      active={active}
      className={className}
      width={width}
      height={height}
      radius={radius}
    >
      {children}
    </ModalStyled>
  );
};

export default Modal;

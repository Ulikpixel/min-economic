import React from "react";
import { LoaderStyled } from "./style";

const Loader = ({ width, height, className }) => {
  return (
    <LoaderStyled
      width={width}
      height={height}
      className={"loader " + className}
    >
      <img
        src="https://thumbs.gfycat.com/DefinitiveJaggedDalmatian-max-1mb.gif"
        alt="loader"
      />
    </LoaderStyled>
  );
};

export default Loader;

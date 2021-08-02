import React from "react";
import { Text } from "../../styledComponents";
import { ConditionStyled } from "./style";

const Condition = ({ data }) => {
  return (
    <ConditionStyled className="condition">
      {data.map((item, i) => (
        <Text key={i}>{item}</Text>
      ))}
    </ConditionStyled>
  );
};

export default Condition;

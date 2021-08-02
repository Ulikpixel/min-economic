import { Link } from "react-router-dom";
import styled from "styled-components";
import { STYLES } from "../constains";

const LinkButton = styled(Link)`
  margin: ${({ margin }) => margin || "0"};
  color: ${({ color }) => color || "white"};
  font-weight: ${({ weight }) => weight || "400"};
  font-size: ${({ size }) => size || "16px"};
  background: ${({ bg }) => bg || STYLES.blue};
  border-radius: ${({ radius }) => radius || "20px"};
  padding: ${({ padding }) => padding || "11px 30px"};
`;

export default LinkButton;

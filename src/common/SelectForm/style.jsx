import styled from "styled-components";
import { STYLES } from "../../constains";

export const styles = {
  option: (provided, state) => ({
    ...provided,
    fontWeight: "400",
    fontFamily: STYLES.golos,
    color: STYLES.blue,
    backgroundColor: state.data.color,
    fontSize: "16px",
    borderBottom: "solid 1px #C4C4C4",
  }),
  control: () => ({
    border: "none",
    borderRadius: "10px",
    height: "41px",
    width: "100%",
    display: "flex",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: STYLES.golos,
    color: STYLES.blue,
  }),
  menu: (provided) => ({
    ...provided,
    top: "35px"
  }),
};

export const SelectStyled = styled.div`
  width: 100%;
  border: solid 1px ${({ error }) => (error ? STYLES.red : STYLES.border)};
  border-radius: 10px;
  p {
    font-size: 16px;
    font-weight: 400;
    font-family: ${STYLES.golos};
    color: ${({ error }) => (error ? STYLES.red : STYLES.border)};
    margin-left: 5px;
  }
`;
import { STYLES } from "../../constains";
import styled from "styled-components";

export const FileStyled = styled.div`
  width: 100%;
  border: dotted ${STYLES.blue} 2px;
  border-radius: 15px;
  min-height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  input {
    height: 100%;
    width: 100%;
    padding: 10px 20px;
    opacity: 0;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
  }
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

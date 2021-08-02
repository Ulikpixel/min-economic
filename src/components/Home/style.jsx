import styled from "styled-components";
import bg from "../../assets/images/home/home-bg.jpg";
import { STYLES } from "../../constains";

export const HomeStyled = styled.section`
  background-size: cover;
  background-image: url(${bg});
  background-position: center;
  width: 100%;
  min-height: 90.3vh;
  padding: 90px 0 50px;
  position: relative;
  .container {
    @media screen and (max-width: ${STYLES.breakpoints.xl}) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .title {
    @media screen and (max-width: ${STYLES.breakpoints.md}) {
      font-size: 28px;
    }
  }
  .text {
    margin: 20px 0 30px;
    @media screen and (max-width: ${STYLES.breakpoints.md}) {
      font-size: 14px;
    }
  }
  .content {
    max-width: 901px;
  }
  .row {
    position: absolute;
    bottom: 0;
    right: 10px;
    content: "";
    @media screen and (max-width: ${STYLES.breakpoints.xl}) {
      flex-direction: row;
      right: 0;
      width: 100%;
      position: relative;
      top: 50px;
    }
  }
  .content {
    @media screen and (max-width: ${STYLES.breakpoints.md}) {
      text-align: center;
    }
  }
  .box {
    width: 326px;
    background: white;
    min-height: 74px;
    border-radius: 11px;
    margin-bottom: 35px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    transition: 0.3s;
    &:hover {
      background: ${STYLES.blue};
      transition: 0.3s;
      a {
        color: white;
      }
    }
    @media screen and (max-width: ${STYLES.breakpoints.xl}) {
      margin: 0 auto 20px;
    }
  }
`;

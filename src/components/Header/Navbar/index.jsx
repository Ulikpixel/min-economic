import React from "react";
import { NavLink } from "react-router-dom";
import { LINKS } from "../../../constains";
import { Row } from "../../../styledComponents";
import { NavbarStyled } from "./style";

const Navbar = ({ setActive, className, role }) => {
  return (
    <NavbarStyled className={className}>
      <ul className="list">
        <Row className="row">
          {LINKS.map(({ text, route, icon }, i) => {
            return (
              <li
                key={text}
                onClick={() => setActive(false)}
                className={
                  (i === 4 && role <= 0) || (i === 5 && role <= 1)
                    ? "item hide"
                    : "item"
                }
              >
                <NavLink to={route} exact className="link">
                  {icon && <span className="icon">{icon()}</span>}
                  {text}
                </NavLink>
              </li>
            );
          })}
        </Row>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;

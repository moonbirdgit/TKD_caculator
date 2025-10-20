import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import { ReactComponent as Correct } from "./correct.svg";
import { ReactComponent as Sparkle } from "./sparkle.svg";
import { ReactComponent as Bar } from "./bar.svg";
function Nav() {
  return (
    <nav>
      <Link to="/">
        <Correct />
        正確
      </Link>
      <Link to="/other">
        <Sparkle />
        表現
      </Link>
      <Link to="/total">
        <Bar />
        結果
      </Link>
    </nav>
  );
}

export default Nav;

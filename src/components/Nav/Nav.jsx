// Nav.jsx (修改後，維持 function 寫法)

import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import { ReactComponent as Correct } from "./correct.svg";
import { ReactComponent as Sparkle } from "./sparkle.svg";
import { ReactComponent as Bar } from "./bar.svg";

// 我們將原本的 function component 寫法，放到 React.forwardRef 的參數中
// 並且給這個 function 一個名字 (Nav)，這樣在開發者工具中更容易辨識
const Nav = React.forwardRef(function Nav(props, ref) {
  return (
    // 將接收到的 ref 附加到 <nav> 元素上
    <nav ref={ref}>
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
});

export default Nav;

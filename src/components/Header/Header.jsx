import React, { useState } from "react";
import "./style.scss";
import { ReactComponent as Info } from "./info.svg";

function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

const info = {
  1: "左右滑動即可換頁。",
  2: "如果未出現下方導覽列，請向上滑動。",
  3: "點擊重置按鈕將時間及分數重置。",
};

function Header({ title }) {
  const [showPopup, setShowPopup] = useState(false);
  // 👇 1. 新增一個 state 來儲存隨機選出的提示文字
  const [randomTip, setRandomTip] = useState("");

  const handleIconClick = () => {
    // 👇 2. 撰寫點擊圖示時的處理邏輯
    const tipCount = Object.keys(info).length; // 取得提示的總數量
    const randomKey = getRandomInt(tipCount); // 取得一個隨機的 key (例如 1, 2, 或 3)
    const selectedTip = info[randomKey]; // 根據 randomKey 找出對應的提示文字

    setRandomTip(selectedTip); // 將選出的提示存到 state 中
    setShowPopup(true); // 打開彈出視窗
  };

  return (
    <>
      <div className="header">
        <p>{title}</p>
        {/* 👇 3. 將 onClick 事件綁定到新的處理函式 */}
        <Info className="info-icon" onClick={handleIconClick} />
      </div>

      {showPopup && (
        <div
          className="popup"
          // 這個「點擊外部關閉」的邏輯非常好，保持原樣
          onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}
        >
          <div className="popup-content">
            {/* 👇 4. 將 p 標籤的內容替換為我們儲存的 randomTip state */}
            <p>{randomTip}</p>
            <button onClick={() => setShowPopup(false)}>關閉</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

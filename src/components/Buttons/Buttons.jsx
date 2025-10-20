import React from "react";
import "./button.scss";

// 接收來自父元件的 onScoreChange prop，這是一個函式
function Buttons({ onScoreChange }) {
  // 我們將按鈕的資料定義成一個陣列，方便管理
  const buttonData = [
    { label: "-0.6", value: -0.6 }, // 左上
    { label: "+0", value: 0 }, // 右上
    { label: "-0.1", value: -0.1 }, // 左下 (為了順時鐘，把 -0.1 放這裡)
    { label: "-0.3", value: -0.3 }, // 右下
  ];

  const plusButton = [
    { label: "+0.1", value: +0.1 },
    { label: "+0.3", value: +0.3 },
  ];

  const handleButtonClick = (value) => {
    onScoreChange(value);
  };

  return (
    <div className="buttons-grid">
      {/* 使用 map 來動態生成按鈕 */}
      {buttonData.map((button) => (
        <button
          key={button.label}
          className="score-button"
          onClick={() => handleButtonClick(button.value)}
        >
          {button.label}
        </button>
      ))}
      <div></div>
      <div className="plus">
        {plusButton.map((button) => (
          <button
            key={button.label}
            className="score-button-plus"
            onClick={() => handleButtonClick(button.value)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Buttons;

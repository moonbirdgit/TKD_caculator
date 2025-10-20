import React from "react";
import "./list.scss";
const nameMapping = {
  power: "力量與速度",
  time: "時間與節奏",
  spirit: "精神表現",
};

// onMultiplierChange 是從 App.js 一路傳下來的函式
function List({ correctScore, multipliers, time }) {
  // 使用 Object.entries 將物件轉換為 [key, value] 陣列以便 map
  const multiplierItems = Object.entries(multipliers);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  };
  const total =
    multipliers.power + multipliers.time + multipliers.spirit + correctScore;
  return (
    <div className="list-container">
      <div className="list-item">
        <span className="item-name">正確性</span>
        <p>{correctScore.toFixed(1)}</p>
      </div>
      {multiplierItems.map(([key, value]) => (
        <div className="list-item" key={key}>
          <span className="item-name">{nameMapping[key] || key}</span>
          <p>{value.toFixed(1)}</p>
        </div>
      ))}
      <div className="list-item">
        <span className="item-name">總分</span>
        <p>{total.toFixed(1)}</p>
      </div>
      <div className="list-item">
        <span className="item-name">本次時長</span>
        <p>{formatTime(time)}</p>
      </div>
    </div>
  );
}
export default List;

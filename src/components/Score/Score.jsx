import React from "react";
import "./score.scss";

// 接收來自父元件的 score prop
function Score({ score }) {
  return (
    <div className="score-container">
      <p className="score-display">{score.toFixed(1)}</p>
    </div>
  );
}

export default Score;

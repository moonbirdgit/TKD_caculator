import React from "react";
import "./many.scss";

const multiplierCategories = [
  { name: "完美", values: [2.0] },
  { name: "優良", values: [1.9, 1.8, 1.7] },
  { name: "良好", values: [1.6, 1.5, 1.4] },
  { name: "普通", values: [1.3, 1.2, 1.1] },
  { name: "不好", values: [1.0, 0.9, 0.8] },
  { name: "很差", values: [0.7, 0.6, 0.5] },
];

// 接收新的 props: name, selectedMultiplier, onSelectMultiplier
function Many({ name, selectedMultiplier, onSelectMultiplier }) {
  const calculatedResult = selectedMultiplier;

  return (
    <div className="many-container">
      <div className="many-score-section">
        <h6>{name}</h6>
        <p className="many-score-value">{calculatedResult.toFixed(1)}</p>
      </div>
      <div className="many-list-section">
        {multiplierCategories.map((category) => (
          <div key={category.name} className="category-block">
            <h4 className="category-title">{category.name}</h4>
            <div className="category-values">
              {category.values.map((multiplier) => (
                <button
                  key={multiplier}
                  // `selectedMultiplier` 現在是 prop
                  className={`many-button ${
                    selectedMultiplier === multiplier ? "selected" : ""
                  }`}
                  // 點擊時呼叫從 prop 傳入的函式
                  onClick={() => onSelectMultiplier(multiplier)}
                >
                  {multiplier.toFixed(1)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Many;

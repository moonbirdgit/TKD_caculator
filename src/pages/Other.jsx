import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Many from "../components/Many/Many";
import Preview from "../components/Preview/Preview";
function Other({ correctScore, multipliers, onMultiplierChange }) {
  let perScore = multipliers.power + multipliers.time + multipliers.spirit;
  return (
    <div className="other pages">
      <Header title="表現性評分" />

      <Many
        name="速度與力量"
        selectedMultiplier={multipliers.power}
        onSelectMultiplier={(value) => onMultiplierChange("power", value)}
      />
      <Many
        name="節奏與時間"
        selectedMultiplier={multipliers.time}
        onSelectMultiplier={(value) => onMultiplierChange("time", value)}
      />
      <Many
        name="精神表現"
        selectedMultiplier={multipliers.spirit}
        onSelectMultiplier={(value) => onMultiplierChange("spirit", value)}
      />
      <Preview
        correctScore={correctScore.toFixed(1)}
        perScore={perScore.toFixed(1)}
        total={(correctScore + perScore).toFixed(1)}
      />
      <Nav />
    </div>
  );
}

export default Other;

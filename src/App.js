import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import ReactGA from "react-ga4";
// 👇 1. 將初始狀態定義為常數，方便重置時使用
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
const INITIAL_CORRECT_SCORE = 4.0;
const INITIAL_MULTIPLIERS = {
  power: 1.0,
  time: 1.0,
  spirit: 1.0,
};

function App() {
  useEffect(() => {
    // 只有當 ID 存在時才初始化
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      console.log("Google Analytics initialized with ID:", GA_MEASUREMENT_ID);
    } else {
      console.warn("Google Analytics Measurement ID is not defined.");
    }
  }, []);
  const [correctScore, setBaseScore] = useState(INITIAL_CORRECT_SCORE);
  const [multipliers, setMultipliers] = useState(INITIAL_MULTIPLIERS);
  const [time, setTime] = useState(0);
  const handleBaseScoreChange = (value) => {
    setBaseScore((prevScore) => {
      let newScore = prevScore + value;
      if (newScore > 4.0) newScore = 4.0;
      if (newScore < 0.0) newScore = 0.0;
      return newScore;
    });
  };

  const handleMultiplierChange = (itemName, newMultiplier) => {
    setMultipliers((prevMultipliers) => ({
      ...prevMultipliers,
      [itemName]: newMultiplier,
    }));
  };

  // 👇 2. 建立一個重置所有 state 的函式
  const handleResetAll = () => {
    setBaseScore(INITIAL_CORRECT_SCORE);
    setMultipliers(INITIAL_MULTIPLIERS);
    // 如果未來還有其他 state，也在這裡一起重置
    console.log("All scores have been reset!");
  };

  const totalScore =
    correctScore + multipliers.power + multipliers.time + multipliers.spirit;

  return (
    <div className="App">
      <BrowserRouter>
        {/* 👇 3. 將重置函式作為 prop 傳遞下去 */}
        <AnimatedRoutes
          correctScore={correctScore}
          handleBaseScoreChange={handleBaseScoreChange}
          multipliers={multipliers}
          handleMultiplierChange={handleMultiplierChange}
          totalScore={totalScore}
          onResetAll={handleResetAll} // 新增這一行
          time={time}
          setTime={setTime}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

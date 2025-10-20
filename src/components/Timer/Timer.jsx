import React, { useState, useEffect } from "react";
import "./style.scss";

// 動畫持續時間 (毫秒)，這個值必須和 SCSS 中的動畫時間一致
const ANIMATION_DURATION = 400;

function Timer({ onResetAll, time, setTime }) {
  const [isActive, setIsActive] = useState(false);

  // 👇 1. 用一個物件 state 來分別控制兩個按鈕的動畫
  const [buttonAnimation, setButtonAnimation] = useState({
    reset: false,
    startPause: false,
  });

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  // 👇 2. 建立一個可重用的函式來觸發動畫
  const triggerAnimation = (buttonName) => {
    // 將對應按鈕的 state 設為 true，觸發 class 添加
    setButtonAnimation((prev) => ({ ...prev, [buttonName]: true }));

    // 在動畫結束後，將 state 設回 false，以便下次點擊能再次觸發
    setTimeout(() => {
      setButtonAnimation((prev) => ({ ...prev, [buttonName]: false }));
    }, ANIMATION_DURATION);
  };

  const handleStartPause = () => {
    setIsActive(!isActive);
    triggerAnimation("startPause"); // 觸發「開始/結束」按鈕的動畫
  };

  const handleReset = () => {
    setTime(0);
    onResetAll();
    setIsActive(false);
    triggerAnimation("reset"); // 觸發「重置」按鈕的動畫
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  };

  return (
    <div className="timer">
      <div className="box">
        <div className="time-display">{formatTime()}</div>
        <div className="btns">
          {/* 👇 3. 根據 state 動態綁定 class */}
          <button
            onClick={handleReset}
            className={buttonAnimation.reset ? "animate-click" : ""}
          >
            重置
          </button>
          <button
            onClick={handleStartPause}
            className={buttonAnimation.startPause ? "animate-click" : ""}
          >
            {isActive ? "結束" : "開始"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;

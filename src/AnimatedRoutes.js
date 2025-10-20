import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion } from "framer-motion";

// 引入你的頁面組件
import Correct from "./pages/Correct";
import Other from "./pages/Other";
import Total from "./pages/Total";

import usePageTracking from "../hooks/usePageTracking";
// 將你的 App 組件中的 state 和 handlers 傳遞進來

const AnimatedRoutes = ({
  correctScore,
  handleBaseScoreChange,
  multipliers,
  handleMultiplierChange,
  onResetAll,
  time,
  setTime,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  usePageTracking();
  // 定義你的路由順序
  const routesOrder = ["/", "/other", "/total"];
  const currentIndex = routesOrder.indexOf(location.pathname);

  // 使用 react-swipeable 來處理滑動事件
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < routesOrder.length - 1) {
        navigate(routesOrder[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        navigate(routesOrder[currentIndex - 1]);
      }
    },
    trackMouse: true, // 讓滑鼠拖曳也能觸發
  });

  // 定義動畫效果
  const slideAnimation = {
    initial: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    }),
  };

  // 取得滑動方向，用來決定動畫是從左還是右進來
  // 我們可以簡單地用索引來判斷
  const [prevIndex, setPrevIndex] = React.useState(currentIndex);
  React.useEffect(() => {
    setPrevIndex(currentIndex);
  }, [currentIndex]);
  const direction = currentIndex > prevIndex ? -1 : 1;

  return (
    // 將 swipe handlers 綁定到這個 div 上
    <div
      {...handlers}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                key="/"
                custom={direction}
                variants={slideAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Correct
                  score={correctScore}
                  onScoreChange={handleBaseScoreChange}
                  onResetAll={onResetAll}
                  time={time}
                  setTime={setTime}
                />
              </motion.div>
            }
          />
          <Route
            path="/other"
            element={
              <motion.div
                key="/other"
                custom={direction}
                variants={slideAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Other
                  correctScore={correctScore}
                  multipliers={multipliers}
                  onMultiplierChange={handleMultiplierChange}
                />
              </motion.div>
            }
          />
          <Route
            path="/total"
            element={
              <motion.div
                key="/total"
                custom={direction}
                variants={slideAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Total
                  correctScore={correctScore}
                  multipliers={multipliers}
                  time={time}
                />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;

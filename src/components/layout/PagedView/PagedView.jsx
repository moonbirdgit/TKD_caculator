import React, { useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ROUTES } from "../../../constants/layout";
import Correct from "../../../pages/Correct";
import Other from "../../../pages/Other";
import Total from "../../../pages/Total";
import styles from "./PagedView.module.scss";

const spring = { type: "spring", stiffness: 320, damping: 34 };

const slideVariants = {
  enter: (direction) => ({ x: direction >= 0 ? "100%" : "-100%" }),
  center: { x: "0%", transition: spring },
  exit: (direction) => ({
    x: direction >= 0 ? "-100%" : "100%",
    transition: spring,
  }),
};

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

// 手機 / 平板：一次顯示一頁，左右滑動或點分頁列切換
export default function PagedView() {
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const index = Math.max(
    0,
    ROUTES.findIndex((route) => route.path === location.pathname)
  );

  // 依前後頁面索引決定滑入方向（在 render 中推導，避免多一次 effect）
  const [nav, setNav] = useState({ index, direction: 0 });
  if (nav.index !== index) {
    setNav({ index, direction: index > nav.index ? 1 : -1 });
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < ROUTES.length - 1) navigate(ROUTES[index + 1].path);
    },
    onSwipedRight: () => {
      if (index > 0) navigate(ROUTES[index - 1].path);
    },
    delta: 60,
    trackMouse: false,
  });

  return (
    <div className={styles.viewport} {...swipeHandlers}>
      <AnimatePresence initial={false} custom={nav.direction}>
        <motion.div
          key={location.pathname}
          className={styles.page}
          custom={nav.direction}
          variants={reduceMotion ? fadeVariants : slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/" element={<Correct />} />
            <Route path="/other" element={<Other />} />
            <Route path="/total" element={<Total />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

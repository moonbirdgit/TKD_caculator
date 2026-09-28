import React, { useEffect, useRef } from "react";
import Button, { IconButton } from "../ui/Button/Button";
import { CloseIcon } from "../ui/Icons";
import styles from "./InfoDialog.module.scss";

const TIPS = [
  "手機與平板上左右滑動即可換頁；大螢幕會同時顯示三個區塊。",
  "正確性從 4.0 起算，點擊按鈕扣分，按錯可用「加回」修正。",
  "表現性共三項，每項 0.5 – 2.0，直接點選對應分數。",
  "計時器在切換頁面時會持續計時。",
  "連按兩次「重置」會將時間及所有分數歸零。",
];

// 使用原生 <dialog>：內建焦點鎖定、Esc 關閉與背景遮罩
export default function InfoDialog({ open, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // 點擊遮罩（dialog 本身，而非內容區）時關閉
  const handleClick = (event) => {
    if (event.target === ref.current) onClose();
  };

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      onClose={onClose}
      onClick={handleClick}
      aria-labelledby="info-dialog-title"
    >
      <div className={styles.content}>
        <div className={styles.head}>
          <h2 id="info-dialog-title" className={styles.title}>
            使用說明
          </h2>
          <IconButton aria-label="關閉" onClick={onClose}>
            <CloseIcon size={20} />
          </IconButton>
        </div>
        <ol className={styles.tips}>
          {TIPS.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ol>
        <p className={styles.note}>本專案僅用於學習與分享，無營利目的。</p>
        <Button variant="primary" block onClick={onClose}>
          了解
        </Button>
      </div>
    </dialog>
  );
}

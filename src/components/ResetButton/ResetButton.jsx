import React, { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import { ResetIcon } from "../ui/Icons";

const CONFIRM_TIMEOUT = 3000;

// 兩段式重置：第一次點擊進入確認狀態，3 秒內再點一次才真正重置，
// 避免比賽中誤觸把分數清空。
export default function ResetButton({
  onConfirm,
  label = "重置",
  confirmLabel = "再按一次確認",
  ...rest
}) {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (!armed) return undefined;
    const timer = setTimeout(() => setArmed(false), CONFIRM_TIMEOUT);
    return () => clearTimeout(timer);
  }, [armed]);

  const handleClick = () => {
    if (armed) {
      setArmed(false);
      onConfirm();
    } else {
      setArmed(true);
    }
  };

  return (
    <Button
      variant={armed ? "danger" : "secondary"}
      onClick={handleClick}
      onBlur={() => setArmed(false)}
      {...rest}
    >
      <ResetIcon size={18} />
      <span aria-live="polite">{armed ? confirmLabel : label}</span>
    </Button>
  );
}

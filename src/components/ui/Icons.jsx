import React from "react";

// 統一使用 24×24 viewBox、currentColor 的線條圖示，顏色由父層文字色決定
function Icon({ size = 22, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const CheckIcon = (props) => (
  <Icon {...props}>
    <path d="M20 6 9 17l-5-5" />
  </Icon>
);

export const SparkleIcon = (props) => (
  <Icon {...props}>
    <path d="M12 3.5l1.8 4.9a2 2 0 0 0 1.2 1.2l4.9 1.8-4.9 1.8a2 2 0 0 0-1.2 1.2L12 19.5l-1.8-4.9a2 2 0 0 0-1.2-1.2L4.1 11.6 9 9.8a2 2 0 0 0 1.2-1.2z" />
  </Icon>
);

export const ChartIcon = (props) => (
  <Icon {...props}>
    <path d="M3 20h18" />
    <rect x="5" y="11" width="3" height="6" rx="1" />
    <rect x="10.5" y="5" width="3" height="12" rx="1" />
    <rect x="16" y="8" width="3" height="9" rx="1" />
  </Icon>
);

export const InfoIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.5h.01" />
  </Icon>
);

export const ResetIcon = (props) => (
  <Icon {...props}>
    <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3.5 8.5" />
    <path d="M3.5 3.5v5h5" />
  </Icon>
);

export const PlayIcon = (props) => (
  <Icon {...props}>
    <path d="M7 4.8v14.4a.8.8 0 0 0 1.2.7l11.3-7.2a.8.8 0 0 0 0-1.4L8.2 4.1a.8.8 0 0 0-1.2.7z" fill="currentColor" />
  </Icon>
);

export const PauseIcon = (props) => (
  <Icon {...props}>
    <rect x="6" y="4.5" width="4" height="15" rx="1" fill="currentColor" />
    <rect x="14" y="4.5" width="4" height="15" rx="1" fill="currentColor" />
  </Icon>
);

export const TimerIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="13.5" r="7.5" />
    <path d="M12 10v3.5l2 2" />
    <path d="M9.5 2.5h5" />
  </Icon>
);

export const CloseIcon = (props) => (
  <Icon {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Icon>
);

export const ROUTE_ICONS = {
  check: CheckIcon,
  sparkle: SparkleIcon,
  chart: ChartIcon,
};

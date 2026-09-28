// 所有分數都以「十分之一」為單位的整數儲存，避免浮點誤差。
// 例：40 代表 4.0，-3 代表 -0.3。

export const ACCURACY_MAX = 40;
export const INITIAL_ACCURACY = 40;

export const ACCURACY_DEDUCTIONS = [-1, -3, -6];
export const ACCURACY_CORRECTIONS = [1, 3];

export const PRESENTATION_CRITERIA = [
  { key: "power", label: "速度與力量" },
  { key: "time", label: "節奏與時間" },
  { key: "spirit", label: "精神表現" },
];

export const PRESENTATION_ITEM_MAX = 20;
export const PRESENTATION_MAX =
  PRESENTATION_ITEM_MAX * PRESENTATION_CRITERIA.length;
export const TOTAL_MAX = ACCURACY_MAX + PRESENTATION_MAX;

export const INITIAL_PRESENTATION = { power: 10, time: 10, spirit: 10 };

export const GRADE_LEVELS = [
  { label: "完美", values: [20] },
  { label: "優良", values: [19, 18, 17] },
  { label: "良好", values: [16, 15, 14] },
  { label: "普通", values: [13, 12, 11] },
  { label: "不好", values: [10, 9, 8] },
  { label: "很差", values: [7, 6, 5] },
];

export const formatScore = (tenths) => (tenths / 10).toFixed(1);

export const formatDelta = (tenths) =>
  `${tenths > 0 ? "+" : "−"}${formatScore(Math.abs(tenths))}`;

export const formatDuration = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
};

// 必須與 src/styles/_mixins.scss 的 $bp-dashboard 一致。
// 達到此寬度時三個頁面同時並排顯示，不再使用分頁切換。
export const DASHBOARD_QUERY = "(min-width: 1024px)";

export const ROUTES = [
  { path: "/", title: "正確性評分", label: "正確", icon: "check" },
  { path: "/other", title: "表現性評分", label: "表現", icon: "sparkle" },
  { path: "/total", title: "結果", label: "結果", icon: "chart" },
];

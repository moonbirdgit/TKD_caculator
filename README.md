# 跆拳道品勢計算機

為跆拳道品勢比賽設計的線上計分器：輸入正確性扣分與表現性評分，自動計算總分與演練時長。

```bash
npm start       # 開發模式 http://localhost:3000
npm run build   # 產出 build/
```

## 排版（依裝置）

| 寬度 / 情境 | 排版 |
| --- | --- |
| 手機直向 | 單頁 + 底部分頁列，左右滑動換頁；扣分鍵放在下半部方便拇指操作 |
| 手機橫向（高度 ≤ 520px） | 精簡 Header / 分頁列；正確性頁改為左右兩欄 |
| 平板直向 | 單頁，內容寬度上限 640px，按鍵與字級放大 |
| ≥ 1024px（平板橫向、桌機） | 儀表板：正確性 / 表現性 / 結果三欄同時顯示，不需換頁 |

頁面內部元件使用 **container query**，依「實際可用寬度」而非螢幕寬度調整，
所以同一個元件放在手機全寬或桌機窄欄都能正確排版。

## 設計系統

```
src/styles/
  _tokens.scss   設計 token（CSS 變數）：色彩、字級、間距、圓角、陰影、動態；含深色模式
  _mixins.scss   斷點 ($bp-sm / $bp-md / $bp-dashboard)、short、pressable、surface 等 mixin
  global.scss    reset 與全域樣式
src/components/ui/
  Button         variant: primary | secondary | ghost | danger，size: sm | md | lg；IconButton
  Card           一般容器
  Meter          進度條
  Icons          24×24、currentColor 線條圖示
```

原則：

- 元件只使用 `var(--token)`，不寫死顏色與尺寸；深色模式只需覆寫 token。
- 每個元件一個資料夾，樣式用 `*.module.scss`（CSS Modules）避免命名衝突。
- 觸控目標至少 44px（`--touch-min`）。
- `$bp-dashboard` 需與 `src/constants/layout.js` 的 `DASHBOARD_QUERY` 保持一致。

## 程式結構

```
src/
  constants/scoring.js   計分規則（分數以 1/10 為單位的整數儲存，避免浮點誤差）
  constants/layout.js    路由與斷點
  state/ScoreContext.js  全域分數與計時器狀態
  hooks/                 useStopwatch、useMediaQuery、usePageTracking (GA)
  components/layout/     AppShell、Header、TabBar、PagedView（手機滑動）、Dashboard（大螢幕）、Page
  components/            ScoreHero、Stopwatch、DeductionPad、GradeSelector、ScoreSummary、ResultBreakdown…
  pages/                 Correct（正確性）、Other（表現性）、Total（結果）
```

本專案僅用於學習與分享，無營利目的。

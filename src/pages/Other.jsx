import React from "react";
import Page from "../components/layout/Page/Page";
import GradeSelector from "../components/GradeSelector/GradeSelector";
import ScoreSummary from "../components/ScoreSummary/ScoreSummary";
import { useScore } from "../state/ScoreContext";
import { PRESENTATION_CRITERIA } from "../constants/scoring";
import styles from "./Other.module.scss";

// showSummary：儀表板模式下結果欄已經顯示總分，因此不需要重複
function Other({ showSummary = true }) {
  const { accuracy, presentation, presentationTotal, total, setPresentation } =
    useScore();

  return (
    <Page title="表現性評分">
      {PRESENTATION_CRITERIA.map((criterion) => (
        <GradeSelector
          key={criterion.key}
          label={criterion.label}
          value={presentation[criterion.key]}
          onChange={(value) => setPresentation(criterion.key, value)}
        />
      ))}
      {showSummary && (
        <ScoreSummary
          className={styles.summary}
          accuracy={accuracy}
          presentation={presentationTotal}
          total={total}
        />
      )}
    </Page>
  );
}

export default Other;

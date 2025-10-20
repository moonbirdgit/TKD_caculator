import React, { useRef, useEffect } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Timer from "../components/Timer/Timer";
import Buttons from "../components/Buttons/Buttons";
import Score from "../components/Score/Score";

function Correct({ score, onScoreChange, onResetAll, time, setTime }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pageRef.current) {
        pageRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="correct pages">
      <Header title="正確性評分" />

      <Score score={score} />
      <Timer onResetAll={onResetAll} time={time} setTime={setTime} />

      <Buttons onScoreChange={onScoreChange} />
      <Nav ref={pageRef} />
    </div>
  );
}

export default Correct;

import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Timer from "../components/Timer/Timer";
import Buttons from "../components/Buttons/Buttons";
import Score from "../components/Score/Score";

function Correct({ score, onScoreChange, onResetAll, time, setTime }) {
  return (
    <div className="correct pages">
      <Header title="正確性評分" />

      <Score score={score} />
      <Timer onResetAll={onResetAll} time={time} setTime={setTime} />

      <Buttons onScoreChange={onScoreChange} />
      <Nav />
    </div>
  );
}

export default Correct;

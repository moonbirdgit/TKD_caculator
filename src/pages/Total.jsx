import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import List from "../components/List/List";
function Total({ correctScore, multipliers, time }) {
  return (
    <div className="total pages">
      <Header title="結果" />
      <List correctScore={correctScore} multipliers={multipliers} time={time} />
      <Nav />
    </div>
  );
}

export default Total;

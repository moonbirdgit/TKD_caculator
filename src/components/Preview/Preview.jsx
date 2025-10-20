import React from "react";
import "./preview.scss";
function Preview({ correctScore, perScore, total }) {
  return (
    <div className="preview">
      <div className="box cor">
        <h3>正確分</h3>
        <p>{correctScore}</p>
      </div>
      <div className="box per">
        <h3>表現分</h3>
        <p>{perScore}</p>
      </div>
      <div className="box tal">
        <h3>總分</h3>
        <p>{total}</p>
      </div>
    </div>
  );
}

export default Preview;

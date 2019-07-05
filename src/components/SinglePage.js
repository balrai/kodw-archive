import React from "react";

export default ({ back, url, data }) => {
  return (
    <div>
      <div className="back" onClick={() => back()}>
        Back
      </div>
    </div>
  );
};

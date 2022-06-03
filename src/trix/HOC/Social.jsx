import React from "react";

const Social = (Component, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={className}>
        <Component />
        <ul>
          <li>FaceBook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    );
  };

export default Social;

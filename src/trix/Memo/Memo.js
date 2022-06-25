import React, { useState, memo, useMemo, useCallback } from "react";

const Swatch = ({ params, onClick }) => {
  console.log("App Rendered" + params.color);
  return (
    <div
      onClick={onClick}
      style={{
        width: 300,
        height: 300,
        backgroundColor: params.color,
        padding: 5,
        borderRadius: 6,
      }}
    ></div>
  );
};
// const MemoSwitch = memo(Swatch, (prevProps, nextProps) => {
//   return prevProps.params.color === nextProps.params.color;
// });
const MemoSwitch = memo(Swatch);
const Memo = () => {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");
  console.log("App rendered:" + appRenderIndex);
  const params = useMemo(() => ({ color }), [color]);
  const onClick = useCallback(() => {}, []);
  return (
    <div>
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Click
      </button>
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        Change Color
      </button>
      <MemoSwitch params={params} onClick={onClick} />
    </div>
  );
};

export default Memo;

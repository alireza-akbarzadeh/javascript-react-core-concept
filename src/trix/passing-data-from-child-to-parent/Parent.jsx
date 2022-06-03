import React, { useEffect, useRef, useState } from "react";
import Childe from "./Child";
const Parent = () => {
  const [count, setCount] = useState(undefined);
  let ref = useRef(null);
  useEffect(() => {
    setCount(ref.current);
  }, [ref]);

  return (
    <div>
      <Childe ref={ref} />
      {count?.map((item, index) => (
        <li key={item + index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </li>
      ))}
    </div>
  );
};

export default Parent;

import React, { forwardRef } from "react";

const Child = forwardRef((props, ref) => {
  const product = [
    { id: 1, name: "Iphone", price: 3000 },
    { id: 2, name: "samsung", price: 1500 },
    { id: 3, name: "xiaomi", price: 500 },
    { id: 4, name: "sony", price: 800 },
    { id: 5, name: "nokia", price: 1000 },
  ];
  ref.current = product;
  return <div>Child</div>;
});

export default Child;

import { createPortal } from "react-dom";
const Portal = ({ children }) => {
  const domNode = document.getElementById("portal");
  return createPortal(children, domNode);
};

export default Portal;

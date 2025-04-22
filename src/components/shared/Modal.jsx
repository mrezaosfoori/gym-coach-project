import Popup from "reactjs-popup";
import { cloneElement, isValidElement } from "react";

const Modal = ({ button, children }) => {
  return (
    <Popup trigger={<div>{button}</div>} modal nested>
      {(close) =>
        isValidElement(children)
          ? cloneElement(children, { close }) // Inject `close` as a prop
          : children
      }
    </Popup>
  );
};

export default Modal;

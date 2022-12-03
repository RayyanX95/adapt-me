import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    //* Clean the modal content from the DOM when the modal is unmounted / destroyed.
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  //* createPortal(content, elementToAttachContent)
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

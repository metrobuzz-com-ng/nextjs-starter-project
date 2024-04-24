"use client";

import { ChildrenProps, ModalBaseProps } from "@/types";
import "./index.css";

const Modal = ({
  opened,
  onClose = () => {},
  children,
}: ModalBaseProps & ChildrenProps) => {
  // useEffect(() => {
  //   if (opened) {
  //     document.body.classList.add("hidden-overflow");
  //   } else {
  //     document.body.classList.remove("hidden-overflow");
  //   }

  //   return () => {
  //     document.body.classList.remove("hidden-overflow");
  //   };
  // }, [opened]);

  if (!opened) return <></>;

  return (
    <div className="modal" onClick={onClose} role="document">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

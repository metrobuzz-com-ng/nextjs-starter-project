"use client";

import { ChildrenProps, ModalBaseProps } from "@/types";
import BoostrapModal from "react-bootstrap/Modal";

const Modal = ({
  opened,
  onClose = () => {},
}: ModalBaseProps & ChildrenProps) => {
  if (!opened) return <></>;

  return (
    <BoostrapModal
      backdrop="static"
      keyboard={false}
      show={opened}
      onHide={onClose}
    >
      <BoostrapModal.Header closeButton>
        <BoostrapModal.Title>Random modal</BoostrapModal.Title>
      </BoostrapModal.Header>
    </BoostrapModal>
  );

  // return (
  //   <div className="modal" onClick={onClose} role="document">
  //     <div className="modal-container" onClick={(e) => e.stopPropagation()}>
  //       {children}
  //     </div>
  //   </div>
  // );
};

export default Modal;

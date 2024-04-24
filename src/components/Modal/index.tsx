"use client";

import { ChildrenProps, ModalBaseProps } from "@/types";
import MaterialModal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Modal = ({
  opened,
  onClose = () => {},
  children,
}: ModalBaseProps & ChildrenProps) => {
  if (!opened) return <></>;

  return (
    <MaterialModal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={opened}
      onClose={onClose}
    >
      <Box sx={style}>{children}</Box>
    </MaterialModal>
  );
};

export default Modal;

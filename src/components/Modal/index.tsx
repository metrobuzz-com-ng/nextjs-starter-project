"use client";

import { ChildrenProps, ModalBaseProps } from "@/types";
import { Modal as MantineModal, Button } from "@mantine/core";

const Modal = ({
  opened,
  onClose = () => {},
  children,
}: ModalBaseProps & ChildrenProps) => {
  if (!opened) return <></>;

  return (
    <MantineModal opened={opened} onClose={onClose} centered>
      {children}
    </MantineModal>
  );
};

export default Modal;

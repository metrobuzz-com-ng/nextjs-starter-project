import { ModalBaseProps } from "@/types";
import { FC } from "react";
import { Modal } from "@/components";

const SampleModal: FC<ModalBaseProps> = ({ onClose, opened }) => {
  return (
    <>
      <Modal opened={opened} onClose={onClose}>
        <></>
      </Modal>
    </>
  );
};

export default SampleModal;

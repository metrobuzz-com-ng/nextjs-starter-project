"use client";

import Portal from "./portal";
import { useModals } from "./context";
import { SampleModal } from "@/modals";

const ModalsContainer = () => {
  const { setShowDefaultModal, showDefaultModal } = useModals();

  return (
    <Portal>
      <></>
      {/** Add modals that should be rendered in the portal here */}
      <SampleModal
        onClose={() => setShowDefaultModal(false)}
        opened={showDefaultModal}
      />
    </Portal>
  );
};

export default ModalsContainer;

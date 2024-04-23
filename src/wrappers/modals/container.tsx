"use client";

import { Portal } from "@/wrappers";
import { useModals } from "./context";

const ModalsContainer = () => {
  const { setShowDefaultModal, showDefaultModal } = useModals();

  return (
    <Portal>
      <></>
      {/** Add modals that should be rendered in the portal here */}
    </Portal>
  );
};

export default ModalsContainer;

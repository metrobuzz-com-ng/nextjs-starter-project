"use client";

import { ChildrenProps, InitialModalValue } from "@/types";
import { FC, createContext, useContext, useMemo, useState } from "react";
import ModalsContainer from "./container";

const initialValue: InitialModalValue = {
  showDefaultModal: false,
  setShowDefaultModal: (value) => {},
};

const ModalContext = createContext(initialValue);

export const useModals = () => useContext(ModalContext);

const ModalContextProvider: FC<ChildrenProps> = ({ children }) => {
  const [showDefaultModal, setShowDefaultModal] = useState(false);

  // Will help the values not to continnually be rendered on every load
  const value = useMemo(() => {
    return { showDefaultModal, setShowDefaultModal };
  }, [showDefaultModal, setShowDefaultModal]);

  return (
    <ModalContext.Provider value={value}>
      <ModalsContainer />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
